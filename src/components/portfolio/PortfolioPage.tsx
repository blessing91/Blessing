'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import CTASection from '@/components/shared/CTASection';
import PageHeader from '@/components/shared/PageHeader';

// Types for portfolio items
interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  results: string[];
  image: string;
  featured?: boolean;
}

// Portfolio Filter component
interface PortfolioFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  filters: string[];
}

const PortfolioFilters = ({ activeFilter, setActiveFilter, filters }: PortfolioFiltersProps) => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-5 py-2 border text-sm font-medium transition-all duration-300 ${
            activeFilter === filter
              ? 'bg-primary-orange text-white border-primary-orange'
              : 'bg-white text-gray-700 border-gray-200 hover:border-primary-orange hover:text-primary-orange'
          }`}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </motion.div>
  );
};

// Portfolio Item Card component
interface PortfolioCardProps {
  project: PortfolioItem;
  index: number;
}

const PortfolioCard = ({ project, index }: PortfolioCardProps) => {
  return (
    <motion.div
      className="bg-white border border-gray-100 overflow-hidden transition-all duration-300 hover:border-gray-200 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        {/* Use actual image when available, placeholder for development */}
        {project.image && project.image.startsWith('/images') ? (
          <Image
            src="/images/placeholder.webp"
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="text-3xl mb-2">📊</div>
              <div className="text-sm font-medium text-gray-500">{project.category}</div>
            </div>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className="bg-white text-primary-orange px-3 py-1 text-xs font-medium">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-charcoal mb-3 group-hover:text-primary-orange transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="mb-4">
          <h4 className="font-medium text-charcoal mb-2 text-sm">Key Results:</h4>
          <ul className="space-y-1">
            {project.results.slice(0, 3).map((result, idx) => (
              <li key={idx} className="flex items-start text-sm">
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
                <span className="text-gray-700">{result}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={`/portfolio/${project.id}`}
          className="inline-flex items-center text-primary-orange text-sm font-medium transition-colors duration-300 group-hover:text-deep-orange"
        >
          View Case Study
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

// Portfolio grid component
interface PortfolioGridProps {
  filter: string;
  projects: PortfolioItem[];
}

const PortfolioGrid = ({ filter, projects }: PortfolioGridProps) => {
  const filteredProjects =
    filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project, index) => (
        <PortfolioCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

// Portfolio Intro Section
const PortfolioIntro = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
            Impactful Results for Global Brands
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I&apos;ve helped over 50 businesses across the US, UK, Ghana, and Nigeria achieve
            significant growth through strategic digital marketing. Below are some highlights of my
            showcasing the diverse range of industries and solutions I&apos;ve provided.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

// Stats Section
const StatsSection = () => {
  const stats = [
    {
      value: '50+',
      label: 'Global Clients',
    },
    {
      value: '30M+',
      label: 'Content Views',
    },
    {
      value: '1M+',
      label: 'Customer Acquisitions',
    },
    {
      value: '$5M+',
      label: 'Revenue Generated',
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-10 max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-teal text-sm font-medium tracking-widest uppercase">Results</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mt-3 mb-5">
            Impact by the Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            These metrics demonstrate the tangible impact of my strategic approach to digital
            marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 border border-gray-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-serif font-bold text-primary-orange mb-2">
                {stat.value}
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Case Study Section
const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: 'How We Achieved 200% Growth for a SaaS Startup',
      description:
        'An in-depth look at our strategy that helped a B2B SaaS company triple their user base in just 12 months through targeted content marketing and lead generation campaigns.',
      image: '/images/case-study-1.jpg',
    },
    {
      title: 'Creating Viral Content That Converts',
      description:
        'Discover how we developed a viral content strategy for a consumer brand that not only generated millions of views but also drove a 150% increase in sales.',
      image: '/images/case-study-2.jpg',
    },
    {
      title: 'Scaling Global: Cross-Cultural Marketing Success',
      description:
        'A comprehensive case study on how we helped a Nigerian brand expand into UK and US markets while maintaining brand consistency and addressing cultural nuances.',
      image: '/images/case-study-3.jpg',
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-teal text-sm font-medium tracking-widest uppercase">Featured</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mt-3 mb-5">
            Featured Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Dive deeper into some of our most successful campaigns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 overflow-hidden group border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden h-48">
                <Image
                  src="/images/placeholder.webp"
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3 group-hover:text-primary-orange transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{study.description}</p>
                <button className="text-primary-orange font-medium text-sm flex items-center group-hover:text-deep-orange transition-colors duration-300">
                  Read Case Study
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Client Logos Section
const ClientLogos = () => {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-10 max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-teal text-sm font-medium tracking-widest uppercase">Clients</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mt-3 mb-5">
            Trusted by Brands Across the Globe
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Partnering with businesses of all sizes to achieve transformative digital marketing
            results.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <motion.div
              key={num}
              className="flex items-center justify-center bg-white p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: num * 0.05 }}
            >
              <div className="text-center text-gray-400">
                <div className="bg-gray-100 h-12 w-full flex items-center justify-center">
                  <span className="text-sm">Client Logo {num}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Portfolio Page Component
export default function PortfolioPage() {
  // Sample portfolio data
  const portfolioProjects: PortfolioItem[] = [
    {
      id: 1,
      title: 'E-commerce Growth Strategy',
      category: 'Ad Campaigns',
      image: '/images/portfolio-1.jpg',
      description:
        'Comprehensive digital marketing strategy for a fashion e-commerce brand focusing on customer acquisition and retention.',
      results: [
        'Increased online sales by 120% within 6 months',
        'Reduced customer acquisition cost by 32%',
        'Grew email subscription list by 10,000+ qualified leads',
      ],
      featured: true,
    },
    {
      id: 2,
      title: 'B2B SaaS Lead Generation',
      category: 'Social Media',
      image: '/images/portfolio-2.jpg',
      description:
        'Content strategy and LinkedIn campaign for a B2B software company targeting enterprise clients.',
      results: [
        'Generated 200+ qualified leads within 3 months',
        'Achieved 300% ROI on marketing spend',
        'Increased demo requests by 85%',
      ],
    },
    {
      id: 3,
      title: 'Viral TikTok Campaign',
      category: 'Viral Content',
      image: '/images/portfolio-3.jpg',
      description:
        'Created a series of trending TikTok videos for a consumer product brand to increase brand awareness.',
      results: [
        '5 videos with 1M+ views each',
        '200% increase in social media following',
        '150% boost in website traffic from social media',
      ],
      featured: true,
    },
    {
      id: 4,
      title: 'Beauty Brand Launch',
      category: 'Brand Identity',
      image: '/images/portfolio-4.jpg',
      description:
        'Developed brand identity and social media strategy for a new skincare line targeting Gen Z consumers.',
      results: [
        'Successful launch with 50K followers in first month',
        'Featured in 3 major beauty publications',
        'Sold out initial product line within 2 weeks',
      ],
    },
    {
      id: 5,
      title: 'Restaurant Marketing Campaign',
      category: 'Ad Campaigns',
      image: '/images/portfolio-5.jpg',
      description:
        'Local marketing strategy for a restaurant chain to increase foot traffic and online orders.',
      results: [
        '40% increase in online orders',
        '25% growth in in-store visits',
        '65% improvement in customer retention',
      ],
    },
    {
      id: 6,
      title: 'EdTech User Acquisition',
      category: 'Social Media',
      image: '/images/portfolio-6.jpg',
      description:
        'Social media and content marketing for an educational technology platform to increase subscriptions.',
      results: [
        '30% increase in subscription base across platforms',
        '50% boost in engagement rates',
        '40% increase in positive user reviews',
      ],
    },
    {
      id: 7,
      title: 'Instagram Reels Strategy',
      category: 'Viral Content',
      image: '/images/portfolio-7.jpg',
      description:
        'Developed a playbook for Instagram Reels content that consistently achieved viral reach for a lifestyle brand.',
      results: [
        'Multiple Reels with 500K+ views',
        '175% increase in profile visits',
        '130% growth in follower count in 3 months',
      ],
    },
    {
      id: 8,
      title: 'Health & Wellness Rebrand',
      category: 'Brand Identity',
      image: '/images/portfolio-8.jpg',
      description:
        'Complete rebranding for a health supplement company including visual identity and messaging strategy.',
      results: [
        '45% increase in brand recognition in market surveys',
        '60% growth in online engagement',
        '35% boost in direct-to-consumer sales',
      ],
    },
    {
      id: 9,
      title: 'Fashion Influencer Campaign',
      category: 'Ad Campaigns',
      image: '/images/portfolio-9.jpg',
      description:
        "Coordinated multi-influencer campaign for a fashion retailer's seasonal collection launch.",
      results: [
        'Campaign reached 2M+ combined audience',
        '95% increase in collection sales compared to previous season',
        '70% higher engagement than traditional advertising',
      ],
    },
  ];

  const filters = ['All', 'Social Media', 'Viral Content', 'Ad Campaigns', 'Brand Identity'];
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <>
      <Navbar />
      <PageHeader
        tag="Portfolio"
        title="My Portfolio"
        subtitle="Showcasing successful digital marketing campaigns and results"
      />
      <PortfolioIntro />
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          <PortfolioFilters
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            filters={filters}
          />
          <PortfolioGrid filter={activeFilter} projects={portfolioProjects} />
        </div>
      </div>
      <StatsSection />
      <CaseStudiesSection />
      <ClientLogos />
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
