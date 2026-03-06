#!/usr/bin/env python3
"""Download official brand logos from various sources."""

import urllib.request
import os
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

BRANDS_DIR = '/Users/narasimhareddykasarla/Desktop/energy rebate solutions/public/brands'

def download(url, filepath, timeout=8):
    """Try downloading a URL. Returns (success, data_bytes)."""
    try:
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        })
        resp = urllib.request.urlopen(req, timeout=timeout, context=ctx)
        data = resp.read()
        
        # Check if we got HTML instead of an image
        start = data[:500].decode('utf-8', errors='replace').lower()
        if '<!doctype html' in start or '<html' in start:
            print(f'  SKIP (got HTML page): {url}')
            return False, None
        
        with open(filepath, 'wb') as f:
            f.write(data)
        return True, data
    except Exception as e:
        print(f'  FAIL: {url} -> {e}')
        return False, None


def try_sources(brand_name, filename_base, urls):
    """Try multiple URLs for a brand, save the first successful one."""
    print(f'\n=== {brand_name} ===')
    for url in urls:
        ext = url.split('.')[-1].split('?')[0][:4]
        filepath = os.path.join(BRANDS_DIR, f'{filename_base}.{ext}')
        
        success, data = download(url, filepath)
        if success:
            size = os.path.getsize(filepath)
            # Verify SVG
            if ext == 'svg':
                content = data[:500].decode('utf-8', errors='replace')
                if '<svg' in content.lower() or '<?xml' in content.lower():
                    print(f'  SUCCESS (SVG, {size} bytes): {url}')
                    return True
                else:
                    print(f'  SKIP (not valid SVG): {url}')
                    os.remove(filepath)
                    continue
            else:
                # PNG check - starts with PNG magic bytes
                if data[:4] == b'\x89PNG':
                    print(f'  SUCCESS (PNG, {size} bytes): {url}')
                    return True
                else:
                    print(f'  SKIP (not valid PNG): {url}')
                    os.remove(filepath)
                    continue
    
    print(f'  FAILED: No working source found for {brand_name}')
    return False


# ===== RINNAI =====
try_sources('Rinnai', 'rinnai', [
    'https://www.rinnai.com.au/wp-content/themes/rinnai/views/svg/rinnai-logo.svg',
    'https://www.rinnai.com.au/wp-content/themes/rinnai/dist/images/rinnai-logo.svg',
    'https://www.rinnai.com.au/wp-content/themes/rinnai/assets/images/logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/8/82/Rinnai_logo.svg',
    'https://upload.wikimedia.org/wikipedia/en/8/82/Rinnai_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Rinnai_logo.svg/1200px-Rinnai_logo.svg.png',
])

# ===== FOX ESS =====
try_sources('Fox ESS', 'fox-ess', [
    'https://www.fox-ess.com/Public/Uploads/uploadfile/images/20251110/logo.png',
    'https://www.fox-ess.com/Public/Uploads/uploadfile/images/20251110/logo-364.png',
    'https://www.fox-ess.com/Public/En/images/logo.svg',
    'https://www.fox-ess.com/Public/En/images/logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/Fox_ESS_logo.svg',
])

# ===== GOODWE =====
try_sources('GoodWe', 'goodwe', [
    'https://en.goodwe.com/Public/En/images/logo.svg',
    'https://en.goodwe.com/Public/En/images/logo.png',
    'https://en.goodwe.com/Public/En/images/goodwe-logo.svg',
    'https://en.goodwe.com/Public/En/images/goodwe-logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/GoodWe_logo.svg',
    'https://upload.wikimedia.org/wikipedia/en/GoodWe_logo.svg',
])

# ===== SUNGROW =====
try_sources('Sungrow', 'sungrow', [
    'https://official-oversears-file.sungrowpower.com/website/_next/static/media/logo.84e5bb0c.svg',
    'https://upload.wikimedia.org/wikipedia/commons/Sungrow_logo.svg',
])

# ===== JINKO SOLAR =====
try_sources('Jinko Solar', 'jinko-solar', [
    'https://jinkosolarcdn.shwebspace.com/themes/basicen/skin/images/logony.png',
    'https://upload.wikimedia.org/wikipedia/commons/JinkoSolar_logo.svg',
    'https://upload.wikimedia.org/wikipedia/en/JinkoSolar_logo.svg',
])

# Report final status
print('\n\n=== FINAL STATUS ===')
for f in sorted(os.listdir(BRANDS_DIR)):
    fpath = os.path.join(BRANDS_DIR, f)
    if os.path.isfile(fpath):
        size = os.path.getsize(fpath)
        print(f'  {f}: {size} bytes')
