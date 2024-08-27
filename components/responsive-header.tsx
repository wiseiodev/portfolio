'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import logo from '@/assets/wiseio-logo.png';
import logoSmall from '@/assets/wiseio-icon.png';

const NavItems = () => (
  <>
    <Button
      variant='ghost'
      asChild>
      <Link href='/about'>About</Link>
    </Button>
    <Button
      variant='ghost'
      asChild>
      <Link href='/projects'>Projects</Link>
    </Button>
    <Button
      variant='ghost'
      asChild>
      <Link href='/skills'>Skills</Link>
    </Button>
    <Button
      variant='ghost'
      asChild>
      <Link href='/contact'>Contact</Link>
    </Button>
  </>
);

export function ResponsiveHeader() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <header className='border-b'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <Link
          href='/'
          className='text-2xl font-bold'>
          <Image
            priority
            src={isMobile ? logoSmall : logo}
            alt='Wise IO Logo'
            height={isMobile ? 25 : 30}
          />
        </Link>
        {isMobile ? (
          <div className='flex items-center space-x-2'>
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'>
                  <Menu className='h-6 w-6' />
                  <span className='sr-only'>Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className='flex flex-col space-y-4 pt-10'>
                  <NavItems />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <nav className='flex items-center space-x-4'>
            <NavItems />
            <ThemeToggle />
          </nav>
        )}
      </div>
    </header>
  );
}
