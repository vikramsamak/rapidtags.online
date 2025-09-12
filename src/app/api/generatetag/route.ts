import { NextRequest, NextResponse } from "next/server";
import { makeApiRequest } from "@/utils";
import { ApiError } from "@/types";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { title } = body;

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const res = await makeApiRequest<{ tags: string[] }>({
      method: "POST",
      url: process.env.NEXT_PUBLIC_API_GENERATE_TAGS_WEBHOOK as string,
      data: { title },
    });

    return NextResponse.json({ tags: res });
  } catch (error: ApiError | unknown) {
    const apiError = error as ApiError;
    if (apiError && apiError.message) {
      return NextResponse.json(
        { error: apiError.message },
        { status: apiError.status || 500 }
      );
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
