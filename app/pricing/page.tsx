export default function PricingPage() {
  return (
    <main className="subpage">
      <div className="container prose">
        <span className="section-kicker">Pricing</span>
        <h1>Plans are part of the API architecture.</h1>
        <p className="lead">These tiers are placeholders for the product-design phase. Configure the actual plans in RapidAPI after upstream data cost, expected usage and margins are known.</p>
        <div className="plans" style={{marginTop: 28}}>
          <article className="plan"><div className="plan-name">Basic</div><div className="price">Free</div><p className="plan-note">Limited testing allowance.</p></article>
          <article className="plan featured"><div className="plan-name">Pro</div><div className="price">$25</div><p className="plan-note">Illustrative production tier.</p></article>
          <article className="plan"><div className="plan-name">Scale</div><div className="price">Custom</div><p className="plan-note">Higher throughput and custom requirements.</p></article>
        </div>
        <h2>Plan dimensions to decide later</h2>
        <ul>
          <li>Requests per day or month</li>
          <li>Requests per second/minute</li>
          <li>Historical lookback window</li>
          <li>Intraday granularity</li>
          <li>Real-time streaming availability</li>
          <li>Commercial support and SLAs</li>
        </ul>
      </div>
    </main>
  );
}
