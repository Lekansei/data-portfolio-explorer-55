
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Github, Linkedin, Mail } from 'lucide-react';
import ResumeDownload from './ResumeDownload';

const ContactInfo = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <p className="text-lg text-slate dark:text-slate-light">
        {t('contact.description')}
      </p>

      <div className="glass p-6 rounded-xl">
        <div className="space-y-4">
          <a 
            href="mailto:melchmanu@gmail.com" 
            className="flex items-center gap-4 p-3 transition-colors hover:bg-secondary/30 rounded-md group"
          >
            <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full">
              <Mail size={20} className="text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-medium">Email</div>
              <div className="text-sm text-slate dark:text-slate-light truncate w-full">
                melchmanu@gmail.com
              </div>
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/manuel-melchiori/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 transition-colors hover:bg-secondary/30 rounded-md group"
          >
            <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full">
              <Linkedin size={20} className="text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-medium">LinkedIn</div>
              <div className="text-sm text-slate dark:text-slate-light truncate w-full">
                Manuel Melchiori
              </div>
            </div>
          </a>

          <a 
            href="https://github.com/Melchmanu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 transition-colors hover:bg-secondary/30 rounded-md group"
          >
            <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full">
              <Github size={20} className="text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-medium">GitHub</div>
              <div className="text-sm text-slate dark:text-slate-light truncate w-full">
                Melchmanu
              </div>
            </div>
          </a>
        </div>
      </div>

      <ResumeDownload className="mt-6" />
    </div>
  );
};

export default ContactInfo;
