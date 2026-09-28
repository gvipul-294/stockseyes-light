import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stockseyes — Market Data API',
  description: 'A developer-first API platform for real-time and historical stock data.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="nav">
          <div className="container nav-inner">
            <Link href="/" className="brand" aria-label="Stockseyes home">
              <span className="logo">S</span>
              <span>Stockseyes</span>
            </Link>
            <nav className="nav-links" aria-label="Primary navigation">
              <Link href="/#product">Product</Link>
              <Link href="/#architecture">Architecture</Link>
              <Link href="/docs">Docs</Link>
              <Link href="/pricing">Pricing</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container footer-inner">
            <div>© {new Date().getFullYear()} Stockseyes. Market-data platform starter.</div>
            <div>Demo site — connect your production API before publishing.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
