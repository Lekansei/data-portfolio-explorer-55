
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
  tools: string;
  image: string;
  github?: string;
  demo?: string;
  categories: string[];
  skills: Skill[];
}

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Define project categories/filters
  const filters = [
    { id: 'all', label: t('projects.filter.all') },
    { id: 'sql', label: t('projects.filter.sql') },
    { id: 'python', label: t('projects.filter.python') },
    { id: 'powerbi', label: t('projects.filter.powerbi') },
    { id: 'ml', label: t('projects.filter.ml') },
  ];
  
  // Define projects
  const projects: Project[] = [
    {
      id: 'sales',
      title: t('projects.sales.title'),
      description: t('projects.sales.description'),
      tools: t('projects.sales.tools'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      github: 'https://github.com',
      demo: 'https://example.com',
      categories: ['sql', 'python'],
      skills: [
        { name: 'SQL', value: 40, color: '#3498db' },
        { name: 'Python', value: 35, color: '#2ecc71' },
        { name: 'Pandas', value: 25, color: '#9b59b6' },
      ]
    },
    {
      id: 'dashboard',
      title: t('projects.dashboard.title'),
      description: t('projects.dashboard.description'),
      tools: t('projects.dashboard.tools'),
      image: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
      github: 'https://github.com',
      demo: 'https://example.com',
      categories: ['powerbi'],
      skills: [
        { name: 'DAX', value: 55, color: '#3498db' },
        { name: 'Power BI', value: 45, color: '#f39c12' },
      ]
    },
    {
      id: 'equality',
      title: t('projects.equality.title'),
      description: t('projects.equality.description'),
      tools: t('projects.equality.tools'),
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
      github: 'https://github.com',
      categories: ['sql'],
      skills: [
        { name: 'KNIME', value: 30, color: '#e74c3c' },
        { name: 'Tableau', value: 45, color: '#3498db' },
        { name: 'GDPR', value: 25, color: '#2ecc71' },
      ]
    },
    {
      id: 'counterfeit',
      title: t('projects.counterfeit.title'),
      description: t('projects.counterfeit.description'),
      tools: t('projects.counterfeit.tools'),
      image: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
      github: 'https://github.com',
      demo: 'https://example.com',
      categories: ['python', 'ml'],
      skills: [
        { name: 'Scikit-Learn', value: 40, color: '#f39c12' },
        { name: 'Random Forest', value: 35, color: '#2ecc71' },
        { name: 'K-Means', value: 25, color: '#9b59b6' },
      ]
    }
  ];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="section-padding bg-secondary/30 dark:bg-navy-light/20">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-heading">{t('projects.title')}</h2>
        
        {/* Filter buttons */}
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className={cn(
                "glass overflow-hidden card-hover transition-all",
                selectedProject?.id === project.id ? "md:col-span-2" : ""
              )}
            >
              <div className="flex flex-col h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-slate dark:text-slate-light mb-4">{project.description}</p>
                      
                      <div className="mb-4">
                        <div className="text-sm font-semibold mb-1">Tools:</div>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.split(', ').map(tool => (
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
                      {selectedProject?.id === project.id ? "View Less" : "View Details"}
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
