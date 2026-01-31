# Random Picker Wheel - SpinPickOnline

A production-ready, SEO-optimized random picker wheel web application built with Next.js and Tailwind CSS.

## Features

- 🎯 **SEO Optimized**: Follows strict SEO implementation rules
- 🎨 **Beautiful UI**: Modern, responsive design with Tailwind CSS
- ⚡ **Fast Performance**: Optimized for Core Web Vitals
- 📱 **Mobile-Friendly**: Works perfectly on all devices
- 🔒 **Secure Randomization**: Cryptographically secure random number generation
- 💾 **State Persistence**: Saves wheel state in localStorage
- 🔗 **Shareable**: Generate shareable links (future enhancement)
- 🆓 **100% Free**: No signup required, no limits

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed architecture documentation.

## SEO Implementation

This project strictly follows the SEO rules defined in `SEO_IMPLEMENTATION_RULES.md`:

- ✅ Unique metadata (title, description) per page
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ Schema markup (Organization, WebSite, WebApplication, FAQPage, etc.)
- ✅ Canonical URLs
- ✅ Programmatic page generation
- ✅ Performance optimizations
- ✅ Mobile-first design

## Key Pages

- `/` - Homepage with hero, features, FAQ section
- `/wheel` - Main wheel application
- `/random-picker-wheel` - Primary keyword landing page
- `/use-cases/[slug]` - Programmatic use case pages
- `/features/[slug]` - Programmatic feature pages
- `/faq` - FAQ page with schema markup
- `/how-it-works` - Educational content

## Development

### Adding New Use Cases

1. Add entry to `USE_CASES` array in `lib/constants.ts`
2. Ensure unique content (300+ words)
3. Follow SEO rules for titles and descriptions

### Adding New Features

1. Add entry to `FEATURES` array in `lib/constants.ts`
2. Follow same structure as existing features

## Performance

- **LCP**: < 2.5s (target)
- **FID/INP**: < 100ms (target)
- **CLS**: < 0.1 (target)
- **TTFB**: < 600ms

## License

MIT

## Support

For questions or issues, please open an issue on GitHub.
