
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const email = 'melchmanu@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        toast({
          title: t('contact.email_copied'),
          description: t('contact.email_copied_description'),
        });
        
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy email: ', err);
        toast({
          variant: 'destructive',
          title: t('contact.email_copy_error'),
          description: t('contact.email_copy_error_description'),
        });
      });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-heading">{t('contact.title')}</h2>

        <div className="flex flex-col items-center justify-center">
          <div className="glass p-8 rounded-xl max-w-md w-full text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Mail size={32} className="text-primary" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4">{t('contact.get_in_touch')}</h3>
            
            <p className="text-slate dark:text-slate-light mb-6">
              {t('contact.email_me')}
            </p>
            
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="glass bg-background/50 dark:bg-navy-light/50 px-4 py-2 rounded-lg text-center">
                <span className="font-mono">{email}</span>
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleCopyEmail}
                className="flex-shrink-0"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </Button>
            </div>
            
            <Button 
              className="w-full"
              onClick={() => window.location.href = `mailto:${email}`}
            >
              <Mail size={16} className="mr-2" />
              {t('contact.send_email')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
