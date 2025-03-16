
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft';
  description?: string;
}

const Skills = () => {
  const { t } = useLanguage();
  
  const skills: Skill[] = [
    // Technical skills
    { name: t('skills.python'), level: 9, category: 'technical' },
    { name: t('skills.sql'), level: 8, category: 'technical' },
    { name: t('skills.powerbi'), level: 7, category: 'technical' },
    { name: t('skills.tableau'), level: 6, category: 'technical' },
    { name: t('skills.ml'), level: 6, category: 'technical' },
    { name: t('skills.pandas'), level: 8, category: 'technical' },
    { name: t('skills.numpy'), level: 7, category: 'technical' },
    { name: t('skills.scikitlearn'), level: 6, category: 'technical' },
    
    // Soft skills avec descriptions détaillées
    { 
      name: "Communication & Vulgarisation", 
      level: 8, 
      category: 'soft',
      description: "Capacité à expliquer des concepts techniques à un public non-tech."
    },
    { 
      name: "Résolution de Problèmes & Esprit Critique", 
      level: 9, 
      category: 'soft',
      description: "Détection des biais, rigueur analytique, optimisation des solutions."
    },
    { 
      name: "Adaptabilité & Apprentissage Rapide", 
      level: 8, 
      category: 'soft',
      description: "Capacité à monter en compétence rapidement selon les besoins du projet."
    },
    { 
      name: "Autonomie & Prise d'Initiative", 
      level: 7, 
      category: 'soft',
      description: "Gestion de projet en solo, prise de décisions data-driven."
    },
    { 
      name: "Gestion de Projet & Travail en Équipe", 
      level: 7, 
      category: 'soft',
      description: "Organisation Agile, travail collaboratif avec d'autres analystes/data engineers."
    },
    { 
      name: "Conformité & Éthique des Données", 
      level: 8, 
      category: 'soft',
      description: "Respect des normes RGPD, responsabilité dans l'utilisation des data."
    },
  ];
  
  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');
  
  const formatSkillsForRadar = (skills: Skill[]) => {
    return skills.map(skill => ({
      subject: skill.name,
      A: skill.level,
      fullMark: 10,
      description: skill.description,
    }));
  };
  
  const technicalRadarData = formatSkillsForRadar(technicalSkills);
  const softRadarData = formatSkillsForRadar(softSkills);
  
  const toolsAndTechnologies = [
    { name: 'Python', color: '#3776AB' },
    { name: 'SQL', color: '#F29111' },
    { name: 'Power BI', color: '#F2C811' },
    { name: 'Tableau', color: '#E97627' },
    { name: 'Pandas', color: '#150458' },
    { name: 'NumPy', color: '#4DABCF' },
    { name: 'Scikit-Learn', color: '#F89939' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'MySQL', color: '#4479A1' },
    { name: 'Git', color: '#F05032' },
    { name: 'VS Code', color: '#007ACC' },
    { name: 'Jupyter', color: '#F37626' },
    { name: 'Excel', color: '#217346' },
    { name: 'KNIME', color: '#FFD700' },
  ];

  // Tooltip personnalisé pour afficher les descriptions des soft skills
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-background/95 dark:bg-navy/95 p-2 rounded-md border border-border shadow-lg">
          <p className="font-medium">{data.subject}</p>
          <p className="text-sm">Niveau: {data.A}/10</p>
          {data.description && (
            <p className="text-xs text-slate dark:text-slate-light max-w-xs mt-1">{data.description}</p>
          )}
        </div>
      );
    }
    return null;
  };
  
  return (
    <section id="skills" className="section-padding">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-heading">{t('skills.title')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-6">{t('skills.hard')}</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} data={technicalRadarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 10]} />
                  <Radar
                    name={t('skills.hard')}
                    dataKey="A"
                    stroke="#3498db"
                    fill="#3498db"
                    fillOpacity={0.6}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-6">{t('skills.soft')}</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} data={softRadarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 10]} />
                  <Radar
                    name={t('skills.soft')}
                    dataKey="A"
                    stroke="#2ecc71"
                    fill="#2ecc71"
                    fillOpacity={0.6}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        {/* Liste détaillée des soft skills */}
        <div className="glass p-6 rounded-xl mb-12">
          <h3 className="text-xl font-bold mb-6">Détail des Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((skill) => (
              <div 
                key={skill.name}
                className="p-4 rounded-lg bg-background/50 dark:bg-navy-light/50 border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: '#2ecc71' }}
                  ></div>
                  <h4 className="font-medium">{skill.name}</h4>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <div className="text-sm text-slate dark:text-slate-light">Niveau:</div>
                  <div className="flex gap-0.5">
                    {[...Array(10)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${i < skill.level ? 'bg-primary' : 'bg-border'}`}
                      ></div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate dark:text-slate-light">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tools and Technologies */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-6">{t('skills.tools')}</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {toolsAndTechnologies.map((tool, index) => (
              <div 
                key={tool.name}
                className="px-4 py-2 rounded-full text-white font-medium text-sm shadow-md transition-transform hover:scale-105"
                style={{ 
                  backgroundColor: tool.color,
                  transform: `scale(1)`,
                  animation: `float 3s ease-in-out ${index * 0.2}s infinite`
                }}
              >
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
