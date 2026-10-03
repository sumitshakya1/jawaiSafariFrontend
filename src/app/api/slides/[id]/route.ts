import { NextResponse } from 'next/server';
import { SEED_SLIDES } from '@/constants/seedData';
import { IHeroSlideDTO } from '@/types';

let slidesStore: IHeroSlideDTO[] = [...SEED_SLIDES];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const slide = slidesStore.find((s) => s.id === params.id || s.slideNumber === params.id);
  if (!slide) {
    return NextResponse.json({ error: 'Slide not found' }, { status: 404 });
  }
  return NextResponse.json(slide);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = slidesStore.findIndex((s) => s.id === params.id || s.slideNumber === params.id);
  if (index === -1) {
    return NextResponse.json({ error: 'Slide not found' }, { status: 404 });
  }
  const body = await request.json();
  slidesStore[index] = { ...slidesStore[index], ...body };
  return NextResponse.json(slidesStore[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = slidesStore.findIndex((s) => s.id === params.id || s.slideNumber === params.id);
  if (index === -1) {
    return NextResponse.json({ error: 'Slide not found' }, { status: 404 });
  }
  slidesStore.splice(index, 1);
  return NextResponse.json({ success: true });
}
