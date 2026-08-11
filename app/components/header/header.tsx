import Link from 'next/link';
import Image from 'next/image';
import HeaderLink from './headerLink';

export default function Header() {
  return (
    <header className='site-header'>
      <div className='container'>
        <h1 className='brand'>
          <Link href='/'>
            Steven Luo<span className='dim'> - Personal Website</span>
          </Link>
        </h1>
        <nav className='site-nav' aria-label='Primary'>
          <HeaderLink href='/about-me' text='About Me' />
          <HeaderLink href='/projects/blender' text='Blender Gallery' />
        </nav>
        <Image
          src='/resources/favicon.png'
          alt='Site icon'
          className='site-favicon'
          width={50}
          height={50}
          priority
        />
      </div>
    </header>
  );
}
