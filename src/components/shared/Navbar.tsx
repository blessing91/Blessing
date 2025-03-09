'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 md:px-10 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold tracking-wide">
          <div className="flex items-center">
            <span
              className={`${scrolled ? 'text-charcoal' : 'text-charcoal'} transition-colors duration-300`}
            >
              Blessing Adenekan
            </span>
          </div>
        </Link>
        <div className="hidden md:flex space-x-10">
          {navItems.map((item, index) => {
            // For the home page, we need to check if the pathname is exactly '/'
            const isActive = item.path === '/' ? pathname === '/' : pathname?.startsWith(item.path);

            return (
              <Link
                key={index}
                href={item.path}
                className={`${scrolled ? 'text-charcoal' : 'text-charcoal'} 
                  ${isActive ? 'text-primary-orange' : 'hover:text-primary-orange'} 
                  font-medium text-sm tracking-wide transition-colors duration-300`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="md:hidden">
          <button
            className={`${scrolled ? 'text-charcoal' : 'text-charcoal'} transition-colors duration-300`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden"
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {mobileMenuOpen && (
          <div className="bg-white shadow-md py-4 px-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => {
                // For the home page, we need to check if the pathname is exactly '/'
                const isActive =
                  item.path === '/' ? pathname === '/' : pathname?.startsWith(item.path);

                return (
                  <Link
                    key={index}
                    href={item.path}
                    className={`text-charcoal font-medium text-sm py-2 border-b border-gray-100
                      ${isActive ? 'text-primary-orange' : 'hover:text-primary-orange'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;
