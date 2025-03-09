'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import PageHeader from '@/components/shared/PageHeader';
import CTASection from '@/components/shared/CTASection';

// Contact Info Item Component
interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  index: number;
}

const ContactInfoItem = ({ icon, title, value, href, index }: ContactInfoItemProps) => {
  const content = (
    <div className="flex items-start">
      <div className="bg-soft-apricot p-3 rounded-full mr-4 text-primary-orange">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold text-charcoal">{title}</h4>
        <p className="text-gray-700">{value}</p>
      </div>
    </div>
  );

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {href ? (
        <a href={href} className="block" target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
};

// Contact Link Button Component
interface ContactLinkButtonProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  index: number;
}

const ContactLinkButton = ({
  icon,
  text,
  href,
  bgColor = 'bg-white',
  textColor = 'text-charcoal',
  hoverBgColor = 'hover:bg-gray-50',
  index,
}: ContactLinkButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className="mb-5"
    >
      <a
        href={href}
        className={`flex items-center justify-between px-8 py-5 border border-soft-apricot/50 rounded-full ${bgColor} ${textColor} ${hoverBgColor} transition-colors duration-300 shadow-sm`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center">
          <span className="mr-4">{icon}</span>
          <span className="text-lg font-medium">{text}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </motion.div>
  );
};

// Business Hours Component
const BusinessHours = () => {
  const hours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM (WAT)' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM (WAT)' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <motion.div
      className="p-6 border-t border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h3 className="text-xl font-semibold text-charcoal mb-4">Business Hours</h3>
      <ul className="space-y-2">
        {hours.map((item, index) => (
          <li key={index} className="flex justify-between items-center text-gray-700 text-sm">
            <span className="font-medium">{item.day}:</span>
            <span>{item.hours}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// Connect With Me Component
const ConnectWithMe = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
        </svg>
      ),
      bgColor: 'bg-blue-600',
      textColor: 'text-white',
    },
    {
      name: 'Twitter',
      url: '#',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
        </svg>
      ),
      bgColor: 'bg-blue-400',
      textColor: 'text-white',
    },
    {
      name: 'Instagram',
      url: '#',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
        </svg>
      ),
      bgColor: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500',
      textColor: 'text-white',
    },
  ];

  return (
    <motion.div
      className="mt-8 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h3 className="text-xl font-semibold text-charcoal mb-6">Connect With Me</h3>
      <div className="flex space-x-5">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.bgColor} ${social.textColor} p-4 rounded-full hover:opacity-90 transition-opacity duration-300 shadow-sm`}
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

const ContactLink = () => {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information Section */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.2,
            }}
            className="bg-white p-10 rounded-sm shadow-sm border border-gray-100"
          >
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-8">
              Contact Information
            </h2>
            <div className="mb-12">
              <ContactInfoItem
                icon={
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                }
                title="Phone"
                value="+2347039590234"
                href="tel:+2347039590234"
                index={0}
              />

              <ContactInfoItem
                icon={
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
                title="Email"
                value="blessing@stargirlstrategy.com"
                href="mailto:blessing@stargirlstrategy.com"
                index={1}
              />

              <ContactInfoItem
                icon={
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
                title="Location"
                value="Lagos, Nigeria"
                index={2}
              />
            </div>

            <ConnectWithMe />
            <BusinessHours />
          </motion.div>

          {/* Direct Contact Links Section */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.3,
              delay: 0.2,
            }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">Reach Out</h2>
            <p className="text-gray-700 mb-10 leading-relaxed">
              Ready to elevate your digital marketing strategy? Choose your preferred way to connect
              with me. I&apos;ll respond to your inquiry within 24-48 hours.
            </p>

            <div className="space-y-4">
              <ContactLinkButton
                icon={
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
                text="Send a mail"
                href="mailto:blessing@stargirlstrategy.com"
                index={0}
              />

              <ContactLinkButton
                icon={
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                }
                text="Call Us"
                href="tel:+2347039590234"
                index={1}
              />

              <ContactLinkButton
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                }
                text="Chat on Whatsapp"
                href="https://wa.me/2347039590234"
                bgColor="bg-black"
                textColor="text-white"
                hoverBgColor="hover:bg-gray-900"
                index={2}
              />

              <ContactLinkButton
                icon={
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
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                }
                text="Start a Project"
                href="https://stargirlstrategy.com/p/ba3d1d/"
                bgColor="bg-primary-orange"
                textColor="text-white"
                hoverBgColor="hover:bg-deep-orange"
                index={3}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// FAQ Component
const ContactFAQ = () => {
  const faqs = [
    {
      question: 'How soon can we start working together?',
      answer:
        'After our initial consultation, I can typically begin work within 1-2 weeks, depending on current projects and your specific needs. For urgent requests, I offer expedited onboarding options.',
    },
    {
      question: 'What information do you need to provide a quote?',
      answer:
        "To provide an accurate quote, I'll need to understand your business goals, target audience, current digital presence, desired services, and project timeline. This helps me tailor a proposal that addresses your specific needs and objectives.",
    },
    {
      question: 'Do you work with clients outside Nigeria?',
      answer:
        "Absolutely! I've successfully worked with clients across the US, UK, Ghana, and Nigeria. My experience with global markets allows me to navigate cultural nuances while maintaining a cohesive brand message. Remote collaboration is seamless through my established workflow systems.",
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10 max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-teal text-sm font-medium tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mt-3 mb-5">
            Common Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Answers to frequently asked questions about working with me
          </p>
        </motion.div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-sm shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-charcoal mb-3">{faq.question}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main ContactPage Component
export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        tag="Contact"
        title="Get in Touch"
        subtitle="Let's discuss how I can help your business grow through strategic digital marketing"
      />

      <ContactLink />

      <ContactFAQ />

      <CTASection
        title="Let's Create Something Amazing Together"
        description="Ready to transform your digital presence? Let's collaborate on strategies that will help you achieve your business goals."
        primaryButtonText="Start a Project"
        primaryButtonLink="https://stargirlstrategy.com/p/ba3d1d/"
      />

      <Footer />
    </>
  );
}
