
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { sendContactEmail } from '@/services/EmailService';
import ResumeDownload from './ResumeDownload';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setFormStatus('idle');

    try {
      const result = await sendContactEmail({ name, email, message });

      if (result.success) {
        setFormStatus('success');
        toast({
          title: t('contact.success'),
          description: t('contact.successDetail'),
          variant: "default",
        });
        
        // Reset form
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setFormStatus('error');
        toast({
          title: t('contact.error'),
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      setFormStatus('error');
      toast({
        title: t('contact.error'),
        description: t('contact.errorDetail'),
        variant: "destructive",
      });
    } finally {
      setSending(false);
      
      // Reset status after a while
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-heading">{t('contact.title')}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <p className="text-lg text-slate dark:text-slate-light">
              {t('contact.description')}
            </p>

            <div className="glass p-6 rounded-xl">
              <div className="space-y-4">
                <a 
                  href="mailto:melchmanu@gmail.com" 
                  className="flex items-center gap-4 p-3 transition-colors hover:bg-secondary/30 rounded-md"
                >
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-slate dark:text-slate-light">melchmanu@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/manuel-melchiori/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 transition-colors hover:bg-secondary/30 rounded-md"
                >
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Linkedin size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-slate dark:text-slate-light">linkedin.com/in/manuel-melchiori</div>
                  </div>
                </a>

                <a 
                  href="https://github.com/Melchmanu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 transition-colors hover:bg-secondary/30 rounded-md"
                >
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Github size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-sm text-slate dark:text-slate-light">github.com/Melchmanu</div>
                  </div>
                </a>
              </div>
            </div>

            <ResumeDownload className="mt-6" />
          </div>

          <div className="lg:col-span-2 glass p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('contact.name')}
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md bg-background dark:bg-navy-light border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('contact.email')}
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md bg-background dark:bg-navy-light border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md bg-background dark:bg-navy-light border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className={cn(
                  "w-full py-3 rounded-md font-medium transition-all",
                  sending 
                    ? "bg-secondary text-secondary-foreground cursor-not-allowed" 
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                {sending ? t('contact.sending') : t('contact.send')}
              </button>

              {formStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle size={16} />
                  <span>{t('contact.success')}</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <AlertCircle size={16} />
                  <span>{t('contact.error')}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
