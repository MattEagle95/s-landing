import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, res: NextResponse) => {
  const scriptResponse = await fetch('http://localhost:3000/script.js');

  if (!scriptResponse.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return new NextResponse((await scriptResponse.text()).replace('/api/send', '/stats'));
}

export const POST = async (req: NextRequest, res: NextResponse) => {
  const scriptResponse = await fetch('http://localhost:3000/api/send', {
    method: 'post',
    body: JSON.stringify(req.body),
  });

  if (!scriptResponse.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return new NextResponse(undefined);
}