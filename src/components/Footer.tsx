
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/30 dark:bg-navy-light/20 py-8">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-lg font-bold">
              <span className="text-primary">DA</span>Portfolio
            </div>
            <div className="text-sm text-slate dark:text-slate-light">
              &copy; {currentYear} John Doe. {t('footer.rights')}.
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            
            <a 
              href="mailto:email@example.com" 
              className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-slate dark:text-slate-light">
          <div className="flex items-center justify-center gap-1">
            {t('footer.developed')} <Heart size={14} className="text-red-500 mx-1" /> React + TailwindCSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
