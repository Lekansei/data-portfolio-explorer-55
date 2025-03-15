
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft';
}

const Skills = () => {
  const { t } = useLanguage();
  
  const skills: Skill[] = [
    { name: t('skills.python'), level: 9, category: 'technical' },
    { name: t('skills.sql'), level: 8, category: 'technical' },
    { name: t('skills.powerbi'), level: 7, category: 'technical' },
    { name: t('skills.tableau'), level: 6, category: 'technical' },
    { name: t('skills.ml'), level: 6, category: 'technical' },
    { name: t('skills.pandas'), level: 8, category: 'technical' },
    { name: t('skills.numpy'), level: 7, category: 'technical' },
    { name: t('skills.scikitlearn'), level: 6, category: 'technical' },
    { name: t('skills.communication'), level: 8, category: 'soft' },
    { name: t('skills.problemsolving'), level: 9, category: 'soft' },
    { name: t('skills.teamwork'), level: 7, category: 'soft' },
    { name: t('skills.adaptability'), level: 8, category: 'soft' },
  ];
  
  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');
  
  const formatSkillsForRadar = (skills: Skill[]) => {
    return skills.map(skill => ({
      subject: skill.name,
      A: skill.level,
      fullMark: 10,
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
                  <Tooltip />
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
                  <Tooltip />
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
