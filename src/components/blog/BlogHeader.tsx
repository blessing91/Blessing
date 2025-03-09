import { BlogPost } from '@/lib/blog';
import { formatDate } from '@/lib/utils';

interface BlogHeaderProps {
  post: BlogPost;
}

export default function BlogHeader({ post }: BlogHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3 mb-4">
        {post.categories.map((category, idx) => (
          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 text-sm">
            {category}
          </span>
        ))}
      </div>
      <h1 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-6">{post.title}</h1>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-primary-orange font-medium text-sm mr-4">
          BA
        </div>
        <div>
          <p className="font-medium text-charcoal">{post.author}</p>
          <div className="flex text-sm text-gray-500">
            <span>{formatDate(post.date)}</span>
            <span className="mx-2">•</span>
            <span>{post.readingTime.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
