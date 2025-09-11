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
--bg: #211e19;         /* Background color */
--panel: #2f2a23;      /* Panel/card backgrounds */
--brand: #527a55;      /* Brand green */
--accent: #d9b180;     /* Accent color */
--gold: #e8cb91;       /* Gold highlights */
--maxw: 1200px;        /* Max content width */
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