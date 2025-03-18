
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
              Data Analyst specialisé en Python, SQL et Power BI avec expertise en analyse de données pour l'aviation.
            </p>
          </div>
          
          {/* Column 2: Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            
            <div className="space-y-3">
              <a 
                href="mailto:melchmanu@gmail.com" 
                className="flex items-center gap-3 group hover:text-primary transition-colors"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail size={18} className="text-primary" />
                </div>
                <span>melchmanu@gmail.com</span>
              </a>
              
              <a 
                href="tel:+33662361767" 
                className="flex items-center gap-3 group hover:text-primary transition-colors"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone size={18} className="text-primary" />
                </div>
                <span>06 62 36 17 67</span>
              </a>
            </div>
          </div>
          
          {/* Column 3: Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-3">Social</h3>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/Lekansei" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 rounded-md bg-secondary/50 hover:bg-secondary/80 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/manuel-melchiori/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 rounded-md bg-secondary/50 hover:bg-secondary/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
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
