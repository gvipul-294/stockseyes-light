import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({
    demo: true,
    symbol: 'AAPL',
    exchange: 'NASDAQ',
    price: 252.1,
    currency: 'USD',
    changePercent: 1.82,
    timestamp: new Date().toISOString(),
    note: 'Illustrative demo response only. Replace with the real market-data backend.',
  });
}
