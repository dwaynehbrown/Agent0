
import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  console.log (' get user orgs' );
  const dummyData = { 
    users: [
      { id: 1, name: "Alice" }
      , { id: 2, name: "Bob" },
    ] 
  };

  return NextResponse.json({ dummyData }, { status: 200 });
}