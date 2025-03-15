
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'fr';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.subtitle': 'Data Analyst | Python, SQL, Power BI',
    'hero.description': 'Passionate about data analysis and automation, I help businesses transform their data into strategic decisions.',
    'hero.cta': 'Get in touch',
    'hero.scroll': 'Scroll down',
    
    // Experience Section
    'experience.title': 'Experience & Education',
    'experience.work': 'Work Experience',
    'experience.education': 'Education',
    'experience.cerenn.title': 'Data Analyst',
    'experience.cerenn.company': 'Cerenn Industrie',
    'experience.cerenn.date': '2011 - Present',
    'experience.cerenn.description': 'Automation and management of industrial databases, data cleaning and structuring, advanced reporting via Power BI.',
    'experience.schneider.title': 'Data Analyst Intern',
    'experience.schneider.company': 'Schneider Electric',
    'experience.schneider.date': 'Internship',
    'experience.schneider.description': 'Optimization of a production system, analysis and modeling of industrial data.',
    'experience.oc.title': 'Data Analyst Certification',
    'experience.oc.institution': 'OpenClassrooms',
    'experience.oc.date': '2024-2025',
    'experience.oc.description': 'Advanced SQL, Data Visualization with Power BI and Tableau, Machine Learning and Modeling.',
    'experience.certificates.title': 'Additional Certifications',
    'experience.certificates.sql': 'Advanced SQL Certificate (PostgreSQL, MySQL)',
    'experience.certificates.ml': 'Machine Learning with Python Certificate',
    
    // Projects Section
    'projects.title': 'Projects',
    'projects.filter.all': 'All',
    'projects.filter.sql': 'SQL',
    'projects.filter.python': 'Python',
    'projects.filter.powerbi': 'Power BI',
    'projects.filter.ml': 'Machine Learning',
    'projects.sales.title': 'E-commerce Sales Analysis',
    'projects.sales.description': 'Comprehensive sales analysis for an e-commerce platform, identifying key trends and opportunities for growth.',
    'projects.sales.tools': 'SQL, Python, Pandas',
    'projects.dashboard.title': 'Dynamic Dashboard with Power BI',
    'projects.dashboard.description': 'Created an interactive dashboard for business performance monitoring with drill-down capabilities.',
    'projects.dashboard.tools': 'DAX, Power BI',
    'projects.equality.title': 'Gender Equality Indicators Analysis',
    'projects.equality.description': 'Analyzed gender equality indicators in compliance with GDPR regulations.',
    'projects.equality.tools': 'KNIME, Tableau, GDPR Compliance',
    'projects.counterfeit.title': 'Counterfeit Detection with Python',
    'projects.counterfeit.description': 'Developed a machine learning model to detect counterfeit bills using classification algorithms.',
    'projects.counterfeit.tools': 'Scikit-Learn, Random Forest, K-Means',
    
    // Skills Section
    'skills.title': 'Skills',
    'skills.hard': 'Technical Skills',
    'skills.soft': 'Soft Skills',
    'skills.tools': 'Tools & Technologies',
    'skills.python': 'Python',
    'skills.sql': 'SQL',
    'skills.powerbi': 'Power BI',
    'skills.tableau': 'Tableau',
    'skills.ml': 'Machine Learning',
    'skills.pandas': 'Pandas',
    'skills.numpy': 'NumPy',
    'skills.scikitlearn': 'Scikit-Learn',
    'skills.communication': 'Communication',
    'skills.problemsolving': 'Problem Solving',
    'skills.teamwork': 'Teamwork',
    'skills.adaptability': 'Adaptability',
    
    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.description': 'Feel free to reach out if you have any questions or if you\'re interested in working together.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message. Please try again.',
    'contact.cv': 'Download CV',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.developed': 'Developed with',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.subtitle': 'Data Analyst | Python, SQL, Power BI',
    'hero.description': 'Passionné par l\'analyse de données et l\'automatisation, j\'aide les entreprises à transformer leurs données en décisions stratégiques.',
    'hero.cta': 'Me contacter',
    'hero.scroll': 'Défiler vers le bas',
    
    // Experience Section
    'experience.title': 'Expérience & Formation',
    'experience.work': 'Expérience Professionnelle',
    'experience.education': 'Formation',
    'experience.cerenn.title': 'Data Analyst',
    'experience.cerenn.company': 'Cerenn Industrie',
    'experience.cerenn.date': '2011 - Présent',
    'experience.cerenn.description': 'Automatisation et gestion des bases de données industrielles, nettoyage et structuration des données, reporting avancé via Power BI.',
    'experience.schneider.title': 'Stagiaire Data Analyst',
    'experience.schneider.company': 'Schneider Electric',
    'experience.schneider.date': 'Stage',
    'experience.schneider.description': 'Optimisation d\'un système de production, analyse et modélisation des données industrielles.',
    'experience.oc.title': 'Certification Data Analyst',
    'experience.oc.institution': 'OpenClassrooms',
    'experience.oc.date': '2024-2025',
    'experience.oc.description': 'SQL avancé, Data Visualization avec Power BI et Tableau, Machine Learning et Modélisation.',
    'experience.certificates.title': 'Certificats complémentaires',
    'experience.certificates.sql': 'Certificat SQL avancé (PostgreSQL, MySQL)',
    'experience.certificates.ml': 'Certificat Machine Learning avec Python',
    
    // Projects Section
    'projects.title': 'Projets',
    'projects.filter.all': 'Tous',
    'projects.filter.sql': 'SQL',
    'projects.filter.python': 'Python',
    'projects.filter.powerbi': 'Power BI',
    'projects.filter.ml': 'Machine Learning',
    'projects.sales.title': 'Analyse de ventes pour un e-commerce',
    'projects.sales.description': 'Analyse complète des ventes pour une plateforme e-commerce, identifiant les tendances clés et les opportunités de croissance.',
    'projects.sales.tools': 'SQL, Python, Pandas',
    'projects.dashboard.title': 'Tableau de bord dynamique avec Power BI',
    'projects.dashboard.description': 'Création d\'un tableau de bord interactif pour le suivi des performances commerciales avec des capacités de drill-down.',
    'projects.dashboard.tools': 'DAX, Power BI',
    'projects.equality.title': 'Analyse des indicateurs d\'égalité femmes/hommes',
    'projects.equality.description': 'Analyse des indicateurs d\'égalité femmes/hommes en conformité avec les réglementations RGPD.',
    'projects.equality.tools': 'KNIME, Tableau, Conformité RGPD',
    'projects.counterfeit.title': 'Détection de faux billets avec Python',
    'projects.counterfeit.description': 'Développement d\'un modèle de machine learning pour détecter les faux billets à l\'aide d\'algorithmes de classification.',
    'projects.counterfeit.tools': 'Scikit-Learn, Random Forest, K-Means',
    
    // Skills Section
    'skills.title': 'Compétences',
    'skills.hard': 'Compétences Techniques',
    'skills.soft': 'Soft Skills',
    'skills.tools': 'Outils & Technologies',
    'skills.python': 'Python',
    'skills.sql': 'SQL',
    'skills.powerbi': 'Power BI',
    'skills.tableau': 'Tableau',
    'skills.ml': 'Machine Learning',
    'skills.pandas': 'Pandas',
    'skills.numpy': 'NumPy',
    'skills.scikitlearn': 'Scikit-Learn',
    'skills.communication': 'Communication',
    'skills.problemsolving': 'Résolution de Problèmes',
    'skills.teamwork': 'Travail d\'Équipe',
    'skills.adaptability': 'Adaptabilité',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.description': 'N\'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez collaborer ensemble.',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    'contact.sending': 'Envoi en cours...',
    'contact.success': 'Message envoyé avec succès !',
    'contact.error': 'Erreur lors de l\'envoi du message. Veuillez réessayer.',
    'contact.cv': 'Télécharger CV',
    
    // Footer
    'footer.rights': 'Tous droits réservés',
    'footer.developed': 'Développé avec',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
