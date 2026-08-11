import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='site-footer'>
      <div className='container'>
        <p>© 2025 Steven Luo. All rights reserved.</p>
        <Link href='https://github.com/levetonus'>
          https://github.com/levetonus
        </Link>
      </div>
    </footer>
  );
}
