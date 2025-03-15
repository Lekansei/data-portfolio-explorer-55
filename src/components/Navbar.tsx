
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Menu, X, Sun, Moon } from 'lucide-react';

type NavItem = {
  name: string;
  translationKey: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: 'Home', translationKey: 'nav.home', href: '#home' },
  { name: 'Experience', translationKey: 'nav.experience', href: '#experience' },
  { name: 'Projects', translationKey: 'nav.projects', href: '#projects' },
  { name: 'Skills', translationKey: 'nav.skills', href: '#skills' },
  { name: 'Contact', translationKey: 'nav.contact', href: '#contact' },
];

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if user prefers dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md',
        scrolled ? 'py-3 bg-background/80 shadow-md dark:bg-navy-dark/80' : 'py-5 bg-transparent'
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-foreground transition-colors duration-300">
          <span className="text-primary">DA</span>Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'nav-link',
                activeSection === item.href.substring(1) && 'active'
              )}
            >
              {t(item.translationKey)}
            </a>
          ))}
          
          <div className="flex items-center ml-6 space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded-md text-sm font-medium bg-secondary hover:bg-secondary/80 transition-colors"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
            
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
            >
              <Github size={18} />
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 md:hidden rounded-md hover:bg-secondary/80 transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          'fixed inset-0 z-40 bg-background/95 dark:bg-navy-dark/95 backdrop-blur-lg md:hidden transition-transform duration-300 ease-in-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-8 pt-24">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-4 text-xl font-medium border-b border-border transition-colors hover:text-primary"
            >
              {t(item.translationKey)}
            </a>
          ))}
          
          <div className="flex items-center justify-center mt-8 space-x-6">
            <button
              onClick={() => {
                toggleLanguage();
                setMobileMenuOpen(false);
              }}
              className="px-4 py-2 rounded-md text-sm font-medium bg-secondary hover:bg-secondary/80 transition-colors"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
            
            <button 
              onClick={() => {
                toggleTheme();
                setMobileMenuOpen(false);
              }} 
              className="p-3 rounded-full hover:bg-secondary/80 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-secondary/80 transition-colors"
            >
              <Github size={20} />
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-secondary/80 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
