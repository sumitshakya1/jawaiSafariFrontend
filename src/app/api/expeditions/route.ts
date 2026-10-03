import { NextResponse } from 'next/server';
import { SEED_EXPEDITIONS } from '@/constants/seedData';
import { IExpeditionDTO } from '@/types';

let expeditionStore: IExpeditionDTO[] = [...SEED_EXPEDITIONS];

export async function GET() {
  return NextResponse.json(expeditionStore);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as IExpeditionDTO;
    const item: IExpeditionDTO = {
      ...body,
      id: body.id || `expedition-${Date.now()}`,
    };
    expeditionStore.push(item);
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create expedition', details: String(error) }, { status: 400 });
  }
}
