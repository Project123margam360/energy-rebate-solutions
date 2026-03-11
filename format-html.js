const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const BUILD_DIR = path.join(__dirname, '.next', 'server', 'app');

function findHtmlFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findHtmlFiles(fullPath));
    } else if (entry.name.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

async function formatAll() {
  const files = findHtmlFiles(BUILD_DIR);
  console.log(`Formatting ${files.length} HTML files...`);

  for (const file of files) {
    try {
      const html = fs.readFileSync(file, 'utf-8');
      const formatted = await prettier.format(html, {
        parser: 'html',
        printWidth: 120,
        tabWidth: 2,
      });
      fs.writeFileSync(file, formatted, 'utf-8');
      console.log(`  ✓ ${path.relative(__dirname, file)}`);
    } catch (err) {
      console.error(`  ✗ ${path.relative(__dirname, file)}: ${err.message}`);
    }
  }

  console.log('Done!');
}

formatAll();
