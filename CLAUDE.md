# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Prospector Leather Co. is a static website for a New Zealand leather goods business. The site showcases handcrafted leather belts and gear with a rugged, outdoors-focused aesthetic inspired by New Zealand's South Island landscapes and gold rush heritage.

## Development Setup

This is a static HTML/CSS/JavaScript website with no build process or package management. Files are served directly from the repository.

### Local Development
- Open `index.html` directly in a browser, or
- Use any static file server (e.g., `python -m http.server` or VS Code Live Server extension)
- No installation or build steps required

## Project Structure

```
/
├── index.html          # Main homepage
├── trailblazer.html    # Product page: The Trailblazer belt (#001)
├── hunter.html         # Product page: The Hunter knife sheath (#002)
├── prospector.html     # Product page: The Prospector wide belt (#003)
├── css/
│   ├── style.css       # Main stylesheet with CSS custom properties
│   └── animations.css  # Animation-specific styles
├── js/
│   └── script.js       # Navigation, smooth scrolling, and year updates
├── images/             # Product photos and workshop images
├── fonts/              # Local font files
├── gemini.md          # Brand guidelines and design language
└── CNAME              # GitHub Pages custom domain
```

## Architecture & Design Patterns

### CSS Architecture
- **CSS Custom Properties**: Extensive use of CSS variables in `:root` for consistent theming
- **Color Palette**: Earth tones (greens, tans, golds) reflecting NZ landscapes and heritage leather
- **Typography**: "Cutive Mono" for body text, "Work Sans" for headings
- **Responsive Design**: Uses `clamp()` and viewport units for fluid scaling
- **Grid Layout**: 12-column CSS Grid for product layouts

### Key CSS Variables
```css
--ink: #f5f3ed;        /* Primary text color */
--ink-muted: #ddd2c4;  /* Muted text color */
--bg: #211e19;         /* Background color */
--panel: #2f2a23;      /* Panel/card backgrounds */
--border: #4d443a;     /* Border color */
--brand: #527a55;      /* Brand green */
--accent: #d9b180;     /* Accent color */
--gold: #e8cb91;       /* Gold highlights */
--rust: #b5764d;       /* Rust accent */
--sand: #eadfce;       /* Sand/heading color */
--maxw: 1100px;        /* Max content width */
--radius: 18px;        /* Standard border radius (Apple-style subtle rounding) */
--radius-sm: 14px;     /* Small border radius (mobile/compact elements) */
--radius-lg: 24px;     /* Large border radius (hero elements) */
--gap: clamp(14px,2.8vw,26px);   /* Responsive gap */
--gutter: 32px;        /* Outer padding */
```

### JavaScript Features
- Smooth scrolling navigation with offset compensation
- Active navigation state management on scroll
- Responsive mobile CTA visibility
- Dynamic copyright year updates
- Scroll restoration disabled (pages always load at top)

### Brand Language & Content
- **Tone**: Authentic, rugged, outdoors-focused
- **Target Audience**: Hunters, fishermen, outdoor enthusiasts
- **Geographic Identity**: Strong New Zealand/Dunedin connection
- **Product Naming**: Heritage-inspired names (Trailblazer, Hunter, Prospector)
- **Serial System**: Claim-style numbering (#001, #002, #003)

Refer to `gemini.md` for detailed brand guidelines, design language, and content strategy.

## File Editing Guidelines

### HTML Files
- Each product page follows the same structure as `index.html`
- Maintain consistent navigation and footer across all pages
- Product pages should include detailed specs, pricing, and imagery

### CSS Updates
- Modify CSS custom properties in `style.css` `:root` for global changes
- Follow existing naming conventions for new classes
- Maintain responsive design patterns using `clamp()` and viewport units

### Adding Products
1. Create new HTML file following existing product page pattern
2. Add product card to `index.html` products grid
3. Update navigation if needed
4. Add product images to `/images/product shots/`
5. Follow sequential numbering system (#004, #005, etc.)

### Image Management
- Product shots: `/images/product shots/`
- Workshop photos: `/images/workshop shots/`
- Use consistent aspect ratios (4:3 for product cards)
- Optimize images for web (WebP preferred when supported)

## Content Strategy

Products are positioned as premium, heritage-crafted goods built for New Zealand's rugged environment. Copy emphasizes durability, authenticity, and connection to the land. Avoid technical jargon in favor of straightforward, evocative language.

## Visual Design Style Guide

### Typography System
- **Headings (h1, h2)**: "Cowboy Outlaw Textured" font with 0.1em letter-spacing
  - Creates authentic Western/heritage aesthetic
  - Fallback to "Work Sans" for compatibility
  - Color: `var(--sand)` (#eadfce)
  - h1: `clamp(28px, 4.6vw, 56px)`
  - h2: `clamp(22px, 3.2vw, 36px)`
- **Body Text**: "Cutive Mono" monospace font
  - Base size: 17px
  - Line height: 1.65
  - Color: `var(--ink)` (#f5f3ed)
- **Logo**: SVG logo colored with gold filter to match brand palette

### Navigation Design
- **Floating Navbar** (Desktop):
  - Position: Fixed, 20px from top
  - Width: Content width (1100px max), centered
  - Background: Semi-transparent `rgba(47,42,35,0.5)` with backdrop blur
  - Border: 1px solid `rgba(77,68,58,0.6)`, border-radius: 18px (Apple-style subtle rounding)
  - Shadow: `0 4px 20px rgba(0,0,0,0.4)` for elevation
  - Logo centered with nav links split on either side (2 left, 2 right)
- **Mobile Navbar** (768px and below):
  - Max-width: 500px, centered
  - Border-radius: 14px (proportional to smaller size)
  - Vertical column layout with logo at top
  - Logo separated from nav links with subtle divider line
  - Navigation links arranged in two rows
- **Scroll Behavior**:
  - Hides when scrolling down past 300px threshold
  - Shows when scrolling up
  - Transform: `translateX(-50%) translateY(-150%)` when hidden
- **Nav Links**:
  - Desktop: Padding 6px 16px
  - Mobile: Padding 10px 18px (touch-friendly)
  - Hover: Background `#3a332b`
  - Active: No background, indicated by state

### Texture & Effects System
- **Grain Texture**: SVG fractal noise overlay used consistently across site
  ```css
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='[VARIES]'/%3E%3C/svg%3E");
  ```
  - Navbar: 0.08 opacity (very subtle)
  - Hero section: 0.15 opacity (noticeable)
  - Product/gallery images: 0.12 opacity (balanced)
  - Contact section: 0.08 opacity (subtle)
- **Glassmorphism**: Semi-transparent backgrounds with `backdrop-filter: blur(10px)`
- **Image Treatment**: All images include grain overlay via `::before` pseudo-element with `z-index: 2`

### Hero Section Design
- **Full viewport height**: `min-height: 100vh`
- **Background**:
  - Hero image with dark gradient overlay `rgba(40,36,32,0.85)` to `rgba(47,42,35,0.85)`
  - Increased contrast (1.15) and reduced saturation (0.9) for gritty feel
  - Grain texture overlay (0.15 opacity)
  - Vignette effect via radial gradient
- **Layout**:
  - Flexbox centered content
  - Top padding: `clamp(100px, 15vw, 180px)` to account for floating navbar
  - Bottom padding: `clamp(60px, 10vw, 120px)`
  - Logo at top with separator line below (gold gradient, 60-100px wide)
  - Content gap: `clamp(20px, 4vw, 32px)`

### Border Radius System
The site uses a consistent Apple-style border-radius system with subtle, refined rounding:
- **Standard elements** (`--radius: 18px`): Buttons, cards, forms, thumbnails, navbar (desktop)
- **Compact/mobile elements** (`--radius-sm: 14px`): Mobile navbar, small UI elements
- **Large elements** (`--radius-lg: 24px`): Hero sections, large containers (reserved for future use)

**Philosophy**: Subtle rounding that feels modern and refined without being toy-like. Similar to Apple's design language where corners are rounded just enough to soften the interface while maintaining professionalism.

### Card & Image Components
- **Product Cards**:
  - Grid: 12-column system, cards span 4 columns on desktop
  - Aspect ratio: 4:3 for product images
  - Border: 1px solid `var(--border)`
  - Border radius: `var(--radius)` (18px)
  - Background: `#38322a`
  - Hover: Image scales to 1.05
  - Price stamp: Positioned absolute, bottom-right, rotated -3deg
- **Gallery Images**:
  - Grid: 3 columns on desktop, 2 on tablet, 1 on mobile
  - Aspect ratio: 16:10
  - Border radius: `var(--radius)` (18px)
  - Hover: Card lifts 4px, image scales to 1.1
  - Grain texture overlay on all images

### Button Styles
- **Primary Button**:
  - Padding: 14px 24px
  - Border radius: `var(--radius)` (18px)
  - Border: 1px solid `var(--rust)`
  - Background: `rgba(47,42,35,.8)` with backdrop blur
  - Hover: Border changes to `var(--accent)`, subtle lift with `translateY(-1px)`
- **CTA Button**:
  - Background: `rgba(217,177,128,.15)`
  - Border: `var(--accent)`
  - Color: `var(--accent)`
  - Border radius: `var(--radius)` (18px)

### Color Usage Guidelines
- **Backgrounds**: Dark browns (#211e19, #2f2a23, #24201b)
- **Text**: Light cream/sand tones (#f5f3ed, #eadfce, #ddd2c4)
- **Accents**: Gold/bronze range (#e8cb91, #d9b180, #b5764d)
- **Borders**: Subtle brown (#4d443a)
- **Interactive Elements**: Use `var(--accent)` for hover states and CTAs

### Spacing System
- **Sections**: `clamp(40px, 8vw, 80px)` vertical padding
- **Content width**: Max 1100px, centered with `margin: 0 auto`
- **Grid gaps**: `clamp(14px, 2.8vw, 26px)` for responsive spacing
- **Outer gutters**: 32px (`var(--gutter)`)

### Responsive Breakpoints
- **Desktop**: Default styles
- **980px and below**: Reduced padding, smaller nav links
- **768px and below**: Single column layouts, stacked navigation
- **640px and below**: Gallery grid reduces to 2 columns
- **480px and below**: Gallery grid becomes single column

### Animation & Transitions
- **Smooth scrolling**: `scroll-behavior: smooth`
- **Navbar**: 0.3s ease transform
- **Image zoom**: 0.3s ease on hover
- **Buttons**: 0.2s ease for all states
- **Cards**: 0.2s ease transform on hover