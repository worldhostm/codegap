# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build the application for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks
- `npm run storybook` - Run Storybook development server on port 6006
- `npm run build-storybook` - Build Storybook for production

## Project Architecture

This is a Next.js 14+ application using the App Router architecture with TypeScript and Tailwind CSS. Key architectural decisions:

### Directory Structure
- `app/` - Next.js App Router pages and components using file-based routing
- `app/_components/` - Shared components used across multiple pages
- `app/[page]/_components/` - Page-specific components (e.g., `basket/_components/`, `editor/_components/`)
- `app/system/` - Design system and UI components library
- `app/common/` - Common layout components like Header
- `stories/` - Storybook stories for component documentation
- `.storybook/` - Storybook configuration

### Key Features
- **Rich Text Editing**: Extensive TipTap editor integration with multiple extensions (emoji, file handling, tables, text alignment, etc.)
- **Design System**: Comprehensive component library in `app/system/_components/` with reusable UI components
- **Animation**: GSAP integration for animations and smooth transitions
- **Charts**: Chart.js integration for data visualization
- **API Proxy**: Next.js rewrites proxy `/api/*` requests to `http://localhost:8080/api/*`

### Component Architecture
- Components follow a pattern of page-specific `_components` directories
- Shared components in `app/_components/`
- System/UI components centralized in `app/system/_components/`
- CSS modules used alongside Tailwind for component-specific styling

### TypeScript Configuration
- Path alias `@/*` maps to project root for imports
- Strict mode disabled (`"strict": false`)
- Next.js TypeScript plugin enabled

### Styling
- Tailwind CSS as primary styling framework
- CSS modules for component-specific styles (`.module.css`)
- Global styles in `app/globals.css`
- Custom fonts: Geist Sans and Geist Mono

### Backend Integration
- API routes proxied to localhost:8080 via Next.js rewrites
- Expects backend server running on port 8080 for full functionality