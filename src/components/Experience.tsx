
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: 'work' | 'education';
  details?: string[];
}

const Experience = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'work' | 'education'>('all');
  
  const timelineItems: TimelineItem[] = [
    {
      id: 'cerenn',
      title: "Stage",
      organization: t('experience.cerenn.company'),
      date: t('experience.cerenn.date'),
      description: "Amélioration système via programmation sur automates",
      details: [
        t('experience.cerenn.detail1'),
        t('experience.cerenn.detail2'),
        t('experience.cerenn.detail3')
      ],
      type: 'work'
    },
    {
      id: 'schneider',
      title: t('experience.schneider.title'),
      organization: t('experience.schneider.company'),
      date: t('experience.schneider.date'),
      description: t('experience.schneider.description'),
      details: [
        t('experience.schneider.detail1'),
        t('experience.schneider.detail2')
      ],
      type: 'work'
    },
    {
      id: 'programming',
      title: t('experience.programming.title'),
      organization: t('experience.programming.organization'),
      date: t('experience.programming.date'),
      description: t('experience.programming.description'),
      type: 'work'
    },
    {
      id: 'oc',
      title: "Data Analyst",
      organization: t('experience.oc.institution'),
      date: t('experience.oc.date'),
      description: "Certification Data Analyst - RNCP37837 - Niveau 6",
      details: [
        t('experience.oc.detail1'),
        t('experience.oc.detail2')
      ],
      type: 'education'
    },
    {
      id: 'certificates',
      title: t('experience.certificates.title'),
      organization: '',
      date: '',
      description: t('experience.certificates.description'),
      details: [
        t('experience.certificates.sql') + " (en cours)",
        t('experience.certificates.ml') + " (en cours)",
        t('experience.certificates.bi') + " (en cours)"
      ],
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
        
        <div className="flex justify-center mb-10">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="card-hover bg-background/50 dark:bg-navy-light/50 backdrop-blur-sm border-primary/10"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {item.title}
                  </CardTitle>
                  <Badge 
                    variant="outline" 
                    className={cn(
                      item.type === 'work' 
                        ? "bg-primary/10 text-primary border-primary/20" 
                        : "bg-cyan/10 text-cyan border-cyan/20"
                    )}
                  >
                    {item.type === 'work' 
                      ? t('experience.work') 
                      : t('experience.education')}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                {item.organization && (
                  <div className="text-base font-medium text-slate dark:text-slate-light mb-1">
                    {item.organization}
                  </div>
                )}
                
                {item.date && (
                  <div className="text-sm text-slate dark:text-slate-light/80 mb-3">
                    {item.date}
                  </div>
                )}
                
                <p className="text-slate dark:text-slate-light whitespace-pre-line mb-4">
                  {item.description}
                </p>
                
                {item.details && item.details.length > 0 && (
                  <ul className="list-disc pl-5 space-y-1 text-slate dark:text-slate-light">
                    {item.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
