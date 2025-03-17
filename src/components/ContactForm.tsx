
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { sendContactEmail, EmailData } from '@/services/EmailService';
import { useToast } from '@/components/ui/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Create a schema for form validation
  const formSchema = z.object({
    name: z.string().min(2, { message: t('contact.nameError') }),
    email: z.string().email({ message: t('contact.emailError') }),
    message: z.string().min(5, { message: t('contact.messageError') })
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    setSending(true);
    setFormStatus('idle');
    console.log("Form submitted with data:", data);

    try {
      // Ensure we're passing data as EmailData
      const emailData: EmailData = {
        name: data.name,
        email: data.email,
        message: data.message
      };
      
      console.log("Preparing to send email with data:", emailData);
      const result = await sendContactEmail(emailData);
      console.log("Email send result:", result);

      if (result.success) {
        setFormStatus('success');
        toast({
          title: t('contact.success'),
          description: result.message,
          variant: "default",
        });
        
        // Reset form
        form.reset();
      } else {
        setFormStatus('error');
        toast({
          title: t('contact.error'),
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error in form submission:", error);
      setFormStatus('error');
      toast({
        title: t('contact.error'),
        description: error instanceof Error ? error.message : t('contact.errorDetail'),
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
    <div className="glass p-8 rounded-xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('contact.name')}
                </FormLabel>
                <FormControl>
                  <Input
                    id="name"
                    {...field}
                    className="w-full px-4 py-3 rounded-md bg-background dark:bg-navy-light border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('contact.email')}
                </FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    {...field}
                    className="w-full px-4 py-3 rounded-md bg-background dark:bg-navy-light border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('contact.message')}
                </FormLabel>
                <FormControl>
                  <Textarea
                    id="message"
                    rows={5}
                    {...field}
                    className="w-full px-4 py-3 rounded-md bg-background dark:bg-navy-light border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={sending}
            className={`w-full py-3 rounded-md font-medium transition-all ${
              sending 
                ? "bg-secondary text-secondary-foreground cursor-not-allowed" 
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
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
      </Form>
    </div>
  );
};

export default ContactForm;
