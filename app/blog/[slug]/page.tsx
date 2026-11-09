import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import { formatBlogDate, getAllBlogPosts, getBlogPost } from '@/lib/blog';

type BlogPostPageProps = {
  // In current Next.js App Router pages, dynamic route parameters are provided
  // as a Promise. A URL such as /blog/welcome supplies { slug: "welcome" }.
  params: Promise<{ slug: string }>;
};

// Only slugs returned by generateStaticParams are valid. This is important for
// a static export: the deployed site has prebuilt HTML files and no server that
// could generate a newly requested slug on demand.
export const dynamicParams = false;

// Next.js calls this at build time to discover every concrete page represented
// by the [slug] folder. Adding a Markdown file automatically adds another route
// the next time the site is built.
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {};
  }

  // Next.js places this metadata in the document <head>. It gives each article
  // a useful browser-tab title and description instead of only the site defaults.
  return {
    title: `${post.title} | Steven Luo`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    // notFound() stops rendering this component and asks Next.js to use its 404
    // handling. This also protects against an invalid slug reaching the route.
    notFound();
  }

  return (
    <>
      <Header />
      <main className='container'>
        <article className='card blog-article'>
          <Link className='blog-back-link' href='/#blog'>
            Back to all articles
          </Link>
          <header className='blog-article-header'>
            <h2>{post.title}</h2>
            <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
          </header>
          <div className='blog-content'>
            {/* react-markdown converts the Markdown body into React elements.
                remark-gfm adds common extensions such as tables, task lists,
                strikethrough, and automatically linked URLs. Raw HTML in a post
                is not executed, which keeps Markdown content safer by default. */}
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
