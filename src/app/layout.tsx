import '@/styles/globals.css';
import type {Metadata, Viewport} from 'next';

import {Geist, Geist_Mono} from 'next/font/google';

import {Providers} from './providers';

import {siteConfig} from '@/config/site';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    {media: '(prefers-color-scheme: light)', color: 'white'},
    {media: '(prefers-color-scheme: dark)', color: 'black'},
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <Providers themeProps={{attribute: 'class', defaultTheme: 'dark'}}>{children}</Providers>
      </body>
    </html>
  );
}
