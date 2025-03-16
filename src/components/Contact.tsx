
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-heading">{t('contact.title')}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
