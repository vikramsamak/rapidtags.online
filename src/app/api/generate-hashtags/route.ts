import { NextRequest, NextResponse } from 'next/server';
import { makeApiRequest } from '@/utils';
import { ApiError } from '@/types';

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();

    const { title, platform } = body;

    if (!title || !platform) {
      return NextResponse.json(
        { message: 'Title and platform are required' },
        { status: 400 },
      );
    }

    const response = await makeApiRequest<{ hashtags: string[] }>({
      method: 'POST',
      url: process.env.GENERATE_HASHTAGS_WEBHOOK as string,
      data: { title, platform },
    });

    return NextResponse.json({ data: response.hashtags }, { status: 200 });
  } catch (error: ApiError | unknown) {
    const apiError = error as ApiError;
    if (apiError && apiError.message) {
      return NextResponse.json(
        { message: apiError.message },
        { status: apiError.status || 500 },
      );
    }
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
