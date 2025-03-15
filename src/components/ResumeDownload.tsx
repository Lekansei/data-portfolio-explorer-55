
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { FileText, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResumeDownloadProps {
  className?: string;
}

const ResumeDownload = ({ className }: ResumeDownloadProps) => {
  const { t } = useLanguage();
  
  const handleDownload = () => {
    // Sample implementation - replace with actual CV file path
    const cvPath = '/cv-sample.pdf';
    
    // Create a link element
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'my-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className={cn('glass p-6 rounded-xl space-y-4', className)}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-primary/10 rounded-full">
          <FileText size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-medium">{t('contact.cv')}</h3>
          <p className="text-sm text-slate dark:text-slate-light">PDF • Portofolio</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <p className="text-sm text-slate dark:text-slate-light">
          {t('contact.resume_description')}
        </p>
        
        <Button 
          onClick={handleDownload}
          className="w-full gap-2"
          size="lg"
        >
          <Download size={16} />
          {t('contact.download_cv')}
        </Button>
      </div>
    </div>
  );
};

export default ResumeDownload;
