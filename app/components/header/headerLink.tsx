import Link from 'next/link';

export default function HeaderLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <Link href={href} className='nav-link'>
      {text}
    </Link>
  );
}
