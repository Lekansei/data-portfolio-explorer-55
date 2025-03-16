
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Info } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft';
  description?: string;
}

const Skills = () => {
  const { t } = useLanguage();
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<'technical' | 'soft' | null>(null);
  
  const skills: Skill[] = [
    // Technical skills avec descriptions détaillées
    { 
      name: "SQL & Bases de Données", 
      level: 9, 
      category: 'technical',
      description: "Requêtes avancées, optimisation, gestion de bases relationnelles, indexation, normalisation, CTE, fonctions fenêtres."
    },
    { 
      name: "Python pour l'Analyse & Modélisation", 
      level: 8, 
      category: 'technical',
      description: "Pandas, NumPy, manipulation et nettoyage de données, feature engineering, pipelines de modélisation."
    },
    { 
      name: "Data Visualization & Reporting", 
      level: 8, 
      category: 'technical',
      description: "Power BI (DAX, relations complexes), Tableau, Matplotlib, Seaborn."
    },
    { 
      name: "Machine Learning & Data Science", 
      level: 7, 
      category: 'technical',
      description: "Supervised/Unsupervised Learning (K-Means, Random Forest, Gradient Boosting), évaluation de modèles (F1 Score, Matrice de Confusion, SHAP values)."
    },
    { 
      name: "Automatisation & Workflow Data", 
      level: 8, 
      category: 'technical',
      description: "KNIME, automatisation de rapports, web scraping, API, automatisation Python."
    },
    { 
      name: "Conformité & Gestion des Données Sensibles", 
      level: 9, 
      category: 'technical',
      description: "Anonymisation, RGPD, gestion des accès aux données, reporting et audit de données."
    },
    
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
      subject: skill.name.length > 15 ? skill.name.substring(0, 15) + '...' : skill.name,
      fullName: skill.name,
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

  // Tooltip personnalisé
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-background/95 dark:bg-navy/95 p-2 rounded-md border border-border shadow-lg">
          <p className="font-medium">{data.fullName || data.subject}</p>
          <p className="text-sm">Niveau: {data.A}/10</p>
          {data.description && (
            <p className="text-xs text-slate dark:text-slate-light max-w-xs mt-1">{data.description}</p>
          )}
        </div>
      );
    }
    return null;
  };
  
  // Composant pour afficher les détails des compétences
  const SkillsDetailDialog = ({ category }: { category: 'technical' | 'soft' }) => {
    const skillsList = category === 'technical' ? technicalSkills : softSkills;
    const title = category === 'technical' ? "Compétences Techniques" : "Soft Skills";
    
    return (
      <Dialog>
        <DialogTrigger asChild>
          <button className="text-primary flex items-center gap-1 text-sm font-medium hover:underline">
            <Info size={16} />
            <span>Voir détails</span>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">{title}</DialogTitle>
            <DialogDescription>
              Détail de mes compétences {category === 'technical' ? 'techniques' : 'interpersonnelles'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {skillsList.map((skill) => (
              <div 
                key={skill.name}
                className="p-4 rounded-lg bg-background/50 dark:bg-navy-light/50 border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="font-medium text-lg">{skill.name}</h4>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">{skill.level}/10</span>
                  </div>
                </div>
                <div className="w-full bg-border h-1 mb-3 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${category === 'technical' ? 'bg-primary' : 'bg-green-500'}`}
                    style={{ width: `${(skill.level / 10) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-slate dark:text-slate-light">{skill.description}</p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
  return (
    <section id="skills" className="section-padding">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-heading">{t('skills.title')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <div className="glass p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">{t('skills.hard')}</h3>
              <SkillsDetailDialog category="technical" />
            </div>
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
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">{t('skills.soft')}</h3>
              <SkillsDetailDialog category="soft" />
            </div>
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
