import Link from 'next/link';

export default function ArchitecturePage() {
  return (
    <main className="subpage">
      <div className="container prose">
        <span className="section-kicker">Architecture</span>
        <h1>A data platform behind a simple API.</h1>
        <p className="lead">The core decision is to separate the market-data acquisition pipeline from the public consumption layer.</p>
        <h2>Target flow</h2>
        <pre><code>{`External Market Providers
        |
        v
  Ingestion + Normalization
        |
        v
      Kafka/Event Bus
       /         \\
      v           v
   Redis      Historical DB
      |           |
      +-----+-----+
            |
            v
       Stock Data API
            |
       API Gateway
            |
   Developers / Applications`}</code></pre>
        <h2>Key decisions</h2>
        <ul>
          <li>Real-time reads target hot state such as Redis.</li>
          <li>Historical queries target durable time-series/analytical storage.</li>
          <li>Provider adapters normalize upstream schemas into one canonical model.</li>
          <li>The API tier remains stateless and horizontally scalable.</li>
          <li>RapidAPI sits at the developer-facing boundary for discovery, subscriptions and plan enforcement.</li>
        </ul>
        <p><Link className="btn btn-secondary" href="/docs">Read implementation guide</Link></p>
      </div>
    </main>
  );
}
