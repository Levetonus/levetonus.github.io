import { cache } from 'react';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

// Blog posts live outside the app folder because they are content, not routes or
// React components. process.cwd() is the project root while Next.js is building
// or running the site, so this resolves to <project>/content/blog.
const blogDirectory = path.join(process.cwd(), 'content', 'blog');
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

// This is the single shape used by both the blog list and individual articles.
// Keeping it here means a post is parsed and checked once before the UI uses it.
export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
};

// gray-matter separates the YAML between the two --- lines from the Markdown
// body. For example, `data.title` comes from the front matter while `content`
// contains everything that ReactMarkdown will eventually render.
function parseBlogPost(fileName: string, source: string): BlogPost {
  const { data, content } = matter(source);

  // The filename is also the URL identifier: welcome.md becomes /blog/welcome.
  const slug = fileName.replace(/\.md$/, '');

  // Front matter comes from a text file and is therefore not type-safe. These
  // checks fail the build with a useful message instead of rendering a broken
  // card or an article with missing metadata.
  if (typeof data.title !== 'string' || data.title.trim() === '') {
    throw new Error(`${fileName} is missing a title.`);
  }

  if (typeof data.date !== 'string' || !datePattern.test(data.date)) {
    throw new Error(`${fileName} must have a date in YYYY-MM-DD format.`);
  }

  if (typeof data.summary !== 'string' || data.summary.trim() === '') {
    throw new Error(`${fileName} is missing a summary.`);
  }

  return {
    slug,
    title: data.title.trim(),
    date: data.date,
    summary: data.summary.trim(),
    content,
  };
}

// React's cache() remembers this async result for the current server render.
// The home page, route generation, and metadata code can all ask for the posts
// without repeatedly reading every file during the same render/build pass.
export const getAllBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const entries = await readdir(blogDirectory, { withFileTypes: true });

  // Directories and non-Markdown files are intentionally ignored, so assets can
  // be stored elsewhere without accidentally becoming articles.
  const fileNames = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => entry.name);

  // Read independent files in parallel. Promise.all preserves the results while
  // avoiding one filesystem wait per post in sequence.
  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const source = await readFile(path.join(blogDirectory, fileName), 'utf8');
      return parseBlogPost(fileName, source);
    }),
  );

  // YYYY-MM-DD strings sort correctly as text. Reversing the comparison puts the
  // newest post first without converting every date to a Date object.
  return posts.sort((a, b) => b.date.localeCompare(a.date));
});

// Slugs come from the dynamic URL segment. Returning undefined lets the route
// decide whether to show Next.js's 404 page.
export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllBlogPosts();
  return posts.find((post) => post.slug === slug);
}

export function formatBlogDate(date: string): string {
  // Treat a date-only value as UTC. This prevents a post dated November 8 from
  // appearing as November 7 for visitors in time zones west of UTC.
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
