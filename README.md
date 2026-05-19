# NOETRA STRATEGIES

Production-ready web platform for NOETRA STRATEGIES, positioned as an international strategic intelligence and AI-driven advisory firm.

## Project Overview

- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS + custom cinematic motion system
- Runtime: React 19
- Deployment target: Vercel
- Contact pipeline: Next.js API Route + Resend
- Observability: Vercel Analytics

## Technology Stack

- next, react, react-dom
- framer-motion, gsap, lucide-react
- clsx, tailwind-merge
- resend, zod
- @vercel/analytics

## Architecture

```text
src/
	app/
		api/contact/route.ts     # Contact form backend (Resend)
		sitemap.ts               # XML sitemap generation
		robots.ts                # Robots policy
		layout.tsx               # Global metadata + JSON-LD + analytics
		page.tsx                 # Homepage composition
		about/, services/, innovation/, network/, contact/, legal/, noetralex/
	components/
		layout/                  # Navbar, Footer, Container, visual runtime layers
		sections/                # Business sections and disclosure components
		ui/                      # Reusable UI primitives
	lib/
		site.ts                  # Global site configuration and SEO constants
		utils.ts                 # Class utilities
```

## Scripts

- `npm run dev`: Start local development server
- `npm run lint`: Run ESLint checks
- `npm run build`: Build production bundle
- `npm run start`: Serve production build locally

## Environment Variables

Copy `.env.example` and configure values for your environment.

```env
RESEND_API_KEY=
NEXT_PUBLIC_SITE_URL=
CONTACT_EMAIL=info@noetra.it
```

## Deployment Instructions (Vercel)

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Set environment variables in Vercel Project Settings.
4. Use `npm run build` as verification before promoting to production.
5. Ensure domain-level DNS and HTTPS are configured.

## GitHub Setup

```bash
git remote add origin <your-github-repository-url>
git branch -M main
git push -u origin main
```

## Production Pipeline Highlights

- Security headers and CSP placeholders configured in `next.config.ts`
- Static caching strategy for immutable assets
- Canonical metadata, OpenGraph, Twitter cards, JSON-LD placeholders
- Sitemap and robots generated automatically by App Router metadata routes
- Contact form includes validation, async state handling, and backend delivery

## Validation

Before deployment run:

```bash
npm run lint
npm run build
```
