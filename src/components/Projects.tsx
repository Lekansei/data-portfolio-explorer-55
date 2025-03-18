import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { Github, ExternalLink } from 'lucide-react';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';

interface Skill {
  name: string;
  value: number;
  color: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  image: string;
  github?: string;
  demo?: string;
  categories: string[];
  skills: Skill[];
  priority?: number;
}

const Projects = () => {
  const { t, currentLanguage } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const filters = [
    { id: 'all', label: t('projects.filter.all') },
    { id: 'sql', label: t('projects.filter.sql') },
    { id: 'python', label: t('projects.filter.python') },
    { id: 'powerbi', label: t('projects.filter.powerbi') },
    { id: 'ml', label: t('projects.filter.ml') },
    { id: 'tableau', label: 'Tableau' },
    { id: 'excel', label: 'Excel' },
    { id: 'aviation', label: 'Aviation' },
  ];

  const projectImages = {
    dataAnalyst: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    ecommerce: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    database: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    health: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    realestate: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    retail: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    dashboard: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
    equality: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    bookstore: 'https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
    water: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
    market: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    counterfeit: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
    aviation: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
  };

  const projects: Project[] = [
    {
      id: 'counterfeit',
      title: 'Détectez des faux billets avec Python',
      description: 'Détection de faux billets via Machine Learning avec Gradient Boosting et K-Means.',
      tools: ['Python', 'Scikit-Learn', 'K-Means', 'Random Forest'],
      image: projectImages.counterfeit,
      github: 'https://github.com/Melchmanu/-Fake-Banknote-Detection-with-Python',
      categories: ['python', 'ml'],
      skills: [
        { name: 'Scikit-Learn', value: 40, color: '#f39c12' },
        { name: 'Random Forest', value: 35, color: '#2ecc71' },
        { name: 'K-Means', value: 25, color: '#9b59b6' },
      ],
      priority: 10
    },
    {
      id: 'ecommerce',
      title: 'Faites une analyse de ventes pour un e-commerce',
      description: 'Analyse des tendances de ventes d\'un e-commerce avec Python et SQL.',
      tools: ['SQL', 'Python', 'Pandas', 'Matplotlib'],
      image: projectImages.ecommerce,
      github: 'https://github.com/Melchmanu/Faites-une-analyse-de-ventes-pour-un-e-commerce',
      categories: ['sql', 'python'],
      skills: [
        { name: 'SQL', value: 40, color: '#3498db' },
        { name: 'Python', value: 35, color: '#2ecc71' },
        { name: 'Pandas', value: 25, color: '#9b59b6' },
      ],
      priority: 9
    },
    {
      id: 'realestate',
      title: 'Créez et utilisez une base de données immobilière avec SQL',
      description: 'Construction et interrogation d\'une base de données immobilière en SQL.',
      tools: ['SQL', 'PostgreSQL', 'MySQL'],
      image: projectImages.realestate,
      github: 'https://github.com/Melchmanu/DATAImmo-Building-and-Analyzing-a-Real-Estate-Database-with-SQL',
      categories: ['sql'],
      skills: [
        { name: 'PostgreSQL', value: 40, color: '#336791' },
        { name: 'MySQL', value: 35, color: '#4479A1' },
        { name: 'SQL', value: 25, color: '#f39c12' },
      ],
      priority: 8
    },
    {
      id: 'aeroworld',
      title: 'Aéroworld: Aviation Data Analysis Platform',
      description: 'Interactive aviation analytics dashboard showing flight patterns, efficiency metrics, and predictive maintenance indicators for airlines.',
      tools: ['Python', 'Power BI', 'SQL', 'Machine Learning'],
      image: projectImages.aviation,
      github: 'https://github.com/Melchmanu/Aeroworld-Aviation-Analytics',
      categories: ['python', 'powerbi', 'sql', 'ml', 'aviation'],
      skills: [
        { name: 'Data Visualization', value: 35, color: '#3498db' },
        { name: 'Python', value: 25, color: '#2ecc71' },
        { name: 'SQL', value: 20, color: '#e74c3c' },
        { name: 'Machine Learning', value: 20, color: '#9b59b6' },
      ],
      priority: 7
    },
    {
      id: 'database',
      title: 'Requêtez une base de données avec SQL',
      description: 'Requêtes SQL avancées sur une base de données, jointures et optimisation.',
      tools: ['PostgreSQL', 'SQL'],
      image: projectImages.database,
      github: 'https://github.com/Melchmanu/Requ-tez-une-base-de-donn-es-avec-SQL',
      categories: ['sql'],
      skills: [
        { name: 'PostgreSQL', value: 60, color: '#336791' },
        { name: 'SQL', value: 40, color: '#f39c12' },
      ],
      priority: 5
    },
    {
      id: 'health',
      title: 'Réalisez une étude de santé publique avec Python',
      description: 'Analyse de données de santé publique avec Pandas et visualisation.',
      tools: ['Python', 'Pandas', 'Seaborn'],
      image: projectImages.health,
      github: 'https://github.com/Melchmanu/Public-Health-Study-with-Python',
      categories: ['python'],
      skills: [
        { name: 'Python', value: 40, color: '#3776AB' },
        { name: 'Pandas', value: 35, color: '#150458' },
        { name: 'Seaborn', value: 25, color: '#5C84A0' },
      ],
      priority: 5
    },
    {
      id: 'retail',
      title: 'Optimisez la gestion des données d\'une boutique avec Python',
      description: 'Optimisation des données d\'une boutique avec manipulation avancée en Python.',
      tools: ['Python', 'Pandas', 'NumPy'],
      image: projectImages.retail,
      github: 'https://github.com/Melchmanu/Data-Management-Optimization-for-Retail-with-Python',
      categories: ['python'],
      skills: [
        { name: 'Python', value: 40, color: '#3776AB' },
        { name: 'Pandas', value: 35, color: '#150458' },
        { name: 'NumPy', value: 25, color: '#013243' },
      ],
      priority: 5
    },
    {
      id: 'dashboard',
      title: 'Créez un tableau de bord dynamique avec Power BI',
      description: 'Création d\'un dashboard interactif pour suivre l\'avancement de projets.',
      tools: ['Power BI', 'DAX'],
      image: projectImages.dashboard,
      github: 'https://github.com/Melchmanu/Dynamic-Dashboard-with-Power-BI-to-Visualize-Project-Progress',
      categories: ['powerbi'],
      skills: [
        { name: 'Power BI', value: 60, color: '#F2C811' },
        { name: 'DAX', value: 40, color: '#F08135' },
      ],
      priority: 4
    },
    {
      id: 'equality',
      title: 'Analysez des indicateurs de l\'égalité femmes/hommes',
      description: 'Automatisation d\'un rapport d\'égalité H/F avec KNIME et anonymisation des données.',
      tools: ['KNIME', 'Tableau', 'GDPR Compliance'],
      image: projectImages.equality,
      github: 'https://github.com/Melchmanu/Gender-Equality-Indicators-Analysis-in-Compliance-with-GDPR',
      categories: ['tableau'],
      skills: [
        { name: 'KNIME', value: 30, color: '#e74c3c' },
        { name: 'Tableau', value: 45, color: '#3498db' },
        { name: 'GDPR', value: 25, color: '#2ecc71' },
      ],
      priority: 4
    },
    {
      id: 'bookstore',
      title: 'Analysez les ventes d\'une librairie avec Python',
      description: 'Exploration des ventes d\'une librairie avec Python et visualisation.',
      tools: ['Python', 'Seaborn', 'Matplotlib'],
      image: projectImages.bookstore,
      github: 'https://github.com/Melchmanu/Bookstore-Sales-Analysis-with-Python',
      categories: ['python'],
      skills: [
        { name: 'Python', value: 35, color: '#3776AB' },
        { name: 'Seaborn', value: 35, color: '#5C84A0' },
        { name: 'Matplotlib', value: 30, color: '#11557C' },
      ],
      priority: 3
    },
    {
      id: 'water',
      title: 'Faites une étude sur l\'eau potable',
      description: 'Dashboard Tableau pour identifier les pays en difficulté d\'accès à l\'eau potable.',
      tools: ['Tableau', 'Data Scraping'],
      image: projectImages.water,
      github: 'https://github.com/Melchmanu/Drinking-Water-Accessibility-Dashboard',
      categories: ['tableau'],
      skills: [
        { name: 'Tableau', value: 60, color: '#3498db' },
        { name: 'Data Scraping', value: 40, color: '#f39c12' },
      ],
      priority: 3
    },
    {
      id: 'market',
      title: 'Produisez une étude de marché avec Python',
      description: 'Analyse de marché via scraping et modélisation de tendances.',
      tools: ['Python', 'Scrapy', 'Pandas'],
      image: projectImages.market,
      github: 'https://github.com/Melchmanu/Market-Study-with-Python',
      categories: ['python'],
      skills: [
        { name: 'Python', value: 35, color: '#3776AB' },
        { name: 'Scrapy', value: 35, color: '#60A839' },
        { name: 'Pandas', value: 30, color: '#150458' },
      ],
      priority: 3
    },
    {
      id: 'dataAnalyst',
      title: 'Prenez en main votre formation de Data Analyst',
      description: 'Formation sur les bases du métier de Data Analyst et prise en main des outils.',
      tools: ['Excel', 'Power BI'],
      image: projectImages.dataAnalyst,
      github: 'https://github.com/Melchmanu/Prenez-en-main-votre-formation-de-Data-Analyst',
      categories: ['excel', 'powerbi'],
      skills: [
        { name: 'Excel', value: 60, color: '#217346' },
        { name: 'Power BI', value: 40, color: '#F2C811' },
      ],
      priority: 1
    },
  ];

  const projectsWithTranslations = projects.map(project => {
    if (currentLanguage === 'en') {
      const englishTitles: Record<string, string> = {
        'Prenez en main votre formation de Data Analyst': 'Getting Started with Data Analyst Training',
        'Faites une analyse de ventes pour un e-commerce': 'E-commerce Sales Analysis',
        'Requêtez une base de données avec SQL': 'Query a Database with SQL',
        'Réalisez une étude de santé publique avec Python': 'Public Health Study with Python',
        'Créez et utilisez une base de données immobilière avec SQL': 'Real Estate Database with SQL',
        'Optimisez la gestion des données d\'une boutique avec Python': 'Retail Data Management Optimization with Python',
        'Créez un tableau de bord dynamique avec Power BI': 'Dynamic Dashboard with Power BI',
        'Analysez des indicateurs de l\'égalité femmes/hommes': 'Gender Equality Indicators Analysis',
        'Analysez les ventes d\'une librairie avec Python': 'Bookstore Sales Analysis with Python',
        'Faites une étude sur l\'eau potable': 'Drinking Water Accessibility Study',
        'Produisez une étude de marché avec Python': 'Market Study with Python',
        'Détectez des faux billets avec Python': 'Counterfeit Detection with Python'
      };
      
      return {
        ...project,
        title: englishTitles[project.title] || project.title,
        description: project.description
          .replace('Formation sur les bases', 'Basic training')
          .replace('Analyse des tendances', 'Analysis of trends')
          .replace('Requêtes SQL avancées', 'Advanced SQL queries')
          .replace('Analyse de données', 'Data analysis')
          .replace('Construction et interrogation', 'Building and querying')
          .replace('Optimisation des données', 'Data optimization')
          .replace('Création d\'un dashboard', 'Creation of a dashboard')
          .replace('Automatisation d\'un rapport', 'Automation of a report')
          .replace('Exploration des ventes', 'Sales exploration')
          .replace('Dashboard Tableau', 'Tableau dashboard')
          .replace('Analyse de marché', 'Market analysis')
          .replace('Détection de faux billets', 'Counterfeit detection')
      };
    }
    return project;
  });

  const filteredProjects = activeFilter === 'all' 
    ? projectsWithTranslations.sort((a, b) => (b.priority || 0) - (a.priority || 0)) 
    : projectsWithTranslations
        .filter(project => project.categories.includes(activeFilter))
        .sort((a, b) => (b.priority || 0) - (a.priority || 0));

  return (
    <section id="projects" className="section-padding bg-secondary/30 dark:bg-navy-light/20">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-heading">{t('projects.title')}</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setSelectedProject(null);
              }}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-all",
                activeFilter === filter.id 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-background dark:bg-navy-light hover:bg-primary/10"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className={cn(
                "glass overflow-hidden card-hover transition-all",
                selectedProject?.id === project.id ? "md:col-span-2 lg:col-span-3" : ""
              )}
            >
              <div className="flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-slate dark:text-slate-light mb-4">{project.description}</p>
                      
                      <div className="mb-4">
                        <div className="text-sm font-semibold mb-1">{t('projects.tools')}:</div>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map(tool => (
                            <span 
                              key={tool}
                              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {selectedProject?.id === project.id && (
                      <div className="w-full md:w-64 h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={project.skills}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={80}
                              paddingAngle={5}
                              dataKey="value"
                              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                              {project.skills.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-4">
                    <div className="flex space-x-3">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    
                    <button
                      onClick={() => setSelectedProject(selectedProject?.id === project.id ? null : project)}
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      {selectedProject?.id === project.id ? t('projects.viewLess') : t('projects.viewDetails')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

