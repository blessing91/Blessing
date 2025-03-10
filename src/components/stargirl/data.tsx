// Import the icons needed for the services
import { Globe, BarChart2, Users, Image, Edit3, Compass } from 'lucide-react';

// Services data
const services = [
  {
    icon: <Globe size={24} />,
    title: 'Global Market Strategy',
    description:
      'Tailored digital strategies that account for cultural nuances and market-specific trends across the US, UK, Ghana, and Nigeria.',
  },
  {
    icon: <BarChart2 size={24} />,
    title: 'Data-Driven Marketing',
    description:
      'Leverage advanced analytics and market intelligence to make informed decisions that maximize your ROI across international markets.',
  },
  {
    icon: <Users size={24} />,
    title: 'Social Media Management',
    description:
      'Cultivate engaged communities and drive brand awareness through strategic content and community management on global platforms.',
  },
  {
    icon: <Image size={24} />,
    title: 'Brand & Visual Design',
    description:
      'Create compelling visual identities that resonate across cultures while maintaining your unique brand essence.',
  },
  {
    icon: <Edit3 size={24} />,
    title: 'Strategic Copywriting',
    description:
      'Craft messaging that connects with diverse audiences, addressing cultural sensitivities and local language preferences.',
  },
  {
    icon: <Compass size={24} />,
    title: 'Digital Experience Design',
    description:
      'Build immersive digital experiences that deliver seamless customer journeys optimized for global and local audiences.',
  },
];

// Case Studies data
const caseStudies = [
  {
    image: '/images/placeholder.jpg',
    category: 'E-commerce',
    location: 'United States & Ghana',
    title: 'Increasing Cross-Border Sales by 237%',
    description:
      'We helped AfriChic, a Ghanaian fashion retailer, expand their e-commerce presence into the US market, resulting in a 237% increase in international sales and a 189% growth in new customer acquisition.',
    stats: [
      { value: '237%', label: 'Sales Growth' },
      { value: '189%', label: 'New Customers' },
      { value: '12x', label: 'ROI' },
      { value: '65%', label: 'Repeat Purchases' },
    ],
  },
  {
    image: '/images/placeholder.jpg',
    category: 'Finance',
    location: 'United Kingdom & Nigeria',
    title: 'Launching a Fintech App in Multiple Markets',
    description:
      'We guided PayEase through simultaneous app launches in the UK and Nigeria, developing a dual-market strategy that addressed distinct regulatory environments while maintaining brand consistency.',
    stats: [
      { value: '250K+', label: 'App Downloads' },
      { value: '$1.2M', label: 'Transaction Value' },
      { value: '48%', label: 'CAC Reduction' },
      { value: '4.8', label: 'App Store Rating' },
    ],
  },
];

// Pricing Plans data
const pricingPlans = [
  {
    name: 'Starter',
    price: '2,499',
    description: 'For emerging brands looking to establish a global presence.',
    featured: false,
    features: [
      'Market analysis for 1 international region',
      'Social media management (2 platforms)',
      'Monthly performance reports',
      'Basic competitor analysis',
      'Content creation (10 posts/month)',
      'Email template designs',
      'Designated account manager',
    ],
  },
  {
    name: 'Growth',
    price: '4,999',
    description: 'For established brands ready to scale across multiple markets.',
    featured: true,
    features: [
      'Market analysis for 3 international regions',
      'Social media management (4 platforms)',
      'Bi-weekly performance reports',
      'Advanced competitor analysis',
      'Content creation (20 posts/month)',
      'Email marketing campaigns',
      'Priority account manager',
      'Quarterly strategy sessions',
    ],
  },
  {
    name: 'Enterprise',
    price: '9,999',
    description: 'For large organizations requiring comprehensive global marketing solutions.',
    featured: false,
    features: [
      'Market analysis for 5+ international regions',
      'Social media management (all platforms)',
      'Weekly performance reports',
      'Comprehensive competitor analysis',
      'Unlimited content creation',
      'Full-scale email marketing',
      'Dedicated strategy team',
      'Monthly strategy sessions',
      '24/7 priority support',
    ],
  },
];

export { services, caseStudies, pricingPlans };
