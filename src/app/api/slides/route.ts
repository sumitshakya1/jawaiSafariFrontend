import { NextResponse } from 'next/server';
import { SEED_SLIDES } from '@/constants/seedData';
import { IHeroSlideDTO } from '@/types';

// In-memory store initialized with seed data
let slidesStore: IHeroSlideDTO[] = [...SEED_SLIDES];

export async function GET() {
  return NextResponse.json(slidesStore);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as IHeroSlideDTO;
    const newSlide: IHeroSlideDTO = {
      ...body,
      id: body.id || `slide-${Date.now()}`,
    };
    slidesStore.push(newSlide);
    return NextResponse.json(newSlide, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create slide', details: String(error) },
      { status: 400 }
    );
  }
}
