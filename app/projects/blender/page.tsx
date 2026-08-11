import Image from 'next/image';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';

export default function BlenderGallery() {
  return (
    <>
      <Header />
      <main className='container'>
        <section className='hero'>
          <h2>Blender Gallery</h2>
          <div className='lede'>
            <p>Each art piece will be classified into two categories:</p>
            <ul>
              <li>
                Main Timeline - Work that is inspired by my real life
                experiences
              </li>
              <li>
                Experimental Timeline - Work that is inspired by other creative
                pieces, most often music
              </li>
            </ul>
          </div>
        </section>

        <section className='card'>
          <h3>Featured Artwork</h3>
          <p>Here are some of my favorite pieces created in Blender.</p>
          <figure>
            <Image
              src='/projects/18.png'
              alt='Two characters standing on the beach in front of their respective machines'
              width={600}
              height={338}
              sizes='(max-width: 700px) 100vw, 600px'
            />
            <figcaption>&quot;18&quot; - Rendered in Blender, 2025</figcaption>
          </figure>
          <figure>
            <Image
              src='/projects/ProblemSolving.png'
              alt='Two characters standing on the beach in front of their respective machines'
              width={600}
              height={338}
              sizes='(max-width: 700px) 100vw, 600px'
            />
            <figcaption>
              &quot;Problem Solving&quot; - Rendered in Blender, 2024
            </figcaption>
          </figure>
        </section>
      </main>
      <Footer />
    </>
  );
}
