import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simple Weather App',
  description:
    'Stay ahead of the elements with our comprehensive weather web application. Get real-time weather updates, forecasts, and interactive maps, all in one place. Plan your day with confidence using our user-friendly interface. Try it now for accurate weather information at your fingertips!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
