
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('prevent-scroll');
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('prevent-scroll');
  };

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

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4 lg:py-5',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className={cn(
            'font-bold text-xl transition-colors duration-300',
            scrolled ? 'text-black' : 'text-white'
          )}>
            Precision
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Product', 'Features', 'Gallery', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                'text-sm font-medium transition-all duration-300 border-b-2 border-transparent hover:border-current',
                scrolled ? 'text-gray-800 hover:text-black' : 'text-white/80 hover:text-white'
              )}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="shine-effect bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-900 hover:scale-105 active:scale-95">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={cn(
            'w-6 h-0.5 mb-1.5 transition-all duration-300',
            menuOpen ? 'rotate-45 translate-y-2 bg-white' : 'bg-black',
            !menuOpen && scrolled ? 'bg-black' : !menuOpen ? 'bg-white' : ''
          )} />
          <div className={cn(
            'w-6 h-0.5 mb-1.5 transition-all duration-300',
            menuOpen ? 'opacity-0' : 'opacity-100',
            scrolled ? 'bg-black' : 'bg-white'
          )} />
          <div className={cn(
            'w-6 h-0.5 transition-all duration-300',
            menuOpen ? '-rotate-45 -translate-y-2 bg-white' : 'bg-black',
            !menuOpen && scrolled ? 'bg-black' : !menuOpen ? 'bg-white' : ''
          )} />
        </button>

        {/* Mobile Menu */}
        <div className={cn(
          'fixed inset-0 bg-black flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden',
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}>
          <div className="flex flex-col items-center space-y-8">
            {['Product', 'Features', 'Gallery', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="text-white text-xl font-medium hover:text-gray-300 transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="mt-4 bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:bg-gray-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
