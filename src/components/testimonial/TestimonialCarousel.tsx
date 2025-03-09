'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Define the testimonial type
interface Testimonial {
  quote: string;
  author: string;
  position: string;
  initials: string;
  rating: number;
}

function TestimonialView({ testimonial }: Readonly<{ testimonial: Testimonial }>) {
  return (
    <motion.div
      className="relative"
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      {/* Quotation mark */}
      <div className="absolute -top-5 -left-4 text-6xl text-primary-orange opacity-30 font-serif">
        &quot;
      </div>
      <div className="bg-white p-10 relative z-10 border border-gray-100">
        <div className="text-lg text-gray-700 mb-8">{testimonial.quote}</div>

        {/* Author and rating */}
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-primary-orange font-medium text-sm mr-4">
              {testimonial.initials}
            </div>
            <div>
              <div className="font-medium text-charcoal">{testimonial.author}</div>
              <div className="text-gray-500 text-sm">{testimonial.position}</div>
            </div>
          </div>

          {/* Rating */}
          <div className="flex space-x-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary-orange"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Closing quotation mark */}
      <div className="absolute -bottom-5 -right-4 text-6xl text-primary-orange opacity-30 font-serif rotate-180">
        &quot;
      </div>
    </motion.div>
  );
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Blessing transformed our digital presence. Within three months, our engagement increased by 150% and customer acquisition reached levels we'd only imagined. Her data-driven approach and strategic content converted casual browsers into passionate advocates for our brand.",
    author: 'Alex Brown',
    position: 'CEO, TechStart',
    initials: 'AB',
    rating: 5,
  },
  {
    quote:
      "Blessing's team created content that consistently went viral, growing our social media following from 5K to over 50K in less than a year. The ROI we've seen has exceeded all expectations.",
    author: 'Sarah Johnson',
    position: 'Marketing Director, TechSolutions Inc.',
    initials: 'SJ',
    rating: 5,
  },
  {
    quote:
      "Our digital marketing has never been better. Blessing's data-driven approach reduced our customer acquisition cost by 40% while increasing conversions by 75%. The results speak for themselves.",
    author: 'David Chen',
    position: 'Founder, Lifestyle Brand',
    initials: 'DC',
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-teal font-medium text-sm tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mt-3 mb-5">
            What People Say
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Hear from those who&apos;ve experienced the impact of strategic digital marketing.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto testimonial-carousel">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            onSlideChange={handleSlideChange}
            className="pb-14"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialView testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <div className="swiper-button-prev !text-primary-orange !w-10 !h-10 !bg-white !shadow-md hover:!bg-primary-orange hover:!text-white rounded-full !left-0 md:!-left-5 flex items-center justify-center !transition-all !duration-300">
            <span className="sr-only">Previous</span>
          </div>
          <div className="swiper-button-next !text-primary-orange !w-10 !h-10 !bg-white !shadow-md hover:!bg-primary-orange hover:!text-white rounded-full !right-0 md:!-right-5 flex items-center justify-center !transition-all !duration-300">
            <span className="sr-only">Next</span>
          </div>

          {/* Custom pagination dots */}
          <div className="swiper-pagination !bottom-0"></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
