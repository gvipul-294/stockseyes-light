import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({
    ok: true,
    service: 'stockseyes-website',
    timestamp: new Date().toISOString(),
  });
}
