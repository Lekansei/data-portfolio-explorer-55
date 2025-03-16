
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'fr';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  currentLanguage: Language;
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
    'nav.resume': 'Resume',
    'nav.toggleLanguage': 'Toggle language',
    'nav.toggleTheme': 'Toggle theme',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    
    // Hero Section
    'hero.subtitle': 'Data Analyst | Python, SQL, Power BI',
    'hero.description': 'Passionate about data analysis and automation, with 13 years of programming experience. I help businesses transform their data into strategic decisions.',
    'hero.cta': 'Get in touch',
    'hero.scroll': 'Scroll down',
    
    // Experience Section
    'experience.title': 'Experience & Education',
    'experience.work': 'Work Experience',
    'experience.education': 'Education',
    'experience.cerenn.title': 'Data Analyst',
    'experience.cerenn.company': 'Cerenn Industrie',
    'experience.cerenn.date': '2011 - Present',
    'experience.cerenn.description': 'Automation and management of industrial databases, with a focus on creating efficient data pipelines and implementing advanced analytics solutions.',
    'experience.cerenn.detail1': 'Development of data cleaning and structuring processes for industrial datasets',
    'experience.cerenn.detail2': 'Creation of comprehensive reporting dashboards via Power BI',
    'experience.cerenn.detail3': 'Implementation of predictive maintenance algorithms to reduce equipment downtime',
    'experience.schneider.title': 'Data Analyst Intern',
    'experience.schneider.company': 'Schneider Electric',
    'experience.schneider.date': 'Internship',
    'experience.schneider.description': 'Optimization of production systems through data-driven insights and process improvements.',
    'experience.schneider.detail1': 'Analysis and modeling of industrial data to identify inefficiencies',
    'experience.schneider.detail2': 'Development of SQL queries and Python scripts for automated reporting',
    'experience.programming.title': 'Programming Experience',
    'experience.programming.organization': 'Various Projects',
    'experience.programming.date': '2011 - Present',
    'experience.programming.description': '13 years of programming experience across multiple languages and platforms, with a specialization in data analysis tools and techniques.',
    'experience.oc.title': 'Data Analyst Certification',
    'experience.oc.institution': 'OpenClassrooms',
    'experience.oc.date': '2024-2025',
    'experience.oc.description': 'Professional certification in Data Analysis covering a wide range of data science concepts and tools.',
    'experience.oc.detail1': 'Advanced SQL, Data Visualization with Power BI and Tableau',
    'experience.oc.detail2': 'Machine Learning fundamentals and Statistical Modeling',
    'experience.certificates.title': 'Additional Certifications',
    'experience.certificates.description': 'Ongoing professional development through specialized certifications in data analysis tools and techniques.',
    'experience.certificates.sql': 'Advanced SQL Certificate (PostgreSQL, MySQL)',
    'experience.certificates.ml': 'Machine Learning with Python Certificate',
    'experience.certificates.bi': 'Business Intelligence & Data Visualization Certificate',
    
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
    'projects.tools': 'Tools',
    'projects.viewDetails': 'View Details',
    'projects.viewLess': 'View Less',
    
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
    'contact.resume_description': 'Download my detailed resume to learn more about my skills, experience, and education.',
    'contact.download_cv': 'Download CV',
    
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
    'nav.resume': 'CV',
    'nav.toggleLanguage': 'Changer de langue',
    'nav.toggleTheme': 'Changer de thème',
    'nav.openMenu': 'Ouvrir le menu',
    'nav.closeMenu': 'Fermer le menu',
    
    // Hero Section
    'hero.subtitle': 'Data Analyst | Python, SQL, Power BI',
    'hero.description': 'Passionné par l\'analyse de données et l\'automatisation, avec 13 ans d\'expérience en programmation. J\'aide les entreprises à transformer leurs données en décisions stratégiques.',
    'hero.cta': 'Me contacter',
    'hero.scroll': 'Défiler vers le bas',
    
    // Experience Section
    'experience.title': 'Expérience & Formation',
    'experience.work': 'Expérience Professionnelle',
    'experience.education': 'Formation',
    'experience.cerenn.title': 'Data Analyst',
    'experience.cerenn.company': 'Cerenn Industrie',
    'experience.cerenn.date': '2011 - Présent',
    'experience.cerenn.description': 'Automatisation et gestion des bases de données industrielles, avec un accent sur la création de pipelines de données efficaces et la mise en œuvre de solutions d\'analyse avancées.',
    'experience.cerenn.detail1': 'Développement de processus de nettoyage et de structuration des données pour les ensembles de données industrielles',
    'experience.cerenn.detail2': 'Création de tableaux de bord complets via Power BI',
    'experience.cerenn.detail3': 'Implémentation d\'algorithmes de maintenance prédictive pour réduire les temps d\'arrêt des équipements',
    'experience.schneider.title': 'Stagiaire Data Analyst',
    'experience.schneider.company': 'Schneider Electric',
    'experience.schneider.date': 'Stage',
    'experience.schneider.description': 'Optimisation des systèmes de production grâce à des insights basés sur les données et des améliorations de processus.',
    'experience.schneider.detail1': 'Analyse et modélisation des données industrielles pour identifier les inefficacités',
    'experience.schneider.detail2': 'Développement de requêtes SQL et de scripts Python pour le reporting automatisé',
    'experience.programming.title': 'Expérience en Programmation',
    'experience.programming.organization': 'Divers Projets',
    'experience.programming.date': '2011 - Présent',
    'experience.programming.description': '13 ans d\'expérience en programmation à travers plusieurs langages et plateformes, avec une spécialisation dans les outils et techniques d\'analyse de données.',
    'experience.oc.title': 'Certification Data Analyst',
    'experience.oc.institution': 'OpenClassrooms',
    'experience.oc.date': '2024-2025',
    'experience.oc.description': 'Certification professionnelle en Analyse de Données couvrant un large éventail de concepts et d\'outils de science des données.',
    'experience.oc.detail1': 'SQL avancé, Data Visualization avec Power BI et Tableau',
    'experience.oc.detail2': 'Fondamentaux du Machine Learning et Modélisation Statistique',
    'experience.certificates.title': 'Certificats complémentaires',
    'experience.certificates.description': 'Développement professionnel continu à travers des certifications spécialisées dans les outils et techniques d\'analyse de données.',
    'experience.certificates.sql': 'Certificat SQL avancé (PostgreSQL, MySQL)',
    'experience.certificates.ml': 'Certificat Machine Learning avec Python',
    'experience.certificates.bi': 'Certificat Business Intelligence & Data Visualization',
    
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
    'projects.tools': 'Outils',
    'projects.viewDetails': 'Voir détails',
    'projects.viewLess': 'Voir moins',
    
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
    'contact.resume_description': 'Téléchargez mon CV détaillé pour en savoir plus sur mes compétences, mon expérience et ma formation.',
    'contact.download_cv': 'Télécharger CV',
    
    // Footer
    'footer.rights': 'Tous droits réservés',
    'footer.developed': 'Développé avec',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      toggleLanguage,
      currentLanguage: language,
      t 
    }}>
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
