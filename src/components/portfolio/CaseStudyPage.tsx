'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import CTASection from '@/components/shared/CTASection';

interface CaseStudyPageProps {
  id: string;
}

export default function CaseStudyPage({ id }: CaseStudyPageProps) {
  // In a real implementation, fetch the case study data based on the ID
  // For now, we'll use mock data
  const caseStudy = {
    id: parseInt(id),
    title: 'E-commerce Growth Strategy for Fashion Brand',
    category: 'Ad Campaigns',
    clientType: 'Fashion E-commerce',
    duration: '6 months',
    year: '2023',
    challenge:
      "The client, a mid-sized fashion e-commerce brand, was struggling with high customer acquisition costs and low conversion rates. They had a decent social media following but weren't effectively converting that audience into paying customers. Additionally, their email marketing efforts were yielding diminishing returns, and they needed a comprehensive strategy to revitalize their digital presence.",
    approach: [
      'Conducted a thorough audit of existing marketing channels and customer journey',
      'Developed a multi-channel strategy focusing on personalized retargeting',
      'Created shoppable social media content to reduce friction in the purchase process',
      'Implemented an abandoned cart recovery system with personalized incentives',
      'Redesigned email marketing campaigns with segmentation based on purchase behavior',
    ],
    solution:
      'We developed a comprehensive growth strategy centered around three key areas: content personalization, streamlined customer journey, and data-driven optimization. By implementing dynamic product recommendations based on browsing behavior and creating segmented advertising campaigns targeting specific customer personas, we were able to significantly improve conversion rates. The redesigned email marketing strategy incorporated visual storytelling and behavioral triggers, while the optimized checkout process reduced cart abandonment by 35%.',
    results: [
      'Increased online sales by 120% within 6 months',
      'Reduced customer acquisition cost by 32%',
      'Grew email subscription list by 10,000+ qualified leads',
      'Improved average order value by 24%',
      'Boosted customer retention rate from 28% to 45%',
    ],
    testimonial: {
      quote:
        "Working with Blessing transformed our e-commerce performance beyond what we thought possible. The strategic approach and data-driven decisions yielded immediate improvements, and her team's consistent optimization has created sustainable growth for our brand.",
      author: 'Sarah Chen',
      position: 'Marketing Director',
    },
    images: ['/images/placeholder.webp', '/images/placeholder.webp', '/images/placeholder.webp'],
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-white pt-32 pb-16">
        <div className="container mx-auto px-6 md:px-10 max-w-5xl">
          <div className="mb-6">
            <Link
              href="/portfolio"
              className="text-primary-orange font-medium text-sm flex items-center mb-6 hover:text-deep-orange transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
              Back to Portfolio
            </Link>
            <motion.h1
              className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {caseStudy.title}
            </motion.h1>
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="bg-gray-100 text-charcoal px-4 py-1 text-sm font-medium">
                {caseStudy.category}
              </span>
              <span className="bg-gray-100 text-charcoal px-4 py-1 text-sm font-medium">
                {caseStudy.clientType}
              </span>
              <span className="bg-gray-100 text-charcoal px-4 py-1 text-sm font-medium">
                {caseStudy.duration}
              </span>
              <span className="bg-gray-100 text-charcoal px-4 py-1 text-sm font-medium">
                {caseStudy.year}
              </span>
            </motion.div>
          </div>

          <motion.div
            className="relative w-full aspect-[16/9] rounded-sm overflow-hidden mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src="/images/placeholder.webp"
              alt={caseStudy.title}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="bg-gray-50 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-charcoal mb-4">Challenge</h2>
              <p className="text-gray-700 text-sm leading-relaxed">{caseStudy.challenge}</p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-xl font-semibold text-charcoal mb-4">Approach</h2>
              <ul className="space-y-2">
                {caseStudy.approach.map((item, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-primary-orange mr-2 mt-0.5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">Solution</h2>
            <p className="text-gray-700 leading-relaxed mb-8">{caseStudy.solution}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {caseStudy.images.map((image, index) => (
                <div key={index} className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image}
                    alt={`${caseStudy.title} image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-100 p-6">
                <ul className="space-y-4">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary-orange text-white p-6">
                <svg
                  className="h-8 w-8 text-white mb-4 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg font-light italic mb-6">{caseStudy.testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{caseStudy.testimonial.author}</p>
                  <p className="text-white text-opacity-80 text-sm">
                    {caseStudy.testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="border-t border-gray-200 pt-12 flex justify-between">
            <Link
              href="/portfolio"
              className="text-primary-orange font-medium flex items-center hover:text-deep-orange transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
              Back to Portfolio
            </Link>

            <Link
              href="/contact"
              className="text-primary-orange font-medium flex items-center hover:text-deep-orange transition-colors duration-300"
            >
              Discuss Your Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <CTASection
        title="Ready to Achieve Similar Results?"
        description="Let's discuss how my proven strategies can work for your brand"
        primaryButtonText="Let's Talk"
        primaryButtonLink="/contact"
      />
      <Footer />
    </>
  );
}
