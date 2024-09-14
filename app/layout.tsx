import '@/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import { Inter as FontSans } from 'next/font/google';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';
import { ResponsiveHeader } from '@/components/responsive-header';
import { RootLayoutProps } from '@/types/layout';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Dan Wise - Home',
  description:
    'Innovative solutions in hospitality technology, serverless architecture, and cloud computing.'
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex min-h-screen flex-col'>
            <ResponsiveHeader />
            <main className='container mx-auto flex-grow px-4 py-8'>
              {children}
            </main>
            <Toaster />
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
