
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Copy, Check, Phone, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const email = 'melchmanu@gmail.com';
  const phone = '06 62 36 17 67';

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
          <div className="glass p-8 rounded-xl max-w-xl w-full">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Mail size={32} className="text-primary" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-center">Contact</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <a 
                href="mailto:melchmanu@gmail.com" 
                className="flex items-center gap-3 p-3 rounded-md hover:bg-secondary/30 transition-colors group"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail size={18} className="text-primary" />
                </div>
                <span>melchmanu@gmail.com</span>
              </a>
              
              <a 
                href="tel:+33662361767" 
                className="flex items-center gap-3 p-3 rounded-md hover:bg-secondary/30 transition-colors group"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone size={18} className="text-primary" />
                </div>
                <span>06 62 36 17 67</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/manuel-melchiori/" 
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3 rounded-md hover:bg-secondary/30 transition-colors group"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Linkedin size={18} className="text-primary" />
                </div>
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/Lekansei" 
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3 rounded-md hover:bg-secondary/30 transition-colors group"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Github size={18} className="text-primary" />
                </div>
                <span>GitHub</span>
              </a>
            </div>
            
            <div className="flex justify-center">
              <Button 
                className="w-full md:w-auto"
                onClick={() => window.location.href = `mailto:${email}`}
              >
                <Mail size={16} className="mr-2" />
                {t('contact.send_email')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
