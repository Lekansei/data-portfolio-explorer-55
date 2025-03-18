
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/30 dark:bg-navy-light/20 py-12">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1: Info */}
          <div className="space-y-3">
            <div className="text-xl font-bold">
              <span className="text-primary">Manuel</span> Melchiori
            </div>
            <p className="text-sm text-slate dark:text-slate-light">
              Data Analyst specialisé en Python, SQL et Power BI avec 13 ans d'expérience en programmation.
            </p>
          </div>
          
          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-3">Navigation</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-primary transition-colors">Accueil</a>
              <a href="#experience" className="block hover:text-primary transition-colors">Expérience</a>
              <a href="#projects" className="block hover:text-primary transition-colors">Projets</a>
              <a href="#skills" className="block hover:text-primary transition-colors">Compétences</a>
              <a href="#contact" className="block hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          
          {/* Column 3: Empty or future content */}
          <div className="space-y-4">
            {/* This column is intentionally left empty for future content or balance */}
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-secondary/50 text-center text-sm text-slate dark:text-slate-light">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <div>&copy; {currentYear} Manuel Melchiori. Tous droits réservés.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
