import Link from 'next/link';

const tickers = [
  ['AAPL', '$252.10', '+1.82%'],
  ['MSFT', '$513.44', '+0.94%'],
  ['NVDA', '$178.22', '+2.63%'],
  ['AMZN', '$231.09', '+0.71%'],
  ['META', '$776.18', '+1.18%'],
  ['TSLA', '$345.76', '+3.10%'],
];

export default function HomePage() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow"><span className="eyebrow-dot" /> Developer-first market data</span>
              <h1>Market data, ready for your product.</h1>
              <p className="hero-copy">
                Stockseyes is planned as a fast, developer-friendly API for real-time quotes,
                intraday feeds and historical market data — with the API governance needed for a public product.
              </p>
              <div className="actions">
                <Link className="btn btn-primary" href="/docs#quickstart">Explore the API</Link>
                <Link className="btn btn-secondary" href="/#architecture">See the architecture</Link>
              </div>
            </div>

            <div className="hero-card" aria-label="Illustrative stock quote panel">
              <div className="hero-card-top"><span>LIVE / DEMO</span><span>Data freshness 320ms</span></div>
              <div className="chart">
                <div className="chart-grid" />
                <svg viewBox="0 0 600 220" role="img" aria-label="Illustrative rising market chart">
                  <path d="M10 192 C55 181 70 190 105 160 S165 172 198 143 S250 152 290 112 S345 132 380 100 S436 113 470 76 S535 88 590 25" fill="none" stroke="#a9e867" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="590" cy="25" r="7" fill="#d7f06a" />
                </svg>
              </div>
              <div className="quote-row">
                <div><div className="quote-symbol">AAPL · NASDAQ</div><div className="quote-price">$252.10</div></div>
                <div className="quote-change">+1.82%</div>
              </div>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Illustrative market ticker">
          <div className="container ticker-inner">
            {tickers.map(([symbol, price, change]) => (
              <div className="ticker-item" key={symbol}>
                <strong>{symbol}</strong>
                <div className="ticker-meta"><span>{price}</span><span className="up">{change}</span></div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="product">
          <div className="container">
            <div className="section-head">
              <span className="section-kicker">The product</span>
              <h2>One API surface. Two data paths. A clean developer experience.</h2>
              <p className="lead">The planned platform keeps the real-time path fast while giving historical consumers a durable, query-optimized source.</p>
            </div>
            <div className="cards">
              <article className="card"><div className="card-icon">R</div><h3>Real-time quotes</h3><p>Serve the latest market state from a hot cache instead of making every customer request depend on an upstream provider call.</p></article>
              <article className="card"><div className="card-icon">H</div><h3>Historical data</h3><p>Expose range queries across daily, hourly or intraday datasets with a storage layer optimized around symbol and time.</p></article>
              <article className="card"><div className="card-icon">D</div><h3>Developer-first API</h3><p>Design the public contract around API keys, plans, quotas, rate limits, documentation and language-neutral HTTP interfaces.</p></article>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="architecture">
          <div className="container">
            <div className="section-head">
              <span className="section-kicker">Architecture</span>
              <h2>Separate acquisition from consumption.</h2>
              <p className="lead">External feeds are continuously ingested, normalized and distributed. The public API serves prepared data instead of turning into a proxy around the provider.</p>
            </div>

            <div className="arch">
              <div className="arch-flow">
                <div className="arch-box"><b>External market providers</b><span>Vendor feeds / exchange data</span></div>
                <div className="arch-arrow">↓</div>
                <div className="arch-box"><b>Ingestion & normalization</b><span>Validate · deduplicate · canonicalize</span></div>
                <div className="arch-arrow">↓</div>
                <div className="arch-box"><b>Kafka / event backbone</b><span>Replayable, decoupled event stream</span></div>
                <div className="arch-arrow">↙ &nbsp;&nbsp;&nbsp;&nbsp; ↘</div>
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}}>
                  <div className="arch-box"><b>Redis</b><span>Latest / hot state</span></div>
                  <div className="arch-box"><b>Historical store</b><span>Time-range queries</span></div>
                </div>
              </div>

              <div className="arch-points">
                <div className="point"><b>Data plane</b><span>Real-time and historical serving stay optimized for different access patterns.</span></div>
                <div className="point"><b>Control plane</b><span>API keys, authentication, plans, quotas and rate limits govern public usage without owning market-data ingestion.</span></div>
                <div className="point"><b>Provider abstraction</b><span>Normalize upstream formats behind an adapter so changing data vendors does not break the public contract.</span></div>
                <div className="point"><b>API product model</b><span>RapidAPI can sit in front of the hosted API as the developer discovery, subscription and gateway layer.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="api">
          <div className="container">
            <div className="section-head">
              <span className="section-kicker">API shape</span>
              <h2>Simple endpoints that hide a complex backend.</h2>
            </div>
            <div className="code-card">
              <div className="code-head"><span>REST / v1</span><span>illustrative response</span></div>
              <pre>{`GET /v1/stocks/AAPL/quote

{
  "symbol": "AAPL",
  "exchange": "NASDAQ",
  "price": 252.10,
  "timestamp": "2026-09-24T09:30:01Z",
  "data_age_ms": 320
}

GET /v1/stocks/AAPL/history?start=2026-01-01&end=2026-09-24&interval=1d`}</pre>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="pricing">
          <div className="container">
            <div className="section-head">
              <span className="section-kicker">Plans</span>
              <h2>Built to become an API product.</h2>
              <p className="lead">The website uses illustrative tiers. Final pricing, request allowances and rate limits should be configured in RapidAPI after the production backend is ready.</p>
            </div>
            <div className="plans">
              <article className="plan"><div className="plan-name">Basic</div><div className="price">Free</div><p className="plan-note">Try the API and validate your integration.</p><ul><li>Illustrative request allowance</li><li>Standard rate limit</li><li>Community documentation</li></ul></article>
              <article className="plan featured"><span className="badge">Planned</span><div className="plan-name">Pro</div><div className="price">$25<span style={{fontSize:16}}>/mo</span></div><p className="plan-note">For production applications with higher traffic.</p><ul><li>Higher request quota</li><li>Higher rate limit</li><li>Priority support path</li></ul></article>
              <article className="plan"><div className="plan-name">Scale</div><div className="price">Custom</div><p className="plan-note">For higher throughput, specialized data and business integrations.</p><ul><li>Custom quota</li><li>Custom limits</li><li>Architecture discussion</li></ul></article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head"><span className="section-kicker">Developer workflow</span><h2>From repository to public API.</h2></div>
            <div className="workflow">
              <div className="step"><div className="step-num">01</div><h3>Build</h3><p>Edit the website, API contract and backend according to the business requirement.</p></div>
              <div className="step"><div className="step-num">02</div><h3>Verify</h3><p>Run lint and production build checks in CI for every branch or pull request.</p></div>
              <div className="step"><div className="step-num">03</div><h3>Deploy</h3><p>Push the website through Vercel's Git integration for preview and production deployments.</p></div>
              <div className="step"><div className="step-num">04</div><h3>Publish</h3><p>Host the production API separately, import its OpenAPI contract into RapidAPI and configure the listing.</p></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="banner">
              <div><h3 style={{margin:0, fontSize:27}}>Ready for the implementation phase?</h3><p>Use the starter, replace the mock content, connect the backend and then publish the API through RapidAPI.</p></div>
              <Link className="btn btn-secondary" href="/docs">Open implementation guide</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
