'use client';
import React, { useState, useEffect } from 'react';

import { services, caseStudies, pricingPlans } from './data';

// Components
const ServiceCard = ({ service, index }) => (
  <div
    className={`bg-white rounded-2xl p-12 transition-all hover:-translate-y-4 hover:shadow-xl group fade-in opacity-0 translate-y-8 duration-700`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className="w-16 h-16 bg-neutral-50 rounded-xl flex items-center justify-center mb-8 transition-colors group-hover:bg-amber-100">
      <div className="text-orange-500">{service.icon}</div>
    </div>

    <h3 className="text-2xl font-serif font-medium mb-4 pb-4 relative after:absolute after:w-10 after:h-0.5 after:bg-neutral-100 after:bottom-0 after:left-0">
      {service.title}
    </h3>
    <p className="text-neutral-600 mb-8">{service.description}</p>

    <a
      href="#"
      className="inline-flex items-center text-orange-500 font-semibold group-hover:text-orange-600 transition-colors"
    >
      Learn More
      <svg
        className="ml-2 transition-transform group-hover:translate-x-1"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </a>
  </div>
);

const CaseStudyCard = ({ study }) => (
  <div
    className="bg-neutral-50 rounded-2xl overflow-hidden shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl fade-in opacity-0 translate-y-8 duration-700"
    style={{ transitionDelay: '200ms' }}
  >
    <div className="h-[300px] relative">
      <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-end p-8 text-white">
        <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
          {study.category} • {study.location}
        </div>
        <h3 className="text-2xl font-serif">{study.title}</h3>
      </div>
    </div>

    <div className="p-8">
      <p className="text-neutral-600 mb-8">{study.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {study.stats.map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-serif font-bold text-orange-500">{stat.value}</div>
            <div className="text-xs uppercase tracking-wider text-neutral-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="inline-block bg-orange-500 text-white px-6 py-3 rounded text-sm font-semibold transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
      >
        View Case Study
      </a>
    </div>
  </div>
);

const PricingCard = ({ plan, index }) => (
  <div
    className={`bg-white rounded-2xl overflow-hidden transition-all hover:shadow-xl fade-in opacity-0 translate-y-8 duration-700 ${
      plan.featured ? 'border-2 border-orange-500 -translate-y-4 shadow-xl relative' : ''
    }`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    {plan.featured && (
      <div className="absolute top-5 right-0 bg-orange-500 text-white text-xs font-semibold py-1 px-4 rounded-l uppercase tracking-wider">
        Most Popular
      </div>
    )}

    <div className="p-8 text-center border-b border-neutral-100">
      <h3 className="text-xl font-medium mb-5">{plan.name}</h3>
      <div className="text-4xl font-serif font-bold mb-2">
        ${plan.price}
        <span className="text-base font-medium text-neutral-500">/month</span>
      </div>
      <p className="text-neutral-500 text-sm">{plan.description}</p>
    </div>

    <div className="p-8">
      <h4 className="text-base font-medium mb-5">What&apos;s included:</h4>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex gap-3 text-neutral-600">
            <div className="w-5 h-5 bg-orange-100 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-orange-500"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#"
        className={`block text-center py-3 rounded text-sm font-semibold transition-all ${
          plan.featured
            ? 'bg-orange-500 text-white hover:bg-orange-600'
            : 'border-2 border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white'
        }`}
      >
        Get Started
      </a>
    </div>
  </div>
);

const StarGirlStrategy = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('All');

  // Handle scrolling effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Add animation classes to elements in viewport
      document.querySelectorAll('.fade-in').forEach((element) => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.9) {
          element.classList.add('opacity-100', 'translate-y-0');
          element.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Run once on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-neutral-800 overflow-x-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'py-4 bg-white shadow-md' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-400 rounded-xl flex items-center justify-center rotate-45 mr-3">
              <span className="-rotate-45 text-white font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-serif font-bold">
              Star<span className="text-orange-500">Girl</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex gap-10">
              <a
                href="#"
                className="text-neutral-800 hover:text-orange-500 font-medium text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all"
              >
                Home
              </a>
              <a
                href="#"
                className="text-neutral-800 hover:text-orange-500 font-medium text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all"
              >
                Services
              </a>
              <a
                href="#"
                className="text-neutral-800 hover:text-orange-500 font-medium text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all"
              >
                Work
              </a>
              <a
                href="#"
                className="text-neutral-800 hover:text-orange-500 font-medium text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all"
              >
                About
              </a>
              <a
                href="#"
                className="text-neutral-800 hover:text-orange-500 font-medium text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all"
              >
                Pricing
              </a>
            </nav>
            <button className="bg-orange-500 text-white px-6 py-3 rounded text-sm font-semibold transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5">
              Free Strategy Session
            </button>
          </div>

          <button className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-neutral-50 relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-orange-500/5 to-amber-400/5 -top-[400px] -right-[200px] z-0"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-orange-500/5 to-amber-400/5 -bottom-[300px] -left-[200px] z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6 fade-in opacity-0 translate-y-8 transition-all duration-700">
                Global Reach.{' '}
                <span className="text-orange-500 relative inline-block after:absolute after:w-full after:h-3 after:bg-amber-200/60 after:bottom-1 after:left-0 after:-z-10">
                  Measurable
                </span>{' '}
                Growth.
              </h1>
              <p className="text-lg text-neutral-600 mb-10 max-w-xl fade-in opacity-0 translate-y-8 transition-all duration-700 delay-100">
                StarGirl Strategy ignites brands across the US, UK, Ghana, and Nigeria with
                data-driven digital strategies that deliver meaningful results. Our international
                team has transformed over 50 global brands.
              </p>

              <div className="flex flex-wrap gap-4 mb-16 fade-in opacity-0 translate-y-8 transition-all duration-700 delay-200">
                <button className="bg-orange-500 text-white px-8 py-4 rounded text-sm font-semibold transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5">
                  Get Your Free Strategy Session
                </button>
                <a
                  href="#"
                  className="border-2 border-neutral-800 text-neutral-800 px-8 py-4 rounded text-sm font-semibold transition-all hover:bg-neutral-800 hover:text-white hover:-translate-y-0.5"
                >
                  Explore Our Work
                </a>
              </div>

              <div className="flex justify-between max-w-xl fade-in opacity-0 translate-y-8 transition-all duration-700 delay-300 metrics">
                <div>
                  <div className="text-4xl font-serif font-bold" data-value="50">
                    50<span className="text-orange-500">+</span>
                  </div>
                  <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                    Global Clients
                  </div>
                </div>

                <div>
                  <div className="text-4xl font-serif font-bold" data-value="5">
                    $5<span className="text-orange-500">M+</span>
                  </div>
                  <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                    Revenue Generated
                  </div>
                </div>

                <div>
                  <div className="text-4xl font-serif font-bold" data-value="1">
                    1<span className="text-orange-500">M+</span>
                  </div>
                  <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                    Customer Acquisitions
                  </div>
                </div>
              </div>
            </div>

            <div className="relative fade-in opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <img
                src="/images/placeholder.jpg"
                alt="Global digital marketing strategy"
                className="w-full rounded-2xl relative z-10 shadow-2xl"
              />
              <div className="absolute w-[80%] h-[80%] bg-gradient-to-r from-orange-500/10 to-amber-400/10 rounded-2xl top-[10%] -left-8 -rotate-6 z-0"></div>
              <div className="absolute w-[80%] h-[80%] bg-gradient-to-r from-orange-500/10 to-amber-400/10 rounded-2xl top-[15%] -right-8 rotate-6 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-sm uppercase tracking-wider text-neutral-500 mb-16 font-medium fade-in opacity-0 translate-y-8 transition-all duration-700">
            Trusted by Leading Brands Worldwide
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center fade-in opacity-0 translate-y-8 transition-all duration-700 delay-100">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="flex justify-center opacity-70 hover:opacity-100 transition-opacity"
              >
                <img src="/images/placeholder.jpg" alt={`Client logo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-neutral-50 relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-orange-500/5 to-amber-400/5 -top-[200px] -right-[200px] z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 fade-in opacity-0 translate-y-8 transition-all duration-700">
            <div className="text-sm uppercase tracking-wider text-orange-500 font-semibold mb-4">
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
              Tailored Digital Strategies for Global Markets
            </h2>
            <p className="text-lg text-neutral-600">
              We combine data-driven tactics with cultural intelligence to create digital marketing
              strategies that resonate across borders and drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in opacity-0 translate-y-8 transition-all duration-700">
            <div className="text-sm uppercase tracking-wider text-orange-500 font-semibold mb-4">
              Success Stories
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
              How We&apos;ve Transformed Global Brands
            </h2>
            <p className="text-lg text-neutral-600">
              Our data-driven approach has delivered exceptional results for clients across diverse
              industries and international markets.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16 fade-in opacity-0 translate-y-8 transition-all duration-700 delay-100">
            {['All', 'Social Media', 'E-commerce', 'B2B', 'Finance', 'Retail'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all ${
                  activeTab === tab
                    ? 'bg-orange-500 text-white'
                    : 'bg-neutral-100 text-neutral-500 hover:bg-orange-100'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-orange-500/10 to-amber-400/10 -top-[500px] -left-[500px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in opacity-0 translate-y-8 transition-all duration-700">
            <div className="text-sm uppercase tracking-wider text-orange-400 font-semibold mb-4">
              Client Testimonials
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
              What Our Global Partners Say
            </h2>
            <p className="text-lg text-neutral-300">
              Don&apos;t take our word for it. Here&apos;s what our clients have to say about
              working with StarGirl Strategy.
            </p>
          </div>

          <div className="max-w-3xl mx-auto fade-in opacity-0 translate-y-8 transition-all duration-700 delay-100">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-12 relative">
              <div className="text-6xl text-orange-500/20 font-serif absolute top-8 left-8">
                &quot;
              </div>
              <p className="text-xl font-light leading-relaxed mb-8 relative z-10">
                StarGirl Strategy transformed our digital presence across three countries. Their
                deep understanding of different markets helped us connect with diverse audiences
                while maintaining our brand identity. The results speak for themselves - our ROI
                increased by 142% within just 6 months.
              </p>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10">
                  <img src="/images/placeholder.jpg" alt="Sarah Johnson" />
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-1">Sarah Johnson</h4>
                  <div className="text-neutral-400 text-sm">CMO, TechGlobal Solutions</div>
                  <div className="flex items-center gap-1 text-orange-400 text-sm mt-1">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>London, UK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-neutral-50 relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-orange-500/5 to-amber-400/5 -bottom-[300px] -right-[300px] z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 fade-in opacity-0 translate-y-8 transition-all duration-700">
            <div className="text-sm uppercase tracking-wider text-orange-500 font-semibold mb-4">
              Transparent Pricing
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
              Flexible Solutions For Global Growth
            </h2>
            <p className="text-lg text-neutral-600">
              Our packages are tailored to deliver measurable results across global markets, with
              pricing structured to provide maximum ROI for your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </div>

          <div className="text-center fade-in opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <p className="text-neutral-600 mb-5 max-w-2xl mx-auto">
              Need a custom solution? Our enterprise packages are tailored to your specific needs
              and market requirements.
            </p>
            <a
              href="#"
              className="inline-block border-2 border-neutral-800 text-neutral-800 px-8 py-4 rounded text-sm font-semibold transition-all hover:bg-neutral-800 hover:text-white hover:-translate-y-0.5"
            >
              Contact For Custom Pricing
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-orange-500/10 to-amber-400/10 -top-[400px] -right-[400px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
                Ready to Transform Your Global Digital Presence?
              </h2>
              <p className="text-lg text-neutral-300 mb-10">
                Get a customized strategy that drives measurable results across international
                markets. Our team of experts is ready to help you expand your brand&apos;s global
                reach.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 text-white px-8 py-4 rounded text-sm font-semibold transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5">
                  Get Your Free Strategy Session
                </button>
                <a
                  href="#"
                  className="border border-white/30 text-white px-8 py-4 rounded text-sm font-semibold transition-all hover:bg-white/10 hover:border-white hover:-translate-y-0.5"
                >
                  View Our Case Studies
                </a>
              </div>
            </div>

            <div className="relative fade-in opacity-0 translate-y-8 transition-all duration-700 delay-100">
              <img
                src="/images/placeholder.jpg"
                alt="Global digital strategy"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-1">
              <a href="#" className="inline-block mb-6 text-2xl font-serif font-bold">
                Star<span className="text-orange-500">Girl</span>
              </a>

              <p className="text-neutral-600 mb-8">
                A premier global digital marketing agency helping brands thrive across the US, UK,
                Ghana, Nigeria and beyond. We combine data-driven strategies with cultural
                intelligence to deliver measurable results.
              </p>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-700 hover:bg-orange-500 hover:text-white hover:-translate-y-1 transition-all"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-700 hover:bg-orange-500 hover:text-white hover:-translate-y-1 transition-all"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-700 hover:bg-orange-500 hover:text-white hover:-translate-y-1 transition-all"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-6 pb-4 border-b border-neutral-100 relative after:absolute after:w-8 after:h-0.5 after:bg-orange-500 after:bottom-[-1px] after:left-0">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-neutral-600 hover:text-orange-500 transition-colors">
                    Social Media Management
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 hover:text-orange-500 transition-colors">
                    Sponsored Ads
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 hover:text-orange-500 transition-colors">
                    Brand & Visual Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 hover:text-orange-500 transition-colors">
                    Strategic Copywriting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 hover:text-orange-500 transition-colors">
                    Digital Experience Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 hover:text-orange-500 transition-colors">
                    Visual Storytelling
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-6 pb-4 border-b border-neutral-100 relative after:absolute after:w-8 after:h-0.5 after:bg-orange-500 after:bottom-[-1px] after:left-0">
                Markets
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-neutral-600 hover:text-orange-500 transition-colors">
                    United States
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 hover:text-orange-500 transition-colors">
                    United Kingdom
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 hover:text-orange-500 transition-colors">
                    Ghana
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 hover:text-orange-500 transition-colors">
                    Nigeria
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 hover:text-orange-500 transition-colors">
                    Global Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-6 pb-4 border-b border-neutral-100 relative after:absolute after:w-8 after:h-0.5 after:bg-orange-500 after:bottom-[-1px] after:left-0">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-neutral-600 hover:text-orange-500 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 hover:text-orange-500 transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 hover:text-orange-500 transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 hover:text-orange-500 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 hover:text-orange-500 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 hover:text-orange-500 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-neutral-500 text-sm pt-8 border-t border-neutral-100">
            &copy; {new Date().getFullYear()} StarGirl Strategy. All rights reserved. A global
            digital marketing agency serving the US, UK, Ghana, Nigeria, and worldwide.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StarGirlStrategy;
