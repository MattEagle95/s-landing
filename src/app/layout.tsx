import './globals.css';

import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script
          async
          src="api/stats"
          data-website-id={process.env.NEXT_PUBLIC_STATS_WEBSITE_ID}
        />
      </body>
    </html>
  );
}