'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import CTASection from '@/components/shared/CTASection';
import PageHeader from '@/components/shared/PageHeader';

// Services Introduction Section
const ServicesIntro = () => {
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
            How I Can Help Your Business
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            As the founder of Star Digital Agency (StarGirl Strategy), I&apos;ve helped over 50
            global businesses drive growth through strategic digital marketing. My data-driven
            approach has generated more than $5M in revenue for clients across various industries.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you&apos;re a new brand looking to build your online presence or an established
            business aiming to optimize your digital strategy, I offer tailored solutions to meet
            your specific needs and goals.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

// Service Card Component
interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
  index: number;
}

const ServiceCard = ({ title, description, features, icon, index }: ServiceCardProps) => {
  return (
    <motion.div
      className="bg-white border border-gray-100 rounded-sm overflow-hidden hover:border-gray-200 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-gray-50 p-6 flex justify-center">
        <div className="text-5xl text-primary-orange">{icon}</div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">{title}</h3>
        <p className="text-gray-700 mb-6 text-sm leading-relaxed">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary-orange mr-2 mt-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// Services Grid Section
const ServicesSection = () => {
  const services = [
    {
      title: 'Social Media Management',
      description:
        "Comprehensive management of your brand's social media presence to increase engagement, followers, and conversions.",
      icon: '🌟',
      features: [
        'Strategic content creation and curation',
        'Community management and engagement',
        'Performance analytics and reporting',
        'Platform-specific strategy optimization',
        'Content calendar development',
        'Trending content adaptation',
      ],
    },
    {
      title: 'Sponsored Ads',
      description:
        'Data-driven advertising campaigns across multiple platforms to drive customer acquisition and revenue growth.',
      icon: '📈',
      features: [
        'Audience targeting and segmentation',
        'Ad creative development and testing',
        'Budget optimization and management',
        'Performance tracking and analytics',
        'A/B testing for maximum ROI',
        'Remarketing strategy implementation',
      ],
    },
    {
      title: 'Graphics Design',
      description:
        "Eye-catching visual content that captures your brand's essence and engages your audience across platforms.",
      icon: '🎨',
      features: [
        'Brand identity and logo design',
        'Social media graphics and templates',
        'Marketing material creation',
        'Infographics and data visualization',
        'Product photography styling',
        'Visual brand guidelines development',
      ],
    },
    {
      title: 'Copywriting',
      description:
        'Compelling content that tells your story, establishes your brand voice, and converts visitors into customers.',
      icon: '✍️',
      features: [
        'Website copy and landing pages',
        'Social media content creation',
        'Email marketing campaigns',
        'Blog articles and thought leadership',
        'Ad copy optimization',
        'Brand messaging and tone development',
      ],
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-teal text-sm font-medium tracking-widest uppercase">Services</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mt-3 mb-6">
            My Service Offerings
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Comprehensive digital marketing solutions tailored to help your brand thrive in
            today&apos;s competitive landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Process Step Component
interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

const ProcessStep = ({ number, title, description, index }: ProcessStepProps) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="md:w-1/4 flex justify-center md:justify-start">
        <div className="bg-gray-50 text-primary-orange w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 md:mb-0">
          {number}
        </div>
      </div>
      <div className="md:w-3/4">
        <h3 className="text-xl font-semibold text-charcoal mb-3">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Working Process Section
const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description:
        'I begin by understanding your business goals, target audience, and current digital presence. Based on this information, I develop a tailored strategy aligned with your objectives.',
    },
    {
      number: '02',
      title: 'Content Creation & Setup',
      description:
        'My team creates high-quality content including graphics, copy, and videos tailored to each platform while ensuring brand consistency across all channels.',
    },
    {
      number: '03',
      title: 'Implementation & Management',
      description:
        'I implement the strategy across selected platforms, manage day-to-day operations, engage with your audience, and adapt the approach based on real-time performance.',
    },
    {
      number: '04',
      title: 'Analysis & Optimization',
      description:
        "Through constant monitoring and detailed analytics, I identify what's working and what needs improvement, making data-driven adjustments to optimize performance.",
    },
    {
      number: '05',
      title: 'Reporting & Growth Planning',
      description:
        "You'll receive regular reports on key metrics and performance insights, along with strategic recommendations for continued growth and improvement.",
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10 max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-teal text-sm font-medium tracking-widest uppercase">Process</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mt-3 mb-6">
            My Working Process
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            A systematic approach that ensures consistent results for every project.
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Industry Experience Section
const IndustryExperience = () => {
  const industries = [
    'Software & SaaS',
    'E-commerce',
    'Education',
    'Fashion & Retail',
    'Professional Services',
    'Health & Wellness',
    'Food & Beverage',
    'Technology',
  ];

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-10 max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-teal text-sm font-medium tracking-widest uppercase">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mt-3 mb-6">
            Industry Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            I&apos;ve worked with clients across diverse industries, developing specialized
            strategies tailored to each sector&apos;s unique challenges and opportunities.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {industries.map((industry, index) => (
            <motion.span
              key={index}
              className="bg-white border border-gray-200 text-gray-800 px-6 py-3 font-medium"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Testimonial Card Component
interface TestimonialProps {
  text: string;
  name: string;
  position: string;
  index: number;
}

const TestimonialCard = ({ text, name, position, index }: TestimonialProps) => {
  return (
    <motion.div
      className="bg-white p-8 border border-gray-100 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <svg
        className="h-8 w-8 text-primary-orange mb-6 opacity-50"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-gray-700 mb-6 text-sm leading-relaxed italic">&ldquo;{text}&rdquo;</p>
      <div>
        <p className="font-semibold text-charcoal">{name}</p>
        <p className="text-gray-600 text-sm">{position}</p>
      </div>
    </motion.div>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Blessing's strategic approach to our social media completely transformed our online presence. Within just three months, we saw a 200% increase in engagement and a significant boost in qualified leads.",
      name: 'Sarah Johnson',
      position: 'Marketing Director, TechSolutions Inc.',
    },
    {
      text: "Working with StarGirl Strategy was a game-changer for our brand. Blessing's team created content that consistently went viral, growing our following from 5K to over 50K in less than a year.",
      name: 'David Chen',
      position: 'Founder, Lifestyle Brand',
    },
    {
      text: "Our ROI on digital marketing has never been better. Blessing's data-driven approach to our ad campaigns reduced our cost per acquisition by 40% while increasing conversions by 75%.",
      name: 'Jennifer Morris',
      position: 'CEO, E-commerce Startup',
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
          <span className="text-teal text-sm font-medium tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mt-3 mb-6">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Hear from clients who have experienced transformative results through my services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              position={testimonial.position}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// FAQ Component
interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  return (
    <motion.div
      className="bg-white p-8 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="text-xl font-semibold text-charcoal mb-4">{question}</h3>
      <p className="text-gray-700 text-sm leading-relaxed">{answer}</p>
    </motion.div>
  );
};

// FAQ Section
const FAQSection = () => {
  const faqs = [
    {
      question: 'What sets your social media services apart from others?',
      answer:
        "My approach is data-driven and results-focused. I don't just create content; I develop strategies tailored to your specific business goals, whether that's increasing brand awareness, driving website traffic, or generating leads. With expertise in viral content creation and a track record of 30M+ views across campaigns, I bring proven methods for maximizing engagement and ROI.",
    },
    {
      question: 'How long does it take to see results from your services?',
      answer:
        'While initial improvements in engagement and content quality can be seen within weeks, meaningful business results typically begin to emerge within 2-3 months. Social media success requires consistency and optimization over time. I provide monthly analytics reports to track progress and make strategic adjustments to accelerate results.',
    },
    {
      question: 'Do you work with international clients?',
      answer:
        "Absolutely! I've successfully worked with clients across the US, UK, Ghana, and Nigeria. My experience with global markets allows me to navigate cultural nuances and regional preferences while maintaining a cohesive brand message. Remote collaboration is seamless through my established workflow systems.",
    },
    {
      question: 'What platforms do you specialize in?',
      answer:
        'I specialize in the major social platforms including Instagram, TikTok, Facebook, LinkedIn, and Twitter. My particular strength is in short-form video content for TikTok and Instagram Reels, which has generated viral reach for many clients. The platforms we focus on will depend on your specific business goals and where your target audience is most active.',
    },
    {
      question: 'How do you measure the success of your marketing efforts?',
      answer:
        'Success measurement is customized to your business objectives. Beyond engagement metrics, I track conversions, lead generation, website traffic, and ROI. Regular reporting provides transparent insights into performance, and all campaigns include clearly defined KPIs aligned with your business goals.',
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-10 max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-teal text-sm font-medium tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mt-3 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Answers to common questions about my services and approach.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main ServicesPage Component
export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        tag="Services"
        title="My Services"
        subtitle="Comprehensive digital marketing solutions to help your brand thrive"
      />
      <ServicesIntro />
      <ServicesSection />
      <ProcessSection />
      <IndustryExperience />
      <TestimonialsSection />
      <FAQSection />
      <CTASection
        title="Ready to Transform Your Digital Presence?"
        description="Let's create a customized strategy to help your brand stand out and drive real results."
        primaryButtonText="Get in Touch Today"
        primaryButtonLink="/contact"
      />
      <Footer />
    </>
  );
}
