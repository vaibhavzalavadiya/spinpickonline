const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const width = 1200;
const height = 630;

// Create SVG for 1200x630 OG image
const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="50%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#818cf8" />
      <stop offset="100%" stop-color="#c084fc" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.4" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bg)" />

  <!-- Ambient background glow circles -->
  <circle cx="260" cy="315" r="220" fill="#6366f1" opacity="0.12" />
  <circle cx="1000" cy="150" r="260" fill="#a855f7" opacity="0.10" />
  <circle cx="800" cy="520" r="200" fill="#0ea5e9" opacity="0.08" />

  <!-- LEFT: The Wheel -->
  <g transform="translate(270, 315)" filter="url(#shadow)">
    <!-- Wheel Outer Rim -->
    <circle cx="0" cy="0" r="190" fill="#ffffff" opacity="0.1" />
    <circle cx="0" cy="0" r="182" fill="#1e293b" stroke="#334155" stroke-width="4" />

    <!-- 8 Wheel Slices (Angles: 0, 45, 90, 135, 180, 225, 270, 315) -->
    <!-- Slice 1: 0 to 45 deg (#EF4444) -->
    <path d="M 0 0 L 175 0 A 175 175 0 0 1 123.74 123.74 Z" fill="#ef4444" />
    <!-- Slice 2: 45 to 90 deg (#F97316) -->
    <path d="M 0 0 L 123.74 123.74 A 175 175 0 0 1 0 175 Z" fill="#f97316" />
    <!-- Slice 3: 90 to 135 deg (#EAB308) -->
    <path d="M 0 0 L 0 175 A 175 175 0 0 1 -123.74 123.74 Z" fill="#eab308" />
    <!-- Slice 4: 135 to 180 deg (#10B981) -->
    <path d="M 0 0 L -123.74 123.74 A 175 175 0 0 1 -175 0 Z" fill="#10b981" />
    <!-- Slice 5: 180 to 225 deg (#06B6D4) -->
    <path d="M 0 0 L -175 0 A 175 175 0 0 1 -123.74 -123.74 Z" fill="#06b6d4" />
    <!-- Slice 6: 225 to 270 deg (#3B82F6) -->
    <path d="M 0 0 L -123.74 -123.74 A 175 175 0 0 1 0 -175 Z" fill="#3b82f6" />
    <!-- Slice 7: 270 to 315 deg (#8B5CF6) -->
    <path d="M 0 0 L 0 -175 A 175 175 0 0 1 123.74 -123.74 Z" fill="#8b5cf6" />
    <!-- Slice 8: 315 to 360 deg (#EC4899) -->
    <path d="M 0 0 L 123.74 -123.74 A 175 175 0 0 1 175 0 Z" fill="#ec4899" />

    <!-- Center Hub -->
    <circle cx="0" cy="0" r="52" fill="#ffffff" filter="url(#shadow)" />
    <circle cx="0" cy="0" r="42" fill="#1e1b4b" />
    <text x="0" y="8" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">SPIN</text>

    <!-- Pointer at the Top -->
    <polygon points="0,-190 -16,-220 16,-220" fill="#ffffff" filter="url(#shadow)" />
    <polygon points="0,-187 -12,-214 12,-214" fill="#ef4444" />
  </g>

  <!-- RIGHT: Branding & Messaging -->
  <g transform="translate(530, 160)">
    <!-- Top Pill Badge -->
    <rect x="0" y="0" width="280" height="36" rx="18" fill="#312e81" stroke="#6366f1" stroke-width="1.5" />
    <text x="140" y="23" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="bold" fill="#a5b4fc" text-anchor="middle" letter-spacing="1">
      FREE RANDOM DECISION MAKER
    </text>

    <!-- Brand Name Heading -->
    <text x="0" y="95" font-family="Arial, Helvetica, sans-serif" font-size="62" font-weight="900" fill="#ffffff" letter-spacing="-1">
      SpinPick<tspan fill="url(#accentGrad)">Online</tspan>
    </text>

    <!-- Subtitle -->
    <text x="0" y="145" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="500" fill="#94a3b8">
      Free Random Picker Wheel, Coin Flip &amp; Dice
    </text>

    <!-- Feature Grid / Pills -->
    <g transform="translate(0, 195)">
      <!-- Pill 1 -->
      <rect x="0" y="0" width="280" height="44" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1" />
      <text x="20" y="28" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="600" fill="#f8fafc">
        🎯 100% Cryptographic Fairness
      </text>

      <!-- Pill 2 -->
      <rect x="300" y="0" width="280" height="44" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1" />
      <text x="320" y="28" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="600" fill="#f8fafc">
        ⚡ Instant Spin &amp; Live Sounds
      </text>

      <!-- Pill 3 -->
      <rect x="0" y="60" width="280" height="44" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1" />
      <text x="20" y="88" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="600" fill="#f8fafc">
        🪙 3D Coin Flip &amp; Dice Roller
      </text>

      <!-- Pill 4 -->
      <rect x="300" y="60" width="280" height="44" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1" />
      <text x="320" y="88" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="600" fill="#f8fafc">
        🔒 100% Free &amp; No Sign-Up
      </text>
    </g>

    <!-- Bottom URL Bar -->
    <g transform="translate(0, 345)">
      <circle cx="8" cy="-5" r="4" fill="#22c55e" />
      <text x="24" y="0" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" letter-spacing="0.5">
        spinpickonline.com
      </text>
      <text x="190" y="0" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="normal" fill="#64748b">
        — Trusted by 50,000+ monthly decision makers
      </text>
    </g>
  </g>
</svg>
`;

async function run() {
  const buf = Buffer.from(svg);
  const outPath1 = path.join('public', 'opengraph-image.png');
  const outPath2 = path.join('public', 'images', 'og-image.png');

  // Ensure public/images directory exists
  if (!fs.existsSync(path.join('public', 'images'))) {
    fs.mkdirSync(path.join('public', 'images'), { recursive: true });
  }

  await sharp(buf)
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(outPath1);
  console.log(`Generated: ${outPath1} (${fs.statSync(outPath1).size} bytes)`);

  await sharp(buf)
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(outPath2);
  console.log(`Generated: ${outPath2} (${fs.statSync(outPath2).size} bytes)`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
