# RapidAPI publication notes

This folder contains the starting OpenAPI contract for the planned Stockseyes API.

## Correct deployment model

1. Host the real market-data backend yourself on a production HTTPS host (AWS, GCP, Azure, Render, Railway, Fly.io, etc.).
2. Keep market-data provider credentials on that backend, never in the website.
3. Verify `/health` and the public API endpoints directly.
4. In RapidAPI Studio / Provider Dashboard, create the API project and import `openapi.yaml` or define the endpoints there.
5. Configure the RapidAPI base URL to your production API.
6. Configure authentication/security and the required endpoint definitions.
7. Configure the public plans, request quotas and rate limits.
8. Add the listing description, logo, website, terms, documentation and support information.
9. Test the API from the RapidAPI console.
10. Publish the listing when the production endpoint and plans are ready.

Replace `https://api.example.com` in `openapi.yaml` with your actual production API URL before using the specification as your final contract.
