// app/blog/page.tsx
import { getBlogPosts } from '@/lib/blog';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import PageHeader from '@/components/shared/PageHeader';
import BlogCard from '@/components/blog/BlogCard';
import CTASection from '@/components/shared/CTASection';

export const metadata = {
  title: 'Blog | Blessing Adenekan',
  description: 'Insights and strategies for effective digital marketing from Blessing Adenekan.',
};

export default async function BlogPage() {
  const allPosts = getBlogPosts();
  const featuredPost = allPosts.find((post) => post.featured);
  const regularPosts = allPosts.filter((post) => !post.featured);

  return (
    <>
      <Navbar />
      <PageHeader
        tag="Blog"
        title="Insights & Inspiration"
        subtitle="Discover actionable digital marketing strategies and insights to stay ahead of the competition"
      />

      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          {featuredPost && (
            <div className="mb-16">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-8">Featured Post</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="md:col-span-3 relative aspect-[16/9] md:aspect-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col justify-center">
                  <div className="mb-2 flex items-center text-sm text-gray-500">
                    <span>
                      {new Date(featuredPost.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{featuredPost.readingTime.text}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
                  <a
                    href={`/blog/${featuredPost.slug}`}
                    className="text-primary-orange font-medium inline-flex items-center hover:text-deep-orange transition-colors duration-300"
                  >
                    Read Full Article
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-8">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTASection
        title="Want to discuss your digital marketing strategy?"
        description="Let's create a customized plan to help your brand stand out and achieve measurable results."
        primaryButtonText="Contact Me"
        primaryButtonLink="/contact"
      />
      <Footer />
    </>
  );
}
