
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: 'work' | 'education';
}

const Experience = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'work' | 'education'>('all');
  
  const timelineItems: TimelineItem[] = [
    {
      id: 'cerenn',
      title: t('experience.cerenn.title'),
      organization: t('experience.cerenn.company'),
      date: t('experience.cerenn.date'),
      description: t('experience.cerenn.description'),
      type: 'work'
    },
    {
      id: 'schneider',
      title: t('experience.schneider.title'),
      organization: t('experience.schneider.company'),
      date: t('experience.schneider.date'),
      description: t('experience.schneider.description'),
      type: 'work'
    },
    {
      id: 'oc',
      title: t('experience.oc.title'),
      organization: t('experience.oc.institution'),
      date: t('experience.oc.date'),
      description: t('experience.oc.description'),
      type: 'education'
    },
    {
      id: 'certificates',
      title: t('experience.certificates.title'),
      organization: '',
      date: '',
      description: `${t('experience.certificates.sql')}\n${t('experience.certificates.ml')}`,
      type: 'education'
    }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? timelineItems 
    : timelineItems.filter(item => item.type === activeFilter);

  return (
    <section id="experience" className="section-padding">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-heading">{t('experience.title')}</h2>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-secondary dark:bg-navy-light rounded-xl p-1">
            <button
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-all",
                activeFilter === 'all' 
                  ? "bg-background shadow-sm dark:bg-navy text-foreground" 
                  : "text-foreground/70 hover:text-foreground"
              )}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-all",
                activeFilter === 'work' 
                  ? "bg-background shadow-sm dark:bg-navy text-foreground" 
                  : "text-foreground/70 hover:text-foreground"
              )}
              onClick={() => setActiveFilter('work')}
            >
              {t('experience.work')}
            </button>
            <button
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-all",
                activeFilter === 'education' 
                  ? "bg-background shadow-sm dark:bg-navy text-foreground" 
                  : "text-foreground/70 hover:text-foreground"
              )}
              onClick={() => setActiveFilter('education')}
            >
              {t('experience.education')}
            </button>
          </div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-border"></div>
          
          <div className="space-y-12">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className={cn(
                  "relative flex flex-col md:flex-row",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary z-10"></div>
                
                {/* Content */}
                <div className={cn(
                  "w-full md:w-1/2 p-6 md:p-8",
                  index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                )}>
                  <div 
                    className="glass p-6 rounded-xl card-hover"
                  >
                    <div className="flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        <span className={cn(
                          "text-xs font-semibold px-2 py-1 rounded-full",
                          item.type === 'work' 
                            ? "bg-primary/10 text-primary" 
                            : "bg-cyan/10 text-cyan"
                        )}>
                          {item.type === 'work' 
                            ? t('experience.work') 
                            : t('experience.education')}
                        </span>
                      </div>
                      
                      {item.organization && (
                        <div className="text-base font-medium text-slate dark:text-slate-light">{item.organization}</div>
                      )}
                      
                      {item.date && (
                        <div className="text-sm text-slate dark:text-slate-light/80 mb-4">{item.date}</div>
                      )}
                      
                      <p className="text-slate dark:text-slate-light whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
