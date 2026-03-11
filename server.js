const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const prettier = require('prettier');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);

      // Only intercept page requests (not static assets, API routes, etc.)
      const isPageRequest =
        !parsedUrl.pathname.startsWith('/_next/') &&
        !parsedUrl.pathname.startsWith('/api/') &&
        !parsedUrl.pathname.match(/\.\w+$/);

      if (!isPageRequest) {
        return handle(req, res, parsedUrl);
      }

      // Buffer the entire response instead of streaming
      const originalWrite = res.write;
      const originalEnd = res.end;
      const originalWriteHead = res.writeHead;
      let chunks = [];
      let statusCode = 200;
      let headers = {};

      // Capture writeHead to get status and headers
      res.writeHead = function (code, hdrs) {
        statusCode = code;
        if (hdrs) {
          Object.assign(headers, hdrs);
        }
        return res;
      };

      // Buffer writes instead of sending immediately
      res.write = function (chunk) {
        if (typeof chunk === 'string') {
          chunks.push(Buffer.from(chunk));
        } else if (Buffer.isBuffer(chunk)) {
          chunks.push(chunk);
        }
        return true;
      };

      // On end, format and send
      res.end = async function (chunk) {
        if (chunk) {
          if (typeof chunk === 'string') {
            chunks.push(Buffer.from(chunk));
          } else if (Buffer.isBuffer(chunk)) {
            chunks.push(chunk);
          }
        }

        const contentType =
          res.getHeader('content-type') || headers['content-type'] || '';

        if (contentType.includes('text/html') && chunks.length > 0) {
          const html = Buffer.concat(chunks).toString('utf-8');
          try {
            const formatted = await prettier.format(html, {
              parser: 'html',
              printWidth: 120,
              tabWidth: 2,
            });
            // Remove buffered content-length since formatted size differs
            res.removeHeader('content-length');
            delete headers['content-length'];
            originalWriteHead.call(res, statusCode, headers);
            originalEnd.call(res, formatted);
          } catch (err) {
            console.error('Prettier formatting error:', err.message);
            originalWriteHead.call(res, statusCode, headers);
            originalEnd.call(res, Buffer.concat(chunks));
          }
        } else {
          if (Object.keys(headers).length > 0) {
            originalWriteHead.call(res, statusCode, headers);
          }
          originalEnd.call(res, chunks.length > 0 ? Buffer.concat(chunks) : undefined);
        }
      };

      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error(err);
      res.statusCode = 500;
      res.end('Internal server error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
