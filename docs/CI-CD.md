# CI/CD

## Recommended setup

- GitHub is the source-of-truth repository.
- GitHub Actions runs verification (`npm install`, lint, build).
- Vercel's Git integration performs preview and production deployments.
- `main` is the production branch.

## Flow

Feature branch -> Pull Request -> GitHub Actions -> Vercel Preview -> Review -> Merge to main -> Vercel Production.

The workflow in `.github/workflows/ci.yml` intentionally does not run `vercel deploy`; this avoids duplicating Vercel's native Git deployment pipeline.
