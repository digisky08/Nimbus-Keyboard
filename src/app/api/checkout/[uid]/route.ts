import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ uid: string }> },
) {
  return NextResponse.json(
    { error: "Payment gateway has been removed" },
    { status: 501 },
  );
}
