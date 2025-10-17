import { NextRequest, NextResponse } from 'next/server';
import { ContentIdea, ApiError } from '@/types';

const MOCK_CONTENT_IDEAS: ContentIdea[] = [
  {
    title: 'The Ultimate Guide to Starting a Vegetable Garden',
    description:
      'A comprehensive guide for beginners on how to start their own vegetable garden, from choosing the right location to harvesting their first crops.',
  },
  {
    title: '5 Easy and Delicious Weeknight Dinners',
    description:
      'A collection of five simple and tasty recipes that are perfect for busy weeknights, with step-by-step instructions and photos.',
  },
  {
    title: 'How to Create a Cozy and Inviting Living Room',
    description:
      'Tips and tricks for decorating your living room to make it a warm and welcoming space for family and guests.',
  },
  {
    title: 'The Benefits of Mindfulness and Meditation',
    description:
      'An exploration of the mental and physical benefits of mindfulness and meditation, with guidance on how to get started.',
  },
  {
    title: 'A Beginner’s Guide to Investing in the Stock Market',
    description:
      'A step-by-step guide for beginners on how to start investing in the stock market, including tips on how to choose the right stocks and manage your portfolio.',
  },
];

const MOCK_RESPONSE = {
  data: MOCK_CONTENT_IDEAS,
};

async function getMockResponse(): Promise<typeof MOCK_RESPONSE> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_RESPONSE);
    }, 2000);
  });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { topic, platform } = body;

    if (!topic || !platform) {
      return NextResponse.json(
        { message: 'Topic and platform are required' },
        { status: 400 },
      );
    }

    const response = await getMockResponse();

    return NextResponse.json({ data: response.data }, { status: 200 });
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
