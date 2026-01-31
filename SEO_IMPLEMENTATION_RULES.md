# SEO Implementation Rules
## Strict Development Guidelines

**Version:** 1.0  
**Last Updated:** 2026  
**Status:** MANDATORY - All rules must be followed

---

## 1. Metadata Rules (Title, Description)

### 1.1 Title Tag Rules

**REQUIRED FORMAT:**
```
[Primary Keyword] | [Value Proposition] | [Brand]
```

**CHARACTER LIMITS:**
- Minimum: 30 characters
- Maximum: 60 characters (hard limit)
- Optimal: 50-55 characters
- Must be unique per page (no duplicates across site)

**TITLE PATTERNS BY PAGE TYPE:**

**Homepage (`/`):**
```
Random Picker Wheel | Free Online Tool | SpinPickOnline
```
- Primary keyword: "Random Picker Wheel"
- Must include brand name
- Value prop: "Free Online Tool"

**Primary Keyword Pages (`/random-picker-wheel`, `/wheel-of-names`, etc.):**
```
[Exact Keyword] | Free & Fast | SpinPickOnline
```
- Use exact keyword as first term
- Include value proposition
- Include brand

**Use Case Pages (`/use-cases/[slug]`):**
```
[Use Case] Random Picker Wheel | Free Tool | SpinPickOnline
```
- Example: "Team Picker Random Picker Wheel | Free Tool | SpinPickOnline"
- Use case term + primary keyword
- Keep under 60 chars

**Feature Pages (`/features/[slug]`):**
```
[Feature] Random Picker Wheel | SpinPickOnline
```
- Example: "Customizable Random Picker Wheel | SpinPickOnline"
- Feature + primary keyword
- Brand required

**Comparison Pages (`/comparison/[slug]`):**
```
[Comparison Topic] | Random Picker Wheel vs Alternatives
```
- Example: "Random Picker vs Number Generator | Comparison"
- Comparison-focused
- No brand if over 60 chars

**Educational Pages (`/guides/[slug]`, `/how-it-works/[slug]`):**
```
[Topic] | How to Use Random Picker Wheel | Guide
```
- Example: "Fair Team Selection | Random Picker Wheel Guide"
- Educational focus
- Include "Guide" or "How to" if space allows

**App Page (`/wheel`):**
```
Create Random Picker Wheel | Free Online Tool | SpinPickOnline
```
- Action-oriented
- Include primary keyword
- Include value prop

**Shared Wheel (`/wheel/[id]`):**
```
Random Picker Wheel: [Wheel Name or "Shared Wheel"] | SpinPickOnline
```
- Dynamic based on wheel data
- Fallback: "Random Picker Wheel | SpinPickOnline" if no name
- Max 60 chars total

**STRICT RULES:**
- ❌ NEVER use generic titles like "Home" or "Page"
- ❌ NEVER duplicate titles across pages
- ❌ NEVER exceed 60 characters
- ❌ NEVER use all caps
- ❌ NEVER use special characters except: `|`, `-`, `:`
- ✅ ALWAYS include primary keyword in first 60 chars
- ✅ ALWAYS make titles unique
- ✅ ALWAYS test character count before deployment

**IMPLEMENTATION:**
```typescript
// Example for Next.js metadata
export const metadata: Metadata = {
  title: "Random Picker Wheel | Free Online Tool | SpinPickOnline",
  // Must be exactly 30-60 characters
};
```

---

### 1.2 Meta Description Rules

**CHARACTER LIMITS:**
- Minimum: 120 characters
- Maximum: 160 characters (hard limit)
- Optimal: 150-155 characters
- Must be unique per page

**REQUIRED ELEMENTS:**
1. Primary keyword (exact match or close variant)
2. Value proposition (free, fast, no signup, etc.)
3. Call to action (implicit or explicit)
4. Unique selling point

**DESCRIPTION PATTERNS BY PAGE TYPE:**

**Homepage (`/`):**
```
Create a free random picker wheel instantly. No signup required. Fair, fast, and mobile-friendly. Perfect for teams, classrooms, giveaways, and daily decisions.
```
- Includes primary keyword
- Lists key benefits
- Mentions use cases
- 155 characters

**Primary Keyword Pages:**
```
[Keyword] - Free online tool to randomly pick from a list. Customizable, shareable, and 100% fair. Create your wheel in seconds, no account needed.
```
- Keyword-focused
- Benefits listed
- CTA implied
- 155-160 chars

**Use Case Pages:**
```
Use our free random picker wheel for [use case]. Fair selection, instant results, mobile-friendly. Perfect for [context]. No signup required.
```
- Use case specific
- Context relevant
- Benefits included
- 150-160 chars

**Feature Pages:**
```
[Feature] random picker wheel with [specific capability]. Free, fast, and easy to use. Create custom wheels in seconds. No download required.
```
- Feature-focused
- Capability highlighted
- Benefits included
- 150-160 chars

**Comparison Pages:**
```
Compare random picker wheel vs [alternative]. See why our visual wheel tool is better for [use case]. Free, fair, and instant results.
```
- Comparison-focused
- Differentiation
- Benefits included
- 150-160 chars

**Educational Pages:**
```
Learn how to [topic] using a random picker wheel. Step-by-step guide with best practices for fair random selection. Free tool included.
```
- Educational focus
- Guide mention
- Tool mention
- 150-160 chars

**App Page (`/wheel`):**
```
Create your free random picker wheel now. Add entries, customize colors, and spin instantly. Share results or keep private. No signup required.
```
- Action-oriented
- Features mentioned
- CTA explicit
- 150-160 chars

**Shared Wheel (`/wheel/[id]`):**
```
View shared random picker wheel results. [Brief description if available]. Create your own free wheel - no signup required.
```
- Dynamic content
- Fallback if no description
- CTA to create
- 150-160 chars

**STRICT RULES:**
- ❌ NEVER duplicate descriptions across pages
- ❌ NEVER exceed 160 characters
- ❌ NEVER use generic descriptions
- ❌ NEVER use all caps
- ❌ NEVER use excessive punctuation (max 2 exclamation marks)
- ✅ ALWAYS include primary keyword naturally
- ✅ ALWAYS include value proposition
- ✅ ALWAYS make descriptions compelling
- ✅ ALWAYS test character count

**IMPLEMENTATION:**
```typescript
export const metadata: Metadata = {
  description: "Create a free random picker wheel instantly. No signup required. Fair, fast, and mobile-friendly. Perfect for teams, classrooms, giveaways, and daily decisions.",
  // Must be exactly 120-160 characters
};
```

---

### 1.3 Additional Metadata Rules

**REQUIRED METADATA FIELDS (All Pages):**
```typescript
{
  title: string,           // 30-60 chars, unique
  description: string,     // 120-160 chars, unique
  robots: string,         // "index, follow" or "noindex, follow"
  canonical: string,      // Absolute URL, self-referencing
  openGraph: {
    title: string,        // Can be same as title or shorter
    description: string,  // Can be same as description
    type: "website",
    url: string,          // Absolute URL
    siteName: string,     // "SpinPickOnline" or brand name
    images: [{
      url: string,        // Absolute URL to image
      width: number,      // 1200
      height: number,    // 630
      alt: string        // Descriptive alt text
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: string,        // Same as OG title
    description: string,  // Same as OG description
    images: [string]     // Absolute URL
  }
}
```

**CANONICAL URL RULES:**
- Must be absolute URL: `https://domain.com/path`
- Must be self-referencing (page links to itself)
- Must use HTTPS
- Must not include trailing slash (unless page URL has one)
- Must not include query parameters (except required ones)
- Must not include UTM parameters
- Must not include hash fragments

**ROBOTS META RULES:**
- Default: `"index, follow"` for all public pages
- Use `"noindex, follow"` for: privacy policy, terms (optional), private wheels
- Use `"noindex, nofollow"` for: admin pages, test pages
- Never use `"noindex"` on: homepage, primary keyword pages, use case pages, feature pages

**IMPLEMENTATION:**
```typescript
export const metadata: Metadata = {
  title: "...",
  description: "...",
  robots: {
    index: true,
    follow: true,
    // OR
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://domain.com/exact-page-url",
  },
  openGraph: {
    title: "...",
    description: "...",
    type: "website",
    url: "https://domain.com/exact-page-url",
    siteName: "SpinPickOnline",
    images: [{
      url: "https://domain.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Random Picker Wheel - SpinPickOnline",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "...",
    description: "...",
    images: ["https://domain.com/twitter-image.jpg"],
  },
};
```

---

## 2. Heading Hierarchy Rules (H1–H3)

### 2.1 H1 Tag Rules

**REQUIREMENTS:**
- Exactly ONE H1 per page (never zero, never multiple)
- Must contain primary keyword for the page
- Should match or closely align with page title
- Maximum length: 60 characters
- Must be visible above the fold
- Must be the first heading on the page (before any H2)

**H1 PATTERNS BY PAGE TYPE:**

**Homepage (`/`):**
```html
<h1>Random Picker Wheel - Free Online Tool</h1>
```
- Primary keyword first
- Value prop included
- 40 chars

**Primary Keyword Pages:**
```html
<h1>Random Picker Wheel</h1>
<!-- OR -->
<h1>Wheel of Names - Free Random Name Picker</h1>
```
- Exact keyword match
- Can include value prop if space allows
- 20-50 chars

**Use Case Pages:**
```html
<h1>Random Picker Wheel for Teams</h1>
<!-- OR -->
<h1>Team Picker Wheel - Fair Random Selection</h1>
```
- Use case + primary keyword
- Value prop optional
- 30-50 chars

**Feature Pages:**
```html
<h1>Customizable Random Picker Wheel</h1>
<!-- OR -->
<h1>Mobile-Friendly Random Picker Tool</h1>
```
- Feature + primary keyword
- 30-50 chars

**Comparison Pages:**
```html
<h1>Random Picker Wheel vs Random Number Generator</h1>
<!-- OR -->
<h1>Best Random Selection Tools Compared</h1>
```
- Comparison focus
- Can be longer (up to 60 chars)
- 40-60 chars

**Educational Pages:**
```html
<h1>How to Use a Random Picker Wheel</h1>
<!-- OR -->
<h1>Fair Team Selection with Random Picker</h1>
```
- Educational focus
- Action-oriented
- 30-50 chars

**App Page (`/wheel`):**
```html
<h1>Create Your Random Picker Wheel</h1>
<!-- OR -->
<h1>Random Picker Wheel Generator</h1>
```
- Action-oriented
- Primary keyword included
- 30-40 chars

**Shared Wheel (`/wheel/[id]`):**
```html
<h1>Random Picker Wheel Results</h1>
<!-- OR if wheel has name -->
<h1>[Wheel Name] - Random Picker Results</h1>
```
- Results-focused
- Dynamic if wheel has name
- 25-50 chars

**STRICT RULES:**
- ❌ NEVER have zero H1 tags
- ❌ NEVER have multiple H1 tags
- ❌ NEVER use H1 for styling only
- ❌ NEVER hide H1 with CSS (display: none, visibility: hidden)
- ❌ NEVER use H1 in footer or sidebar (only in main content)
- ✅ ALWAYS include primary keyword in H1
- ✅ ALWAYS make H1 the first heading
- ✅ ALWAYS make H1 visible and above the fold
- ✅ ALWAYS keep H1 under 60 characters

---

### 2.2 H2 Tag Rules

**REQUIREMENTS:**
- Use H2 for main content sections
- Must come after H1
- Should contain secondary keywords or related terms
- Can have multiple H2s per page (recommended: 3-6)
- Should create logical content structure
- Maximum length: 70 characters (recommended: 50)

**H2 PATTERNS:**

**Homepage Structure:**
```html
<h1>Random Picker Wheel - Free Online Tool</h1>
<h2>How It Works</h2>
<h2>Perfect For</h2>
<h2>Why Choose Our Random Picker Wheel</h2>
<h2>Get Started Now</h2>
```

**Primary Keyword Page Structure:**
```html
<h1>Random Picker Wheel</h1>
<h2>What is a Random Picker Wheel?</h2>
<h2>How to Use a Random Picker Wheel</h2>
<h2>Random Picker Wheel Features</h2>
<h2>Random Picker Wheel Use Cases</h2>
<h2>Create Your Random Picker Wheel</h2>
```

**Use Case Page Structure:**
```html
<h1>Random Picker Wheel for Teams</h1>
<h2>Why Use a Random Picker for Team Selection?</h2>
<h2>How to Create a Team Picker Wheel</h2>
<h2>Best Practices for Fair Team Selection</h2>
<h2>Related Use Cases</h2>
```

**Feature Page Structure:**
```html
<h1>Customizable Random Picker Wheel</h1>
<h2>Customization Options</h2>
<h2>How to Customize Your Wheel</h2>
<h2>Customization Use Cases</h2>
<h2>Get Started with Custom Wheels</h2>
```

**STRICT RULES:**
- ❌ NEVER skip from H1 to H3 (must have H2 in between)
- ❌ NEVER use H2 for styling only
- ❌ NEVER have H2 before H1
- ✅ ALWAYS use H2 for main sections
- ✅ ALWAYS include related keywords in H2s
- ✅ ALWAYS maintain logical hierarchy
- ✅ ALWAYS keep H2s descriptive and keyword-rich

---

### 2.3 H3 Tag Rules

**REQUIREMENTS:**
- Use H3 for subsections under H2
- Must come after H2 (never directly after H1)
- Should support H2 content with more specific topics
- Can have multiple H3s per H2 section
- Maximum length: 70 characters

**H3 PATTERNS:**

**Example Structure:**
```html
<h1>Random Picker Wheel</h1>
<h2>Random Picker Wheel Features</h2>
<h3>Customizable Colors and Labels</h3>
<h3>Shareable Wheel Links</h3>
<h3>Mobile-Friendly Design</h3>
<h3>Fair Randomization Algorithm</h3>
<h2>Random Picker Wheel Use Cases</h2>
<h3>Team Selection</h3>
<h3>Lunch Decisions</h3>
<h3>Classroom Activities</h3>
```

**STRICT RULES:**
- ❌ NEVER use H3 before H2
- ❌ NEVER skip from H2 to H4
- ❌ NEVER use H3 for styling only
- ✅ ALWAYS use H3 for subsections
- ✅ ALWAYS maintain hierarchy: H1 → H2 → H3
- ✅ ALWAYS keep H3s specific and descriptive

---

### 2.4 Heading Hierarchy Summary

**VALID STRUCTURE:**
```
H1 (one per page)
  └─ H2 (main sections)
      └─ H3 (subsections)
          └─ H4 (if needed, rare)
```

**INVALID STRUCTURES:**
```
❌ H1 → H3 (skipping H2)
❌ H2 → H1 (wrong order)
❌ Multiple H1s
❌ Zero H1s
❌ H4 without H3
```

**KEYWORD PLACEMENT:**
- H1: Primary keyword (required)
- H2: Secondary keywords, related terms (recommended)
- H3: Long-tail keywords, specific topics (optional but beneficial)

**IMPLEMENTATION CHECKLIST:**
- [ ] Exactly one H1 per page
- [ ] H1 contains primary keyword
- [ ] H1 is first heading on page
- [ ] H1 is visible above the fold
- [ ] H2s come after H1
- [ ] H3s come after H2
- [ ] No skipped heading levels
- [ ] Headings contain relevant keywords
- [ ] Headings are descriptive, not generic

---

## 3. Programmatic SEO Rules

### 3.1 URL Structure Rules

**REQUIRED PATTERNS:**

**Static Pages:**
```
/ → Homepage
/random-picker-wheel → Primary keyword page
/wheel-of-names → Secondary keyword page
/use-cases/[slug] → Use case pages
/features/[slug] → Feature pages
/comparison/[slug] → Comparison pages
/guides/[slug] → Guide pages
/how-it-works/[slug] → Educational pages
/best-practices/[slug] → Best practice pages
```

**Dynamic Pages:**
```
/wheel → Main app
/wheel/[id] → Shared wheel instances
```

**SLUG GENERATION RULES:**
- Use lowercase only
- Use hyphens for word separation (never underscores or spaces)
- Remove special characters (except hyphens)
- Keep slugs concise (3-5 words max)
- Use exact keyword match when possible
- Remove stop words only if slug becomes too long

**SLUG EXAMPLES:**
```
✅ /use-cases/team-picker
✅ /use-cases/lunch-decisions
✅ /use-cases/classroom-activities
❌ /use-cases/team_picker (underscore)
❌ /use-cases/TeamPicker (camelCase)
❌ /use-cases/team-picker-wheel-for-selecting-members (too long)
```

**URL LENGTH RULES:**
- Maximum: 75 characters (including domain)
- Optimal: 50-60 characters
- Keep as short as possible while being descriptive

---

### 3.2 Programmatic Page Generation

**USE CASE PAGES (`/use-cases/[slug]`):**

**Required Data Structure:**
```typescript
interface UseCasePage {
  slug: string;                    // URL slug
  title: string;                   // Page title (30-60 chars)
  description: string;             // Meta description (120-160 chars)
  h1: string;                      // H1 heading (30-60 chars)
  primaryKeyword: string;          // Primary keyword for this page
  secondaryKeywords: string[];    // Related keywords
  useCase: string;                 // Use case name
  context: string;                 // Context description
  benefits: string[];              // Benefits list
  steps: string[];                 // How-to steps
  relatedUseCases: string[];      // Related use case slugs
  relatedFeatures: string[];       // Related feature slugs
}
```

**Generation Rules:**
- Generate one page per use case
- Each page must have unique content (no templates)
- Minimum 300 words of unique content per page
- Include primary keyword in first 100 words
- Include use case-specific examples
- Link to related use cases and features

**Example Use Cases to Generate:**
```typescript
const useCases = [
  {
    slug: "team-picker",
    primaryKeyword: "team picker wheel",
    useCase: "Team Selection",
    // ... other fields
  },
  {
    slug: "lunch-decisions",
    primaryKeyword: "lunch decision wheel",
    useCase: "Lunch Decisions",
    // ... other fields
  },
  // ... more use cases
];
```

**FEATURE PAGES (`/features/[slug]`):**

**Required Data Structure:**
```typescript
interface FeaturePage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  featureName: string;
  featureDescription: string;
  benefits: string[];
  howItWorks: string[];
  useCases: string[];              // Related use case slugs
  comparisonPoints: string[];     // Why this feature matters
}
```

**Generation Rules:**
- Generate one page per feature
- Minimum 300 words of unique content
- Include feature-specific examples
- Link to relevant use cases
- Include comparison content (why this feature is better)

**COMPARISON PAGES (`/comparison/[slug]`):**

**Required Data Structure:**
```typescript
interface ComparisonPage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  comparisonTopic: string;
  alternatives: Array<{
    name: string;
    pros: string[];
    cons: string[];
  }>;
  ourAdvantages: string[];
  whenToUse: string[];
  conclusion: string;
}
```

**Generation Rules:**
- Generate comparison pages for high-value keywords
- Minimum 500 words of unique content
- Be objective but highlight advantages
- Include specific examples
- Link to relevant features and use cases

---

### 3.3 Content Uniqueness Rules

**REQUIRED UNIQUENESS:**
- Each programmatic page must have at least 60% unique content
- Title must be 100% unique
- Description must be 100% unique
- H1 must be 100% unique
- First 200 words must be 80% unique
- Minimum word count: 300 words per page

**CONTENT VARIATION STRATEGY:**
- Use case pages: Focus on specific scenarios, examples, and benefits
- Feature pages: Focus on technical details, capabilities, and advantages
- Comparison pages: Focus on differences, use cases, and recommendations

**TEMPLATE AVOIDANCE:**
- ❌ NEVER use identical templates with only variable substitution
- ❌ NEVER duplicate large blocks of text across pages
- ✅ ALWAYS write unique introductions
- ✅ ALWAYS include page-specific examples
- ✅ ALWAYS customize benefits and use cases per page

---

### 3.4 Internal Linking in Programmatic Pages

**REQUIRED LINKS PER PAGE:**
- Link to homepage (in navigation)
- Link to main app (`/wheel`)
- Link to 2-3 related use case pages
- Link to 1-2 relevant feature pages
- Link to primary keyword page (`/random-picker-wheel`)

**LINK ANCHOR TEXT RULES:**
- Use natural, varied anchor text
- Include keywords but don't over-optimize
- Vary anchor text for same destination (don't always use same text)
- Use descriptive text, not "click here" or "read more"

**Example:**
```html
<!-- Good -->
<p>For classroom use, see our <a href="/use-cases/classroom-activities">classroom random picker guide</a>.</p>
<p>Learn about <a href="/features/mobile-friendly">mobile-friendly features</a> for on-the-go selection.</p>

<!-- Bad -->
<p><a href="/use-cases/classroom-activities">Click here</a> for more info.</p>
<p><a href="/features/mobile-friendly">random picker wheel</a> (over-optimized)</p>
```

---

## 4. Dynamic Content Rules

### 4.1 Shared Wheel Pages (`/wheel/[id]`)

**METADATA RULES:**
- Title: Dynamic based on wheel name or fallback
- Description: Dynamic based on wheel content or fallback
- Canonical: Always self-referencing
- Robots: Conditional based on wheel privacy/sharing status

**TITLE GENERATION:**
```typescript
// If wheel has name and entries
title: `${wheelName} - Random Picker Wheel | SpinPickOnline`

// If wheel has entries but no name
title: `Random Picker Wheel Results | SpinPickOnline`

// Fallback
title: `Random Picker Wheel | SpinPickOnline`

// Maximum: 60 characters (truncate wheel name if needed)
```

**DESCRIPTION GENERATION:**
```typescript
// If wheel has description
description: `${wheelDescription.substring(0, 100)}... Create your own free random picker wheel.`

// If wheel has entries
description: `Random picker wheel with ${entryCount} entries. ${previewEntries}. Create your own free wheel.`

// Fallback
description: `View random picker wheel results. Create your own free wheel - no signup required.`

// Maximum: 160 characters
```

**ROBOTS/INDEXING RULES:**
```typescript
// Index if:
- wheel.isPublic === true
- wheel.shareCount > 0
- wheel.hasBeenShared === true
- wheel.entryCount >= 2
- wheel.hasMeaningfulContent === true

// Noindex if:
- wheel.isPublic === false
- wheel.isPrivate === true
- wheel.entryCount < 2
- wheel.isTestWheel === true
- wheel.createdAt < 24 hours ago AND shareCount === 0
```

**CONTENT RULES:**
- H1: Dynamic based on wheel name or "Random Picker Wheel Results"
- Show wheel results if available
- Include "Create Your Own" CTA
- Link to `/wheel` and relevant use cases
- Include schema markup for results (if applicable)

**CANONICAL RULES:**
- Always: `https://domain.com/wheel/[id]`
- Never include query parameters
- Never include hash fragments
- Self-referencing only

---

### 4.2 Query Parameter Handling

**REQUIRED CANONICALIZATION:**
- All query parameters must be stripped from canonical URLs
- UTM parameters: Always removed
- Tracking parameters: Always removed
- Ref parameters: Always removed
- Color/theme parameters: Removed (use cookies/localStorage instead)

**REDIRECT RULES:**
```typescript
// Redirect to canonical version
/wheel?utm_source=google → /wheel
/wheel?color=blue&entries=5 → /wheel
/random-picker-wheel?ref=share → /random-picker-wheel

// Exception: Required functional parameters (if any)
// These should be in URL path, not query string
```

**IMPLEMENTATION:**
```typescript
// In Next.js middleware or page
const canonicalUrl = new URL(request.url);
canonicalUrl.search = ''; // Remove all query params
// Use canonicalUrl.pathname for canonical tag
```

---

### 4.3 Trailing Slash Rules

**REQUIRED:**
- Standardize on NO trailing slash
- All URLs: `/path` not `/path/`
- Redirect `/path/` → `/path`
- Apply to all pages (static and dynamic)

**IMPLEMENTATION:**
```typescript
// Next.js config
const nextConfig = {
  trailingSlash: false, // Default, but be explicit
};

// Middleware redirect
if (url.endsWith('/') && url !== '/') {
  return redirect(url.slice(0, -1));
}
```

---

### 4.4 WWW vs Non-WWW

**REQUIRED:**
- Choose one canonical domain (recommend: non-WWW)
- Redirect all www to non-WWW (or vice versa)
- Set canonical URLs to chosen domain
- Apply in server config and canonical tags

**IMPLEMENTATION:**
```typescript
// Canonical always uses chosen domain
canonical: "https://domain.com/path" // Not https://www.domain.com/path

// Server redirect (in hosting config or middleware)
www.domain.com → domain.com
```

---

## 5. Schema / FAQ Requirements

### 5.1 Required Schema Markup

**ORGANIZATION SCHEMA (Homepage):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SpinPickOnline",
  "url": "https://domain.com",
  "logo": "https://domain.com/logo.png",
  "description": "Free random picker wheel tool",
  "sameAs": [
    "https://twitter.com/SpinPickOnline",
    "https://facebook.com/SpinPickOnline"
  ]
}
```

**WEBSITE SCHEMA (Homepage):**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SpinPickOnline",
  "url": "https://domain.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://domain.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

**WEBAPPLICATION SCHEMA (Homepage & /wheel):**
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Random Picker Wheel",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250"
  }
}
```

**HOWTO SCHEMA (Guide Pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Use a Random Picker Wheel",
  "description": "Step-by-step guide to creating and using a random picker wheel",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Add Entries",
      "text": "Enter your list of items or names",
      "position": 1
    },
    {
      "@type": "HowToStep",
      "name": "Customize",
      "text": "Choose colors and labels",
      "position": 2
    },
    {
      "@type": "HowToStep",
      "name": "Spin",
      "text": "Click to spin and get random result",
      "position": 3
    }
  ]
}
```

**FAQ SCHEMA (FAQ Pages & Pages with FAQ Sections):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the random picker wheel free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our random picker wheel is completely free to use with no signup required."
      }
    },
    {
      "@type": "Question",
      "name": "How does the random picker work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our random picker wheel uses a cryptographically secure random number generator to ensure fair and unbiased selection."
      }
    }
  ]
}
```

**ARTICLE SCHEMA (Educational/Guide Pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Use a Random Picker Wheel",
  "author": {
    "@type": "Organization",
    "name": "SpinPickOnline"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-15"
}
```

**BREADCRUMBLIST SCHEMA (All Pages with Breadcrumbs):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://domain.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Use Cases",
      "item": "https://domain.com/use-cases"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Team Picker",
      "item": "https://domain.com/use-cases/team-picker"
    }
  ]
}
```

---

### 5.2 FAQ Requirements

**REQUIRED FAQ PAGES:**
- `/faq` - Main FAQ page (required)
- FAQ sections on homepage (recommended)
- FAQ sections on primary keyword pages (recommended)

**MINIMUM FAQ COUNT:**
- Main FAQ page: 10-15 questions
- Homepage FAQ section: 5-7 questions
- Primary keyword pages: 3-5 questions

**FAQ CONTENT RULES:**
- Questions must be natural language (how users ask)
- Answers must be comprehensive (50-150 words)
- Include primary keywords naturally in answers
- Update FAQs based on common user questions
- Include schema markup for all FAQs

**REQUIRED FAQ TOPICS:**
1. Is it free? (required)
2. How does it work? (required)
3. Do I need to sign up? (required)
4. Is it truly random? (required)
5. Can I share results? (required)
6. Is it mobile-friendly? (required)
7. How many entries can I add? (recommended)
8. Can I customize the wheel? (recommended)
9. Is my data private? (recommended)
10. How is this different from [competitor]? (recommended)

**FAQ IMPLEMENTATION:**
```typescript
// FAQ data structure
interface FAQ {
  question: string;    // Natural language question
  answer: string;       // 50-150 word answer
  keywords: string[];  // Related keywords
}

// Schema implementation
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
```

---

### 5.3 Schema Implementation Rules

**REQUIRED SCHEMA ON PAGES:**
- Homepage: Organization, WebSite, WebApplication
- App page (`/wheel`): WebApplication
- Guide pages: HowTo, Article
- FAQ pages: FAQPage
- All pages with breadcrumbs: BreadcrumbList

**SCHEMA VALIDATION:**
- All schema must validate with Google's Rich Results Test
- Test before deployment
- Fix validation errors immediately
- Update schema when content changes

**SCHEMA PLACEMENT:**
- Use JSON-LD format (recommended)
- Place in `<head>` or before closing `</body>`
- One `<script type="application/ld+json">` tag per schema type
- Can have multiple schema types per page

**IMPLEMENTATION:**
```typescript
// Next.js implementation
export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    // ... schema data
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Page content */}
    </>
  );
}
```

---

## 6. Performance Rules Affecting SEO

### 6.1 Core Web Vitals Requirements

**LCP (Largest Contentful Paint):**
- Target: < 2.5 seconds
- Required: < 4.0 seconds
- Optimize: Hero images, above-the-fold content, font loading

**FID (First Input Delay) / INP (Interaction to Next Paint):**
- Target: < 100 milliseconds
- Required: < 300 milliseconds
- Optimize: JavaScript execution, event handlers, third-party scripts

**CLS (Cumulative Layout Shift):**
- Target: < 0.1
- Required: < 0.25
- Optimize: Image dimensions, font loading, ad placement, dynamic content

**IMPLEMENTATION RULES:**
- Set explicit width/height on all images
- Use Next.js Image component with priority for above-fold images
- Preload critical fonts
- Minimize layout shifts from dynamic content
- Defer non-critical JavaScript
- Use loading="lazy" for below-fold images

---

### 6.2 Page Speed Requirements

**REQUIRED METRICS:**
- Time to First Byte (TTFB): < 600ms
- First Contentful Paint (FCP): < 1.8s
- Speed Index: < 3.4s
- Total Blocking Time (TBT): < 200ms

**OPTIMIZATION RULES:**
- Enable Next.js automatic optimizations
- Use static generation where possible
- Implement ISR (Incremental Static Regeneration) for dynamic content
- Minimize JavaScript bundle size
- Code split appropriately
- Optimize images (WebP, proper sizing)
- Enable compression (gzip/brotli)
- Use CDN for static assets
- Minimize third-party scripts

---

### 6.3 Mobile Performance

**REQUIRED:**
- Mobile-friendly design (responsive)
- Touch-friendly interface (44x44px minimum touch targets)
- Fast mobile load times (< 3s on 3G)
- No horizontal scrolling
- Readable text without zooming

**MOBILE-SPECIFIC OPTIMIZATIONS:**
- Serve appropriately sized images for mobile
- Minimize mobile JavaScript
- Use mobile-first CSS
- Test on real devices
- Use mobile viewport meta tag

---

### 6.4 Image Optimization Rules

**REQUIRED:**
- All images must have explicit width and height
- Use Next.js Image component
- Serve WebP format with fallbacks
- Lazy load below-fold images
- Optimize image file sizes
- Use appropriate image dimensions (don't serve 2000px images for 400px display)

**ALT TEXT RULES:**
- All images must have descriptive alt text
- Alt text should include relevant keywords when natural
- Decorative images: Use empty alt="" or descriptive text
- Functional images: Must have descriptive alt text
- Don't keyword stuff alt text

**IMPLEMENTATION:**
```typescript
<Image
  src="/hero-image.jpg"
  alt="Random picker wheel interface showing colorful spinning wheel"
  width={1200}
  height={630}
  priority // For above-fold images
  loading="lazy" // For below-fold images (default)
/>
```

---

### 6.5 JavaScript Optimization

**REQUIRED:**
- Minimize JavaScript bundle size
- Code split by route
- Defer non-critical JavaScript
- Remove unused code
- Minimize third-party scripts
- Use async/defer for external scripts

**CRITICAL RENDERING PATH:**
- Above-the-fold content must render without JavaScript
- Critical CSS inline or loaded first
- Non-critical CSS loaded asynchronously
- JavaScript for interactivity loaded after initial render

---

### 6.6 Caching Rules

**REQUIRED:**
- Implement proper caching headers
- Static pages: Long cache (1 year)
- Dynamic pages: Appropriate cache based on update frequency
- API responses: Cache where appropriate
- Images: Long cache with versioning

**CACHE HEADERS:**
```
Static assets: Cache-Control: public, max-age=31536000, immutable
HTML pages: Cache-Control: public, max-age=3600, must-revalidate
API responses: Cache-Control: public, max-age=300
```

---

## 7. Rules Developers Must NEVER Break

### 7.1 Critical SEO Rules (NEVER BREAK)

**❌ NEVER:**
1. **Duplicate content across pages**
   - Each page must have unique title, description, and H1
   - No identical content blocks across multiple pages
   - No thin content (minimum 300 words for content pages)

2. **Missing or duplicate H1 tags**
   - Exactly one H1 per page
   - H1 must contain primary keyword
   - H1 must be visible and above the fold

3. **Broken canonical URLs**
   - Every page must have a canonical tag
   - Canonical must be absolute URL (https://)
   - Canonical must be self-referencing
   - No query parameters in canonical URLs

4. **Missing meta descriptions**
   - Every page must have unique meta description
   - Descriptions must be 120-160 characters
   - Descriptions must be compelling and keyword-rich

5. **Missing or incorrect robots meta**
   - Public pages: Must have "index, follow"
   - Private pages: Must have "noindex, follow" or "noindex, nofollow"
   - Never accidentally noindex public content pages

6. **Broken internal linking**
   - All internal links must use relative paths or absolute URLs
   - No broken links (404s)
   - No orphaned pages (pages with no internal links)
   - Maintain logical site structure

7. **Missing alt text on images**
   - Every image must have alt attribute
   - Alt text must be descriptive
   - Decorative images: Use empty alt="" or descriptive text

8. **Slow page load times**
   - Never deploy pages that fail Core Web Vitals
   - Never block rendering with JavaScript
   - Never serve unoptimized images

9. **Missing schema markup where required**
   - Homepage: Must have Organization, WebSite, WebApplication
   - FAQ pages: Must have FAQPage schema
   - Guide pages: Must have HowTo schema
   - All pages with breadcrumbs: Must have BreadcrumbList

10. **Incorrect URL structure**
    - Never use underscores in URLs (use hyphens)
    - Never use uppercase in URLs (use lowercase)
    - Never have trailing slashes (standardize on no trailing slash)
    - Never have duplicate content at different URLs

---

### 7.2 Technical SEO Rules (NEVER BREAK)

**❌ NEVER:**
1. **Block robots.txt or sitemap.xml**
   - robots.txt must be accessible
   - sitemap.xml must be accessible and up-to-date
   - Never accidentally block important pages in robots.txt

2. **Use JavaScript for critical content**
   - Primary content must be in HTML
   - Don't require JavaScript for content visibility
   - Don't use JavaScript for navigation (use proper links)

3. **Have duplicate URLs**
   - www and non-www must redirect to one canonical
   - HTTP must redirect to HTTPS
   - Trailing slash must be standardized
   - Query parameters must be handled (canonicalized)

4. **Missing or incorrect hreflang**
   - If multi-language: Must have hreflang tags
   - If single language: Must have lang attribute in HTML tag

5. **Broken redirects**
   - All redirects must be 301 (permanent) unless temporary
   - No redirect chains (A → B → C, should be A → C)
   - No redirect loops

6. **Missing XML sitemap**
   - Must have sitemap.xml
   - Must include all indexable pages
   - Must be updated when new pages are added
   - Must be submitted to Google Search Console

7. **Incorrect HTTP status codes**
   - 200 for successful pages
   - 301 for permanent redirects
   - 404 for not found (not 200 with error message)
   - 500 for server errors (not 200)

8. **Missing or broken structured data**
   - Schema must be valid JSON-LD
   - Schema must pass Google's Rich Results Test
   - Schema must match page content

---

### 7.3 Content Quality Rules (NEVER BREAK)

**❌ NEVER:**
1. **Keyword stuffing**
   - Use keywords naturally
   - Don't repeat keywords excessively
   - Don't sacrifice readability for keywords

2. **Thin or duplicate content**
   - Minimum 300 words for content pages
   - Each page must have unique, valuable content
   - No auto-generated or template-only content

3. **Hidden text or content**
   - Don't hide text with CSS (display: none on important content)
   - Don't use white text on white background
   - Don't use tiny font sizes to hide content

4. **Missing or generic headings**
   - Headings must be descriptive
   - Don't use generic headings like "Section 1"
   - Maintain proper hierarchy (H1 → H2 → H3)

5. **Broken or missing CTAs**
   - Every page should have clear call-to-action
   - CTAs should be relevant to page content
   - Don't have dead-end pages with no next steps

---

### 7.4 User Experience Rules (NEVER BREAK)

**❌ NEVER:**
1. **Require signup for basic functionality**
   - Core tool must work without signup
   - Don't gate basic features behind registration

2. **Show excessive ads or popups**
   - Don't block content with popups
   - Don't have intrusive ads
   - Maintain good user experience

3. **Have broken functionality**
   - Tool must work as described
   - No JavaScript errors
   - No broken forms or interactions

4. **Have poor mobile experience**
   - Must be fully functional on mobile
   - No horizontal scrolling
   - Touch-friendly interface

5. **Have accessibility issues**
   - Must be keyboard navigable
   - Must have proper ARIA labels
   - Must have sufficient color contrast
   - Must be screen reader friendly

---

### 7.5 Monitoring & Validation Rules

**REQUIRED CHECKS BEFORE DEPLOYMENT:**
- [ ] All pages have unique title tags (30-60 chars)
- [ ] All pages have unique meta descriptions (120-160 chars)
- [ ] All pages have exactly one H1 with primary keyword
- [ ] All pages have canonical URLs (absolute, self-referencing)
- [ ] All pages have correct robots meta tags
- [ ] All images have alt text
- [ ] All internal links work (no 404s)
- [ ] Schema markup validates (Google Rich Results Test)
- [ ] Page speed passes Core Web Vitals
- [ ] Mobile-friendly (Google Mobile-Friendly Test)
- [ ] No console errors
- [ ] Sitemap.xml is up-to-date
- [ ] robots.txt is correct

**REQUIRED MONITORING:**
- Google Search Console: Check weekly
- Core Web Vitals: Monitor continuously
- Page speed: Test after every deployment
- Broken links: Check monthly
- Schema validation: Test when adding new schema

---

## Implementation Checklist

**Before Every Deployment:**
1. ✅ Run SEO audit (title, description, H1, canonical, robots)
2. ✅ Validate schema markup
3. ✅ Test page speed (Core Web Vitals)
4. ✅ Check mobile responsiveness
5. ✅ Verify all internal links work
6. ✅ Check for duplicate content
7. ✅ Validate images have alt text
8. ✅ Test canonical URLs
9. ✅ Verify robots meta tags
10. ✅ Update sitemap.xml if new pages added

**Weekly:**
- Review Google Search Console for errors
- Check for new broken links
- Review page performance metrics
- Check for duplicate content issues

**Monthly:**
- Full SEO audit
- Review and update content
- Check competitor changes
- Review keyword rankings

---

**END OF DOCUMENT**

**Remember: These rules are MANDATORY. Breaking any rule in Section 7 can negatively impact SEO rankings. Always validate before deployment.**

