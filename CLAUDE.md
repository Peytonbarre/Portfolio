# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Peyton Barre, a Full Stack Developer. Built with Next.js 15.3.1, React 19, and TypeScript, it showcases a modern, responsive single-page application with smooth animations and dark mode support.

## Development Commands

```bash
# Start development server (opens at http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Run linting
npm run lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15.3.1 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript with strict mode
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theming**: next-themes for dark mode support
- **Styling**: Custom CSS with CSS variables for theming

### Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with ThemeProvider and Navbar
│   ├── page.tsx           # Main page composing all sections
│   └── globals.css        # Global styles and CSS custom properties
├── components/
│   ├── Hero.tsx           # Landing section with parallax image effect
│   ├── About.tsx          # About section with cards
│   ├── Projects.tsx       # Projects grid
│   ├── Skills.tsx         # Skills cloud with varying sizes
│   ├── Contact.tsx        # Contact section with social links
│   ├── Navbar.tsx         # Navigation with theme toggle and scroll tracking
│   ├── CursorSpotlight.tsx # Interactive cursor effect
│   └── theme-provider.tsx  # Wrapper for next-themes
```

### Key Architecture Patterns

1. **Single Page Application**: All content is on one page with smooth scroll navigation via section IDs (`#about`, `#projects`, etc.)

2. **Client-Side Components**: Most components use `"use client"` directive for interactivity:
   - Framer Motion animations
   - Theme switching
   - Scroll effects and parallax
   - Mobile menu toggling

3. **Theming System**:
   - Uses CSS custom properties (--background, --foreground, --primary, etc.)
   - Dark mode toggled via next-themes
   - Color schemes defined in globals.css under `:root` and `.dark`
   - Responsive backgrounds with radial gradients

4. **Responsive Design**:
   - Mobile-first approach with progressive enhancement
   - Key breakpoints: 640px, 768px, 1024px
   - Desktop: Hero has absolute-positioned image with parallax
   - Mobile: Hero image is relative, stacked above content
   - Mobile menu: Hamburger icon with slide-down nav

5. **Image Handling**:
   - Next.js Image component with priority for hero photo
   - Allowed domains configured in next.config.ts: `['peyton.im']`
   - Static assets in `public/` directory

6. **Path Aliases**: `@/*` maps to `./src/*` (configured in tsconfig.json)

## Styling Conventions

- **CSS Custom Properties**: All colors and design tokens defined as CSS variables
- **Glassmorphism**: Sections use `backdrop-filter: blur(10px)` with semi-transparent backgrounds
- **Gradient Usage**: Multiple gradients defined (--gradient, --gradient-2, --gradient-3)
- **Mobile-First**: Base styles for mobile, enhanced with `@media (min-width: ...)` queries
- **Scroll Effects**: Smooth scroll behavior, parallax on hero image (Hero.tsx:17-28)

## Next.js Configuration

- **Output**: Standalone mode for optimized deployments
- **Images**: Domain allowlist for external images
- **SWC Minification**: Enabled for production builds
- **Trailing Slashes**: Disabled

## Component-Specific Notes

### Hero Component (Hero.tsx)
- Implements custom parallax scroll effect using ref and scroll event listener
- Initial translateY offset: -10%
- Scroll speed: 0.6, max scroll: 300px
- Image positioned absolutely on desktop, relatively on mobile

### Navbar Component (Navbar.tsx)
- Tracks active section via scroll position + 100px offset
- Mobile menu state managed locally
- Theme toggle button in nav links
- Uses framer-motion for initial slide-in animation

### Theme Provider (theme-provider.tsx)
- Thin wrapper around next-themes
- System theme preference enabled by default
- Class-based theme switching

## Deployment Notes

- The site is configured for standalone output (next.config.ts)
- Production optimizations include SWC minification
- Metadata and viewport configuration in layout.tsx for SEO and mobile UX

## Design Philosophy

The portfolio emphasizes:
- Clean, modern aesthetics with glassmorphism
- Smooth animations and parallax effects
- Accessibility (aria labels, semantic HTML)
- Performance (Next.js Image optimization, code splitting)
- Responsive design that works across all devices
