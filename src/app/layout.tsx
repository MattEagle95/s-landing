import './globals.css';

import { Inter } from 'next/font/google';

import { config } from '@/config/config';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: config.app.name,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
