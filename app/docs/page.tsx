import Link from 'next/link';

export default function DocsPage() {
  return (
    <main className="subpage">
      <div className="container prose">
        <span className="eyebrow"><span className="eyebrow-dot" /> Implementation guide</span>
        <h1>Build, edit, deploy, then publish the API.</h1>
        <p className="lead">This site is intentionally separated from the production market-data backend. You can change the UI and content independently while the API is hosted as its own service.</p>

        <div className="notice" id="quickstart"><strong>Quick start:</strong> install Node.js 20.9+ (Node 22 is fine), run <code>npm install</code>, then <code>npm run dev</code> and open <code>http://localhost:3000</code>.</div>

        <h2>What you can edit</h2>
        <ul>
          <li><strong>app/page.tsx</strong> — landing-page content, sections, mock ticker and CTA copy.</li>
          <li><strong>app/globals.css</strong> — visual system, typography, spacing and responsive layout.</li>
          <li><strong>app/docs</strong>, <strong>app/architecture</strong>, <strong>app/pricing</strong> — supporting pages.</li>
          <li><strong>components/</strong> — add interactive React components as the product requirements grow.</li>
          <li><strong>rapidapi/openapi.yaml</strong> — public API contract that should evolve with the real backend.</li>
          <li><strong>.env.local</strong> — local configuration; do not commit secrets.</li>
        </ul>

        <h2>Local development</h2>
        <pre><code>{`npm install
npm run dev

# Production check
npm run lint
npm run build
npm start`}</code></pre>

        <h2>Suggested Git workflow</h2>
        <pre><code>{`git checkout -b feature/your-change
# edit code
npm run lint
npm run build
git add .
git commit -m "feat: describe change"
git push -u origin feature/your-change
# open a pull request into main`}</code></pre>

        <h2>Vercel CI/CD</h2>
        <p>The recommended setup is to connect the GitHub repository to Vercel. Vercel can create preview deployments for pushes and pull requests and deploy the production branch, commonly <code>main</code>, to production. Keep GitHub Actions focused on verification and let Vercel handle deployment unless you specifically need a custom deployment pipeline.</p>
        <ol>
          <li>Push this project to GitHub.</li>
          <li>In Vercel, choose <strong>New Project</strong> and import the repository.</li>
          <li>Keep the framework as Next.js and select the project root.</li>
          <li>Add environment variables from <code>.env.example</code> in the Vercel project settings.</li>
          <li>Deploy. Each PR can then use its preview deployment; merge to <code>main</code> for production.</li>
          <li>Add the production domain in Vercel when the brand domain is ready.</li>
        </ol>

        <h2>RapidAPI: host the backend first</h2>
        <p><strong>Important:</strong> RapidAPI should be treated as the public API gateway/marketplace layer, not as the place where you keep your core market-data processing. Host the production API on a backend platform such as AWS, GCP, Azure, Render, Railway, Fly.io or another suitable HTTPS host. Your backend should expose the endpoints described in <code>rapidapi/openapi.yaml</code>.</p>

        <h2>RapidAPI publishing flow</h2>
        <ol>
          <li>Deploy the production API and verify its HTTPS base URL, health checks and authentication behaviour.</li>
          <li>Open RapidAPI Provider/Studio and create an API project.</li>
          <li>Import the OpenAPI specification from <code>rapidapi/openapi.yaml</code> or define the endpoints in the dashboard.</li>
          <li>Configure the API's <strong>Base URL</strong> to point at your production backend.</li>
          <li>Configure security, endpoint definitions and documentation.</li>
          <li>Configure Basic/Pro/Ultra/other plans, request quotas, rate limits and pricing according to the final commercial model.</li>
          <li>Use RapidAPI's test console and provider monitoring to validate requests before making the listing public.</li>
          <li>Publish the listing and direct developers to the RapidAPI listing URL from this website.</li>
        </ol>

        <h2>What the frontend should never contain</h2>
        <ul>
          <li>Market-data vendor API secrets.</li>
          <li>RapidAPI provider credentials.</li>
          <li>Database passwords.</li>
          <li>Signing keys or private tokens.</li>
        </ul>
        <p>Use server-side environment variables for secrets. Only variables intentionally prefixed with <code>NEXT_PUBLIC_</code> should be considered browser-visible.</p>

        <h2>Next implementation step</h2>
        <p>Replace the illustrative pricing and quote data, wire the website to the real RapidAPI listing, and implement the production backend separately. A Java/Spring Boot, Node.js or Python backend can all satisfy the public HTTP contract as long as the deployed API matches the OpenAPI specification.</p>
        <p><Link className="btn btn-primary" href="/">Back to product site</Link></p>
      </div>
    </main>
  );
}
