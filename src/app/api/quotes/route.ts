import { NextResponse } from 'next/server';
import { SEED_QUOTES } from '@/constants/seedData';
import { IQuoteDTO } from '@/types';

export async function GET() {
  return NextResponse.json(SEED_QUOTES);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as IQuoteDTO;
    return NextResponse.json({ ...body, id: body.id || `quote-${Date.now()}` }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create quote', details: String(error) }, { status: 400 });
  }
}
