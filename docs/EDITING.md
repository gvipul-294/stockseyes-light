# Editing the Stockseyes website

This starter is deliberately structured so the visual website can evolve independently of the market-data backend.

## Common changes

- Branding: edit `app/layout.tsx` and the `.brand` / `.logo` styles in `app/globals.css`.
- Hero copy: edit `app/page.tsx`.
- Colors and spacing: edit CSS variables at the top of `app/globals.css`.
- Pricing: edit the pricing cards in `app/page.tsx` and `app/pricing/page.tsx`.
- API examples: edit the code block in `app/page.tsx` and keep it aligned with `rapidapi/openapi.yaml`.
- Docs: edit `app/docs/page.tsx`.

## When product requirements change

1. Update the public API contract first in `rapidapi/openapi.yaml`.
2. Update the backend implementation to satisfy that contract.
3. Update the docs and examples.
4. Update the frontend only where user-facing behavior changes.
5. Run `npm run lint` and `npm run build`.
6. Push the branch and review the Vercel preview.
7. Merge into `main` after validation.

## Secrets

Never put vendor API keys or private backend credentials in `NEXT_PUBLIC_*` variables. Keep private values in local `.env.local` and Vercel Project Settings.
