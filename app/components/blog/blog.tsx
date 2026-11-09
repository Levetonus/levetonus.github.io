import Link from 'next/link';
import { formatBlogDate, getAllBlogPosts } from '@/lib/blog';

// This is an async Server Component (there is no "use client" directive).
// Next.js runs it while generating the page, so it can read posts from disk via
// lib/blog.ts without sending filesystem code or all post bodies to the browser.
export default async function Blog() {
  const posts = await getAllBlogPosts();

  return (
    <section className='card blog-section' id='blog'>
      <h3>Blog</h3>
      <p className='muted'>Thoughts, project notes, and recent updates.</p>
      <div className='blog-post-list'>
        {/* The post slug is stable and unique, so React can use it to track each
            preview. The same slug is interpolated into the article's URL. */}
        {posts.map((post) => (
          <article className='blog-preview' key={post.slug}>
            <div className='blog-preview-heading'>
              <h4>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h4>
              {/* dateTime stays machine-readable for browsers and assistive
                  technology; the text is formatted for human readers. */}
              <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            </div>
            <p>{post.summary}</p>
            <Link className='blog-read-link' href={`/blog/${post.slug}`}>
              Read article
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
