import os

css = """@import "tailwindcss";

:root {
  --navy: #1a365d;
  --navy-light: #234e82;
  --navy-dark: #0f2440;
  --background: #ffffff;
  --foreground: #1c1917;
}

@theme inline {
  --color-background: #ffffff;
  --color-foreground: #1c1917;
  --color-navy: #1a365d;
  --color-navy-light: #234e82;
  --color-navy-dark: #0f2440;
  --color-amber: #f59e0b;
  --color-amber-light: #fbbf24;
  --color-amber-dark: #d97706;
  --color-orange: #ea580c;
  --color-orange-light: #f97316;
  --color-orange-dark: #c2410c;
  --color-green: #f59e0b;
  --color-green-light: #fbbf24;
  --color-green-dark: #d97706;
  --color-warm: #fef3c7;
  --color-gray-50: #fafaf9;
  --color-gray-100: #f5f5f4;
  --color-gray-200: #e7e5e4;
  --color-gray-300: #d6d3d1;
  --color-gray-400: #a8a29e;
  --color-gray-500: #78716c;
  --color-gray-600: #57534e;
  --color-gray-700: #44403c;
  --color-gray-800: #292524;
  --color-gray-900: #1c1917;
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

* { scroll-behavior: smooth; }

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans), system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.nav-link {
  position: relative;
  color: #44403c;
  font-weight: 500;
  font-size: 0.9375rem;
  transition: color 0.2s ease;
}
.nav-link:hover { color: #1a365d; }
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #fbbf24, #ea580c);
  transition: width 0.25s ease;
}
.nav-link:hover::after { width: 100%; }

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #f59e0b, #ea580c);
  color: white;
  font-weight: 600;
  padding: 0.625rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.9375rem;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(234, 88, 12, 0.35);
}
.btn-primary:hover {
  background: linear-gradient(135deg, #d97706, #c2410c);
  box-shadow: 0 6px 24px rgba(234, 88, 12, 0.5);
  transform: translateY(-2px);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid #1a365d;
  color: #1a365d;
  font-weight: 600;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  font-size: 0.9375rem;
  transition: all 0.2s ease;
}
.btn-outline:hover {
  background: #1a365d;
  color: white;
}

.text-gradient {
  background: linear-gradient(135deg, #fbbf24, #f97316, #ea580c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-gradient {
  background: linear-gradient(135deg, #0f2440 0%, #1a365d 50%, #234e82 100%);
}

.section-warm {
  background: linear-gradient(180deg, #fef3c7 0%, #fde68a 50%, #fef3c7 100%);
}

.section-warm-light {
  background: #fef3c7;
}

.cta-gradient {
  background: linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ea580c 100%);
}

.card-warm {
  transition: all 0.3s ease;
}
.card-warm:hover {
  box-shadow: 0 8px 30px rgba(245, 158, 11, 0.2);
  border-color: #fbbf24 !important;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 30s linear infinite;
}
.animate-marquee:hover {
  animation-play-state: paused;
}
"""

target = os.path.join(os.path.dirname(__file__), "src", "app", "globals.css")
with open(target, "w") as f:
    f.write(css)
print("globals.css written successfully")
