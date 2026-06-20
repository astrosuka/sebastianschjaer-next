# Sebastián Schjaer

Personal portfolio site for Sebastián Schjaer — director and editor. Adapted from an earlier React + Vite SPA (sebastianschjaer.com)
to Next.js with server rendering, TypeScript, and on-demand revalidation.

## Stack

- Next.js (App Router, Server Components)
- Sanity CMS (content management)
- Tailwind CSS v4
- TypeScript
- Vercel (hosting)

## Architecture

All pages are server-rendered and statically cached. Content updates from Sanity trigger on-demand revalidation via webhook — no polling or scheduled rebuilds. The migration from the client-side SPA to server components also enabled per-page SEO metadata and optimized Sanity queries (the original fetched all data client-side and filtered in the browser).

Bilingual support (Spanish/English) is handled client-side via a language toggle, with English as the default and canonical language for SEO.

## Sections

- Director — film projects with credits, synopsis, and film poster
- Editor — features, shorts, and trailers filmography
- Bio — biography with portable text from Sanity
- Fotos — masonry photo gallery with lightbox
- Mixtapes — curated music mixes
