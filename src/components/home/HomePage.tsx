'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import CTASection from '@/components/shared/CTASection';
import TestimonialCarousel from '@/components/testimonial/TestimonialCarousel';
// Hero Section with three-word headline approach
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle patterned background */}
      <div className="absolute inset-0 bg-gray-50 z-0 opacity-50">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F3F4F6" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Very subtle animated elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-soft-apricot"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-soft-apricot"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-10 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-7xl mx-auto">
          <motion.div
            className="md:w-3/5 md:pr-16 text-charcoal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="space-y-3 mb-8">
              {/* Three-word headline approach */}
              {['Strategic', 'Data-Driven', 'Transformative'].map((word, index) => (
                <motion.h1
                  key={index}
                  className="text-4xl md:text-6xl font-serif font-bold text-charcoal"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
                >
                  {word}
                </motion.h1>
              ))}
            </motion.div>
            <motion.p
              className="text-lg md:text-xl mb-10 leading-relaxed font-light text-gray-700 max-w-lg"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              With over 10 years in Digital Marketing, I create data-driven strategies that
              transform brands, drive customer acquisition, and generate measurable ROI.
            </motion.p>
            <motion.div
              className="flex space-x-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <Link
                href="/contact"
                className="group relative overflow-hidden bg-primary-orange text-white px-8 py-3 rounded-md font-medium text-base hover:bg-deep-orange transition-all duration-300"
              >
                <span className="relative z-10">Let&apos;s Talk</span>
              </Link>
              <Link
                href="/portfolio"
                className="group relative overflow-hidden border border-gray-300 bg-transparent text-charcoal px-8 py-3 rounded-md font-medium text-base transition-all duration-300 hover:border-primary-orange hover:text-primary-orange"
              >
                <span className="relative z-10">View My Work</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-2/5 mt-16 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative max-w-xs mx-auto md:max-w-sm">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-soft-apricot to-white blur-lg opacity-30"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-square w-full relative">
                  <Image
                    src="/images/headshot.jpg"
                    alt="Blessing Adenekan"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 flex flex-col items-center"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs mb-1 font-light">Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </div>
  );
};

// Stats Section
const Stats = () => {
  const stats = [
    { value: '50+', label: 'Global Clients' },
    { value: '1M+', label: 'Customer Acquisitions' },
    { value: '$5M+', label: 'Revenue Generated' },
    { value: '95%', label: 'Client Retention' },
  ];

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 relative z-10 max-w-6xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-5">
            Impact by the Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            These results speak for themselves. Each number tells a story of transformation that
            could be yours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 transition-all duration-300 border-b-2 border-gray-100 hover:border-primary-orange"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-2">
                <span className="text-primary-orange">{stat.value}</span>
              </div>
              <div className="text-base text-gray-600 font-medium tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Services Section
const Services = () => {
  const services = [
    {
      title: 'Social Media Management',
      description:
        "Strategic content creation and community management that turns casual scrollers into devoted followers who can't get enough of your brand.",
      icon: '✨',
    },
    {
      title: 'Sponsored Ads',
      description:
        'Data-driven ad campaigns that target your ideal audience with precision, driving customer acquisition and revenue growth.',
      icon: '📈',
    },
    {
      title: 'Graphics Design',
      description:
        'Eye-catching visuals that stop thumbs in their tracks, creating those moments that burn your brand into memory.',
      icon: '🎨',
    },
    {
      title: 'Copywriting',
      description:
        'Words that persuade and convert with power, turning casual browsers into passionate brand advocates who spread the word.',
      icon: '✍️',
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-teal font-medium text-sm tracking-widest uppercase">Services</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mt-3 mb-5">
            Services That Transform Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Discover the strategies I use to elevate brands from forgettable to absolutely
            unforgettable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 border border-gray-100 transition-all duration-300 hover:border-gray-200 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold text-charcoal mb-3 group-hover:text-primary-orange transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>
              <Link
                href="/services"
                className="inline-flex items-center text-sm text-primary-orange font-medium transition-colors duration-300"
              >
                Learn more
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Featured Projects Section
const FeaturedProjects = () => {
  const projects = [
    {
      title: 'E-commerce Growth Strategy',
      category: 'Social Media',
      result: '120% sales increase',
    },
    {
      title: 'SaaS Product Launch',
      category: 'Sponsored Ads',
      result: '200% lead generation',
    },
    {
      title: 'Fashion Brand Rebranding',
      category: 'Brand Identity',
      result: '50K followers in 1 month',
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-teal font-medium text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mt-3 mb-5">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            See the transformations I&apos;ve created for brands who dared to dream bigger.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-100 group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <div className="w-full h-full bg-gray-100"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="bg-white text-primary-orange text-xs py-1 px-3 font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-medium text-white mt-2">{project.title}</h3>
                  <div className="flex items-center mt-2">
                    <div className="text-white text-sm opacity-90">{project.result}</div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-600 text-sm mb-4">
                  A strategic approach to driving growth through targeted content and community
                  engagement.
                </p>
                <Link
                  href="/portfolio"
                  className="text-primary-orange text-sm font-medium inline-flex items-center"
                >
                  View Details
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
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Link
            href="/portfolio"
            className="border border-gray-300 text-charcoal hover:text-primary-orange hover:border-primary-orange px-8 py-3 font-medium transition-all duration-300 inline-flex items-center"
          >
            <span>View Full Portfolio</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
        </motion.div>
      </div>
    </div>
  );
};

// Main HomePage Component
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <FeaturedProjects />
      <TestimonialCarousel />
      <CTASection
        title={`Ready to Elevate Your Digital Presence?`}
        description={`Let's create a strategy that drives real results for your brand. I'll help you connect with your audience, build engagement, and achieve measurable growth.`}
        primaryButtonText="Let's Talk"
        primaryButtonLink="/contact"
        secondaryButtonText="View My Services"
        secondaryButtonLink="/services"
      />
      <Footer />
    </>
  );
}
