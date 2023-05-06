import { NextResponse } from 'next/server';

export const GET = async () => {
  const scriptResponse = await fetch(
    new URL('script.js', process.env.NEXT_PUBLIC_STATS_HOST),
    { cache: 'force-cache' },
  );

  if (!scriptResponse.ok) {
    throw new Error('Failed to fetch data');
  }

  return new NextResponse(await scriptResponse.text());
};
