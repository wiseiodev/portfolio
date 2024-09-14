'use client';

export function Footer() {
  return (
    <footer className='border-t'>
      <div className='container mx-auto px-4 py-4 text-center'>
        © {new Date().getFullYear()} Dan Wise. All rights reserved.
      </div>
    </footer>
  );
}
