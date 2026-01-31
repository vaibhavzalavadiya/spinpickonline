# Random Picker Wheel - Architecture Documentation

## Folder Structure

```
spinpickonline/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with Header/Footer
│   ├── page.tsx                 # Homepage
│   ├── wheel/
│   │   ├── page.tsx             # Main wheel app (client component)
│   │   └── [id]/
│   │       └── page.tsx         # Shared wheel pages (dynamic)
│   ├── random-picker-wheel/
│   │   └── page.tsx             # Primary keyword page
│   ├── use-cases/
│   │   ├── page.tsx             # Use cases index
│   │   └── [slug]/
│   │       └── page.tsx         # Programmatic use case pages
│   ├── features/
│   │   ├── page.tsx             # Features index
│   │   └── [slug]/
│   │       └── page.tsx         # Programmatic feature pages
│   ├── faq/
│   │   └── page.tsx             # FAQ page with schema
│   ├── how-it-works/
│   │   └── page.tsx             # Educational content
│   ├── sitemap.ts               # Dynamic sitemap generation
│   └── robots.ts                # Robots.txt generation
├── components/                   # Shared React components
│   ├── Header.tsx               # Site navigation
│   ├── Footer.tsx               # Site footer with links
│   ├── Wheel.tsx                # Wheel visualization (client)
│   ├── SchemaScript.tsx         # Schema markup component
│   └── Breadcrumbs.tsx          # Breadcrumb navigation
├── lib/                          # Utilities and helpers
│   ├── constants.ts             # Site config, data (use cases, features, FAQs)
│   ├── types.ts                 # TypeScript type definitions
│   ├── seo.ts                   # SEO metadata & schema generators
│   └── wheel-utils.ts           # Wheel logic & localStorage helpers
└── public/                       # Static assets
```

## Key Architecture Decisions

### 1. SEO-First Structure
- **Programmatic Pages**: Use cases and features are generated from data in `constants.ts`
- **Metadata Generation**: Centralized SEO helpers in `lib/seo.ts` ensure consistency
- **Schema Markup**: JSON-LD schema added to all relevant pages
- **Static Generation**: Most pages use `generateStaticParams` for optimal performance

### 2. Client/Server Component Separation
- **Server Components**: All page components are server components by default
- **Client Components**: Only interactive parts (Wheel, wheel page controls) are client components
- **Metadata**: All metadata is generated server-side for SEO

### 3. State Management
- **localStorage**: Wheel state persisted in browser
- **URL State**: Shared wheels use URL parameters (future: database)
- **No Global State**: React state management only where needed

### 4. Performance Optimizations
- **Static Generation**: Use cases and features pre-rendered at build time
- **Image Optimization**: Next.js Image component with WebP
- **Code Splitting**: Automatic via Next.js App Router
- **Caching**: Proper cache headers in next.config.ts

## SEO Implementation

### Metadata Rules (Following SEO_IMPLEMENTATION_RULES.md)

1. **Title Tags**: 30-60 characters, unique per page
   - Generated via `generateMetadata()` in `lib/seo.ts`
   - Validated for length before deployment

2. **Meta Descriptions**: 120-160 characters, unique per page
   - Includes primary keyword naturally
   - Value proposition and CTA included

3. **H1 Tags**: Exactly one per page
   - Contains primary keyword
   - Visible above the fold
   - Maximum 60 characters

4. **Schema Markup**: 
   - Organization (homepage)
   - WebSite (homepage)
   - WebApplication (homepage, /wheel)
   - FAQPage (FAQ page, homepage section)
   - HowTo (use case pages)
   - Article (educational pages)
   - BreadcrumbList (all pages with breadcrumbs)

5. **Canonical URLs**: 
   - Absolute URLs (https://)
   - Self-referencing
   - No query parameters
   - No trailing slashes

6. **Robots Meta**:
   - Default: "index, follow" for public pages
   - "noindex, follow" for private/shared wheels (conditional)

## Programmatic SEO

### Use Case Pages (`/use-cases/[slug]`)
- Generated from `USE_CASES` array in `constants.ts`
- Each page has unique content (300+ words)
- Links to related use cases and features
- Includes HowTo schema

### Feature Pages (`/features/[slug]`)
- Generated from `FEATURES` array in `constants.ts`
- Feature-specific content and examples
- Links to relevant use cases
- Comparison points included

## Wheel Functionality

### Client-Side Logic
- **Random Generation**: Uses `crypto.getRandomValues()` for secure randomness
- **State Persistence**: localStorage saves wheel state
- **Visual Animation**: Canvas-based wheel with smooth spinning animation
- **Color Generation**: Automatic color assignment for entries

### Wheel Component
- Canvas-based rendering for performance
- Smooth animation with easing
- Responsive design
- Accessible (keyboard navigation, ARIA labels)

## Performance Features

1. **Core Web Vitals Optimized**:
   - LCP: Optimized images, above-fold content
   - FID/INP: Minimal JavaScript, efficient event handlers
   - CLS: Explicit image dimensions, no layout shifts

2. **Static Generation**:
   - Use cases and features pre-rendered
   - Sitemap generated at build time
   - Robots.txt generated at build time

3. **Image Optimization**:
   - Next.js Image component
   - WebP format with fallbacks
   - Lazy loading for below-fold images

## AdSense-Safe Layout

- **Content-First**: Main content appears before any ad slots
- **Natural Flow**: Ads placed in logical positions (sidebar, between sections)
- **No Intrusive Ads**: No popups or overlays blocking content
- **Mobile-Friendly**: Responsive ad units

## Future Enhancements

1. **Database Integration**: 
   - Store shared wheels in database
   - User accounts (optional)
   - Analytics tracking

2. **Enhanced Sharing**:
   - Generate shareable links
   - Social media integration
   - Embed codes

3. **Advanced Features**:
   - Wheel templates
   - Custom images
   - Multiple wheels
   - Export/import functionality

## Development Guidelines

### Adding New Use Cases
1. Add entry to `USE_CASES` array in `lib/constants.ts`
2. Ensure unique slug, title, description
3. Follow content uniqueness rules (60%+ unique)
4. Add related links

### Adding New Features
1. Add entry to `FEATURES` array in `lib/constants.ts`
2. Follow same structure as existing features
3. Update feature index page if needed

### SEO Checklist (Before Deployment)
- [ ] All titles 30-60 characters
- [ ] All descriptions 120-160 characters
- [ ] Exactly one H1 per page with primary keyword
- [ ] Canonical URLs set correctly
- [ ] Schema markup validates (Google Rich Results Test)
- [ ] All images have alt text
- [ ] Internal links work (no 404s)
- [ ] Sitemap includes all pages
- [ ] Robots.txt configured correctly

## Environment Variables

```env
NEXT_PUBLIC_DOMAIN=spinpickonline.com
NEXT_PUBLIC_URL=https://spinpickonline.com
```

## Build & Deploy

```bash
# Development
npm run dev

# Production Build
npm run build

# Start Production Server
npm start
```

## Testing SEO

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **PageSpeed Insights**: https://pagespeed.web.dev/
3. **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
4. **Schema Validator**: https://validator.schema.org/

