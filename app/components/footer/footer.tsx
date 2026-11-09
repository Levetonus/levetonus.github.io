'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='site-footer'>
      <div className='container'>
        <p>
          © <time suppressHydrationWarning>{currentYear}</time> Steven Luo. All
          rights reserved.
        </p>
        <Link href='https://github.com/levetonus'>
          https://github.com/levetonus
        </Link>
      </div>
    </footer>
  );
}
