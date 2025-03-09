// src/mdx-components.tsx
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import InlineCTA from '@/components/blog/InlineCTA';
import DownloadCTA from '@/components/blog/DownloadCTA';
import ServiceCTA from '@/components/blog/ServiceCTA';
import ShareableTakeaway from '@/components/blog/ShareableTakeaway';
import NewsletterCTA from '@/components/blog/NewsletterCTA';
import ResourceCTA from '@/components/blog/ResourceCTA';
import ServiceHighlight from '@/components/blog/ServiceHighlight';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-serif font-bold text-charcoal mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-serif font-bold text-charcoal mt-7 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">{children}</h3>
    ),
    p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-6">{children}</p>,
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary-orange hover:text-deep-orange transition-colors duration-300"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">{children}</ol>
    ),
    img: ({ src, alt }) => (
      <div className="my-8">
        <Image src={src || ''} alt={alt || ''} width={800} height={450} className="rounded-sm" />
      </div>
    ),
    TipBox: ({ children }) => (
      <div className="bg-soft-apricot border-l-4 border-primary-orange p-6 mb-6 rounded-sm">
        <div className="font-medium text-deep-orange mb-2">Tip</div>
        <div className="text-gray-700">{children}</div>
      </div>
    ),

    // Add the CTA components
    InlineCTA,
    DownloadCTA,
    ServiceCTA,
    ShareableTakeaway,
    NewsletterCTA,
    ResourceCTA,
    ServiceHighlight,
    ...components,
  };
}
