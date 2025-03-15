import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const { t, toggleLanguage, currentLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#home');
      if (heroSection) {
        const heroOffsetTop = (heroSection as HTMLElement).offsetTop;
        const heroHeight = (heroSection as HTMLElement).offsetHeight;
        const scrollPosition = window.scrollY;
        
        setIsScrolled(scrollPosition > heroOffsetTop + heroHeight * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 dark:bg-navy/80 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">
          <span className="text-primary">DA</span>Portfolio
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={toggleLanguage} 
            className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
            aria-label={t('nav.toggleLanguage')}
          >
            <span className="font-medium text-sm">
              {currentLanguage === 'en' ? 'EN' : 'ES'}
            </span>
          </button>
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
            aria-label={t('nav.toggleTheme')}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <a 
            href="#contact" 
            className="btn-primary px-4 py-2 rounded-lg text-sm"
          >
            {t('nav.resume')}
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 mr-2 rounded-full hover:bg-secondary/80 transition-colors"
            aria-label={t('nav.toggleTheme')}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
            aria-label={isMobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background dark:bg-navy z-40 pt-20">
          <nav className="flex flex-col items-center justify-center h-full">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-xl py-4 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
            <button 
              onClick={toggleLanguage} 
              className="mt-6 p-2 rounded-full hover:bg-secondary/80 transition-colors"
              aria-label={t('nav.toggleLanguage')}
            >
              <span className="font-medium">
                {currentLanguage === 'en' ? 'English' : 'Español'}
              </span>
            </button>
            
            <a 
              href="#contact" 
              className="btn-primary px-6 py-3 rounded-lg text-base mt-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.resume')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
