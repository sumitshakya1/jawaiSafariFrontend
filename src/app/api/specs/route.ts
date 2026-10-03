import { NextResponse } from 'next/server';
import { ISpecificationRowDTO } from '@/types';

const defaultSpecs: ISpecificationRowDTO[] = [
  { id: 'spec-1', label: 'Recommended Hour', value: '17:15 — 20:30 IST', highlight: true },
  { id: 'spec-2', label: 'Vessel Type', value: 'Open-Top Safari Spec 4WD', highlight: false },
  { id: 'spec-3', label: 'Tracking Method', value: 'Infrared & Optical Stalk', highlight: false },
  { id: 'spec-4', label: 'Night Range Patrol', value: '22:00 — 04:30 HRS', highlight: false },
  { id: 'spec-5', label: 'Vehicle Enclosure', value: 'Custom Open-Roof 4x4', highlight: true },
];

export async function GET() {
  return NextResponse.json(defaultSpecs);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ISpecificationRowDTO;
    return NextResponse.json({ ...body, id: body.id || `spec-${Date.now()}` }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create spec', details: String(error) }, { status: 400 });
  }
}
