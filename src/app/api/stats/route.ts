import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  const scriptResponse = await fetch(
    new URL('script.js', process.env.STATS_HOST),
  );

  if (!scriptResponse.ok) {
    throw new Error('Failed to fetch data');
  }

  return new NextResponse(
    (await scriptResponse.text()).replace('/api/send', '/stats'),
  );
};

export const POST = async (req: NextRequest) => {
  const scriptResponse = await fetch(
    new URL('api/send', process.env.STATS_HOST),
    {
      method: 'post',
      body: JSON.stringify(req.body),
    },
  );

  if (!scriptResponse.ok) {
    throw new Error('Failed to post data');
  }

  return new NextResponse(undefined);
};
