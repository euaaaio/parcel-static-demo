# Simple Parcel Static Site Demo

A minimal static site for testing Parcel build capabilities with multiple HTML pages.

## Project Structure

```
demo-parcel-static/
├── index.html              # Home page
├── styles.css              # Simple styles with link colors
├── scripts.js              # Simple JS injection
├── package.json            # Parcel configuration
└── pages/                  # Directory with pages
    ├── about/index.html    # About page
    ├── contact/index.html  # Contact page
    ├── services/index.html # Services page
    ├── blog/index.html     # Blog page
    ├── products/index.html # Products page
    ├── team/index.html     # Team page
    ├── gallery/index.html  # Gallery page
    ├── news/index.html     # News page
    └── portfolio/index.html # Portfolio page
```

## Features

- **10 HTML pages** in different directories
- **Simple structure** with only h1, ul, li, a elements
- **Unique link IDs** for styling
- **Colored links** via CSS
- **JavaScript injection** of "injected by js" text
- **Full navigation** between all pages

## Installation and Usage

1. Install dependencies:
```bash
npm install
```

2. Development mode:
```bash
npm run dev
```

3. Production build:
```bash
npm run build
```

## What This Tests

- Can Parcel build multiple HTML pages correctly
- Are relative paths processed properly  
- Are CSS and JS files hashed
- Does navigation work between pages
- Are resources optimized during build

## Expected Result

After running `npm run build`, the `dist/` folder should contain:
- All HTML pages with correct paths
- Hashed CSS and JS files
- Working navigation
- Optimized code

The site should work correctly when opening any page directly and when navigating between pages. 