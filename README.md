# Stockseyes API Platform Website

A Vercel-ready Next.js website starter for the planned Stockseyes market-data API product.

## Included

- Product landing page
- Real-time / historical data positioning
- Architecture section based on the planned ingestion + Redis + historical store model
- API example section
- Pricing placeholder
- Developer documentation page
- Vercel-ready Next.js App Router project
- GitHub Actions CI (lint + production build)
- `/api/health` smoke-test endpoint
- `/api/demo/quote` illustrative response endpoint
- `rapidapi/openapi.yaml` starter API contract
- RapidAPI publication notes
- Editing and CI/CD guides

## Requirements

Current Next.js documentation requires Node.js 20.9 or newer; Node 22 is recommended for this project.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Run a production check:

```bash
npm run lint
npm run build
npm start
```

## Deploy the website to Vercel

### Recommended Git workflow

1. Create a GitHub repository.
2. Push this project.
3. Import the repository into Vercel.
4. Select the Next.js project root.
5. Add any required environment variables in Vercel Project Settings.
6. Deploy.
7. Use preview deployments for pull requests and production deployment from `main`.

### CLI option

You can also deploy from the project directory:

```bash
npm install -g vercel
vercel --prod
```

## Important: hosting the API on RapidAPI

RapidAPI is not a substitute for your market-data backend. The recommended production topology is:

```text
Market Data Providers
        |
        v
Your API backend (AWS / GCP / Azure / Render / Railway / etc.)
        |
        v
RapidAPI Provider / API Hub
        |
        v
Developers using Stockseyes
```

Host the real API on a stable HTTPS endpoint. Then add the API in RapidAPI Studio / Provider Dashboard, import `rapidapi/openapi.yaml`, configure the base URL, security, plans and rate limits, test it, and publish the listing.

Read `app/docs/page.tsx` and `rapidapi/README.md` for the fuller process.

## Editing the code

The project is deliberately editable. Start with `docs/EDITING.md`, which explains the main files to change when requirements, branding, pricing, API contract or content evolve.

## What is mock / illustrative

The quote values and pricing shown on the website are illustrative. They are not live market data and must be replaced with the real production API integration before the product is published.
