# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development:**
```bash
npm run dev         # Start development server with Turbopack
```

**Build & Production:**
```bash
npm run build       # Build for production
npm run start       # Start production server
```

**Code Quality:**
```bash
npm run lint        # Run ESLint with auto-fix
```

## Architecture Overview

This is a Next.js 15 application using App Router with HeroUI component library and Tailwind CSS for styling.

### Key Technologies
- **Next.js 15** with App Router and Turbopack
- **HeroUI v2** - Component library built on React Aria
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** with Tailwind Variants for component styling
- **Framer Motion** for animations
- **next-themes** for dark/light mode support

### Project Structure
- `/app` - App Router pages and layouts
  - Each route folder contains `page.tsx` and optionally `layout.tsx`
  - `providers.tsx` wraps the app with HeroUI and theme providers
  - `error.tsx` handles error boundaries
- `/components` - Reusable React components
- `/config` - Configuration files (site metadata, fonts)
- `/styles` - Global CSS (Tailwind directives)
- `/types` - TypeScript type definitions
- `/public` - Static assets

### Path Aliases
- `@/*` maps to project root (configured in tsconfig.json)

### Styling Approach
- Components use HeroUI's built-in theming system
- Custom styles use Tailwind utility classes
- Dark mode is the default theme
- Component variants handled via tailwind-variants library

### ESLint Rules
- Auto-fixes on `npm run lint`
- Enforces import order and sorting
- React prop sorting enabled
- Prettier integration for formatting
- Unused imports are automatically removed