// src/components/blog/RelatedArticlesCTA.tsx
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog';

interface RelatedArticlesCTAProps {
  articles: BlogPost[];
  title?: string;
}

export default function RelatedArticlesCTA({
  articles,
  title = 'You might also like',
}: RelatedArticlesCTAProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="bg-gray-50 p-6 md:p-8 my-8 rounded-sm">
      <h3 className="text-xl font-serif font-bold text-charcoal mb-6">{title}</h3>

      <div className="grid grid-cols-1 gap-6">
        {articles.slice(0, 3).map((article) => (
          <div key={article.slug} className="flex gap-4">
            <div className="w-24 h-24 flex-shrink-0 relative">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <div>
              <h4 className="font-medium text-charcoal mb-1 line-clamp-2">
                <Link
                  href={`/blog/${article.slug}`}
                  className="hover:text-primary-orange transition-colors duration-300"
                >
                  {article.title}
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-2">{article.readingTime.text}</p>
              <Link
                href={`/blog/${article.slug}`}
                className="text-primary-orange text-sm font-medium hover:text-deep-orange transition-colors duration-300"
              >
                Read article →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
