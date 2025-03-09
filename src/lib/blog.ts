// src/lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

// Update the path to use src/content/blog
const blogDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  featured?: boolean;
  categories: string[];
  tags: string[];
  image: string;
  content: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}

export function getBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(blogDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        author: data.author,
        featured: data.featured || false,
        categories: data.categories || [],
        tags: data.tags || [],
        image: data.image,
        content,
        readingTime: readingTime(content),
      } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      author: data.author,
      featured: data.featured || false,
      categories: data.categories || [],
      tags: data.tags || [],
      image: data.image,
      content,
      readingTime: readingTime(content),
    } as BlogPost;
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const allPosts = getBlogPosts();
  const currentPost = getBlogPost(currentSlug);

  if (!currentPost) return [];

  return allPosts
    .filter((post) => post.slug !== currentSlug)
    .sort((a, b) => {
      // Prioritize posts with matching categories or tags
      const aMatchCategories = a.categories.filter((cat) =>
        currentPost.categories.includes(cat)
      ).length;
      const bMatchCategories = b.categories.filter((cat) =>
        currentPost.categories.includes(cat)
      ).length;

      const aMatchTags = a.tags.filter((tag) => currentPost.tags.includes(tag)).length;
      const bMatchTags = b.tags.filter((tag) => currentPost.tags.includes(tag)).length;

      return bMatchCategories + bMatchTags - (aMatchCategories + aMatchTags);
    })
    .slice(0, limit);
}
