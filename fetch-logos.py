import urllib.request
import os

brands_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public", "brands")
os.makedirs(brands_dir, exist_ok=True)

headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"}

def fetch(url, dest):
    try:
        req = urllib.request.Request(url, headers=headers)
        resp = urllib.request.urlopen(req, timeout=15)
        data = resp.read()
        if len(data) > 100 and b'<Error>' not in data and b'<!DOCTYPE html' not in data:
            with open(dest, 'wb') as f:
                f.write(data)
            return True
    except Exception as e:
        print(f"    Error: {e}")
    return False

# Try multiple sources for each brand
brand_urls = {
    "carrier": [
        "https://cdn.simpleicons.org/carrier/0066B3",
    ],
    "daikin": [
        "https://cdn.simpleicons.org/daikin/003B73",
    ],
    "rinnai": [
        "https://cdn.simpleicons.org/rinnai/E30613",
    ],
    "midea": [
        "https://cdn.simpleicons.org/midea/00A0E9",
    ],
    "fox-ess": [
        "https://cdn.simpleicons.org/foxess/E8611A",
    ],
    "goodwe": [
        "https://cdn.simpleicons.org/goodwe/E30613",
    ],
    "sungrow": [
        "https://cdn.simpleicons.org/sungrow/F58220",
    ],
    "jinko-solar": [
        "https://cdn.simpleicons.org/jinkosolar/00843D",
    ],
}

for brand, urls in brand_urls.items():
    dest = os.path.join(brands_dir, f"{brand}.svg")
    # Always re-fetch
    success = False
    for url in urls:
        print(f"  Trying {brand} from {url}...")
        if fetch(url, dest):
            print(f"  ✓ {brand}: {os.path.getsize(dest)} bytes")
            success = True
            break
    if not success:
        print(f"  ✗ {brand}: FAILED")

print("\n--- Final check ---")
for f in sorted(os.listdir(brands_dir)):
    fp = os.path.join(brands_dir, f)
    sz = os.path.getsize(fp)
    status = "✓" if sz > 150 else "✗ TOO SMALL"
    print(f"  {f}: {sz} bytes {status}")
