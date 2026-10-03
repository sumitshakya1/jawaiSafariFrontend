import { NextResponse } from 'next/server';
import { ContactRequestSchema, IContactRequestDTO } from '@/types';

const contactSubmissions: IContactRequestDTO[] = [];

export async function GET() {
  return NextResponse.json(contactSubmissions);
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const validated = ContactRequestSchema.parse(json);

    const submission: IContactRequestDTO = {
      ...validated,
      id: `briefing_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    };

    contactSubmissions.push(submission);

    return NextResponse.json(submission, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Validation failed',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 400 }
    );
  }
}
