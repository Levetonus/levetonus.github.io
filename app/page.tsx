import Link from 'next/link';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import Blog from '@/app/components/blog/blog';

export default function Home() {
  return (
    <>
      <Header />
      <main className='container'>
        <section className='hero'>
          <h2>Welcome to my website!</h2>
          <p className='lede'>
            This is where I will place the cool stuff I do.
          </p>
          <div className='actions'>
            <Link className='button' href='/about-me'>
              About me
            </Link>
          </div>
        </section>
        <Blog />
      </main>
      <Footer />
    </>
  );
}
