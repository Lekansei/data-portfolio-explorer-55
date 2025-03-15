
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
                
                <p className="text-slate dark:text-slate-light whitespace-pre-line">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
