'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import CTASection from '@/components/shared/CTASection';
import PageHeader from '../shared/PageHeader';

// About Section Component
const AboutSection = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-6xl mx-auto">
          <motion.div
            className="md:w-2/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-soft-apricot to-white blur-lg opacity-30"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-[4/5] w-full relative">
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

          <motion.div
            className="md:w-3/5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
              Hello, I&apos;m Blessing
            </h2>
            <div className="space-y-6 text-gray-700">
              <p className="leading-relaxed">
                I am an accomplished Digital Marketing Leader with over 10 years of experience,
                working across B2B and B2C sectors, including software, SaaS, and diverse
                industries. As the founder and Chief Digital Officer of Stargirl Strategy, I&apos;ve
                led digital teams in brand management, social media, content strategy, media buying,
                and SEO.
              </p>
              <p className="leading-relaxed">
                My expertise includes crafting and executing data-driven content strategies, product
                marketing, social media advertising, and SEO, Graphics Design and leading a
                marketing team. I&apos;ve helped over 50 global businesses across the US, UK, Ghana,
                and Nigeria drive 1M+ customer acquisitions and generate $5M+ in revenue.
              </p>
              <p className="leading-relaxed">
                I believe in creating strategies that not only capture attention but deliver
                measurable ROI. My approach combines deep data analysis with creative execution to
                create campaigns that resonate with target audiences and drive real business growth.
              </p>
            </div>

            <div className="mt-8 flex items-center space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-orange hover:text-deep-orange transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
              <a
                href="mailto:blessing@stargirlstrategy.com"
                className="text-primary-orange hover:text-deep-orange transition-colors duration-300"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>
              </a>
              <Link
                href="/contact"
                className="bg-primary-orange hover:bg-deep-orange text-white px-6 py-2 text-sm font-medium transition-colors duration-300"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Core Competencies Section
const CoreCompetencies = () => {
  const competencies = [
    {
      title: 'B2B Marketing Strategy',
      description:
        'Expert in creating and executing strategies for complex sales cycles typical of enterprise software and SaaS.',
    },
    {
      title: 'Product Marketing',
      description:
        'Skilled in positioning and promoting SaaS products, driving adoption and user engagement.',
    },
    {
      title: 'Data-Driven Decision Making',
      description: 'Strong ability to analyze data and optimize campaigns for maximum ROI.',
    },
    {
      title: 'Global Marketing',
      description:
        'Proficient in crafting marketing strategies for international markets, addressing cross-cultural nuances.',
    },
    {
      title: 'Leadership',
      description:
        'Experienced in leading and mentoring diverse teams to achieve strategic marketing goals.',
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
          <span className="text-teal text-sm font-medium tracking-widest uppercase">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mt-3 mb-5">
            Core Competencies
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            These specialized skills allow me to deliver exceptional results across different
            industries and markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competencies.map((competency, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-charcoal mb-3 hover:text-primary-orange transition-colors duration-300">
                {competency.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{competency.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-white p-8 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-charcoal mb-6 text-center">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Collect by WeTransfer',
              'Todoist',
              'Asana',
              'Canva',
              'Meta Business Platform',
              'Zoho',
              'Hootsuite',
              'Buffer',
              'Google Ads',
              'Wordpress',
              'Mailchimp',
            ].map((tool, index) => (
              <span key={index} className="bg-gray-50 text-gray-700 px-4 py-2 text-sm">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Experience Timeline Section
const ExperienceTimeline = () => {
  const experiences = [
    {
      title: 'Founder & Chief Digital Officer',
      company: 'Star Digital Agency (StarGirlStrategy)',
      period: '01/2019 - Present',
      location: 'Lagos, Nigeria',
      achievements: [
        'Founded and spearheading a Social Media agency serving 50+ global businesses across US, UK, Ghana and Nigeria, driving 1M+ customer acquisitions and $5M+ revenue within two years through data-driven strategies and ads across SMB, SaaS, and B2B sectors.',
        'Developed a playbook for viral short-form video content, enabling clients to produce TikTok and Instagram Reels reaching 1M+ viewers, resulting in 200% growth in social media followings and 150% increase in organic engagement rates.',
        'Implemented scalable workflows and project management tools, increasing operational efficiency by 40% and maintaining a 95% client retention rate across US, UK, Ghana and Nigerian markets.',
      ],
    },
    {
      title: 'Community Manager',
      company: '360 Creative Innovation Hub',
      period: '07/2018 - 12/2018',
      location: 'Lagos, Nigeria',
      achievements: [
        'Spearheaded community growth strategies for a fashion-focused innovation hub, resulting in a 30% increase in online community size across Instagram, blog, and email channels within 6 months.',
        'Developed and executed a content calendar featuring daily posts, weekly blog articles, and bi-weekly newsletters, increasing overall engagement rate from 2% to 5% and driving a 40% boost in website traffic.',
        'Implemented a targeted Instagram strategy, creating visually stunning fashion-centric content that increased follower count by 5,000 and improved average post engagement by 150%.',
      ],
    },
    {
      title: 'Digital Media Lead',
      company: 'Pass.NG(Edtech Startup)',
      period: '07/2017 - 05/2018',
      location: 'Lagos, Nigeria',
      achievements: [
        'Developed and executed comprehensive marketing strategy for an EdTech SaaS platform, increasing subscription base by 30% across app, desktop, and web platforms within 11 months.',
        'Implemented data-driven marketing initiatives, boosting engagement rates by 50% across targeted media channels and increasing positive user reviews by 40%.',
        'Led a cross-functional team of content creators, graphic designers and customer success specialists, aligning marketing efforts with product development to drive a 25% improvement in user satisfaction.',
      ],
    },
    {
      title: 'Digital Marketing Specialist',
      company: 'MasterCare Laundry',
      period: '12/2016 - 06/2017',
      location: 'Lagos, Nigeria',
      achievements: [
        'Implemented multi-channel digital marketing campaigns, increasing online lead generation by 40% and contributing to a 25% growth in offline sales.',
        'Enhanced brand visibility through strategic social media management and SEO optimization, resulting in a 50% increase in organic search traffic and 30% growth in social media followers.',
        'Developed diverse content including blog posts, infographics, and social media visuals, improving engagement rates by 35% across all platforms.',
      ],
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
          <span className="text-teal text-sm font-medium tracking-widest uppercase">Career</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mt-3 mb-5">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            A timeline of my career journey and key achievements.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-gray-100 pl-6 md:pl-8 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary-orange"></div>

              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal">{experience.title}</h3>
                  <p className="text-primary-orange font-medium">{experience.company}</p>
                </div>
                <div className="text-gray-500 text-sm mt-2 md:mt-0 md:text-right">
                  <p>{experience.period}</p>
                  <p>{experience.location}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {experience.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="text-gray-600 text-sm leading-relaxed flex">
                    <span className="text-primary-orange mr-2">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Education & Achievements Section
const EducationAndAchievements = () => {
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
          <span className="text-teal text-sm font-medium tracking-widest uppercase">
            Background
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mt-3 mb-5">
            Education & Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            My academic background and professional recognition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="bg-white p-8 border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-charcoal mb-6">Education</h3>
            <div className="mb-8">
              <p className="font-medium text-charcoal">Bachelor of Science in Computer Science</p>
              <p className="text-primary-orange">Tai Solarin University of Education</p>
              <p className="text-gray-600 text-sm">2010 - 2014 | Ogun State, Nigeria</p>
            </div>

            <h3 className="text-xl font-semibold text-charcoal mb-4">Additional Courses</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-medium text-charcoal">ProductDive Product Management Course</p>
                <p className="text-gray-600 text-sm">2020</p>
              </li>
              <li>
                <p className="font-medium text-charcoal">Rise Digital Marketing Bootcamp</p>
                <p className="text-gray-600 text-sm">2016</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-8 border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-charcoal mb-6">Achievements</h3>
            <ul className="space-y-6">
              <li className="flex">
                <span className="text-primary-orange mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-charcoal">2021 Facebook Aspiring Digital Leader</p>
                  <p className="text-gray-600 text-sm">
                    Recognized by Facebook for exceptional digital marketing leadership
                  </p>
                </div>
              </li>
              <li className="flex">
                <span className="text-primary-orange mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-charcoal">
                    50+ International Viral Content Campaigns
                  </p>
                  <p className="text-gray-600 text-sm">With 30M+ total views across platforms</p>
                </div>
              </li>
              <li className="flex">
                <span className="text-primary-orange mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-charcoal">95% Client Retention Rate</p>
                  <p className="text-gray-600 text-sm">
                    Across international markets in the US, UK, Ghana, and Nigeria
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Languages</h3>
              <div className="flex gap-3">
                <span className="bg-gray-50 text-gray-700 px-4 py-2 text-sm">English</span>
                <span className="bg-gray-50 text-gray-700 px-4 py-2 text-sm">Yoruba</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Main About Page Component
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        tag="About Me"
        title="Experienced Digital Marketing Leader"
        subtitle="With over 10 years of experience in B2B and B2C digital marketing across software, SaaS, and diverse industries."
      />
      <AboutSection />
      <CoreCompetencies />
      <ExperienceTimeline />
      <EducationAndAchievements />
      <CTASection
        title="Let's Work Together"
        description="Ready to elevate your digital marketing strategy? Let's collaborate to create impactful campaigns that drive real results for your business."
        primaryButtonText="Contact Me"
        primaryButtonLink="/contact"
        secondaryButtonText="View My Services"
        secondaryButtonLink="/services"
      />
      <Footer />
    </>
  );
}
