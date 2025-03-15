
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const TypewriterText = ({ texts, speed = 100, delay = 1500 }: { texts: string[], speed?: number, delay?: number }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), delay);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? speed / 2 : speed, 50));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts, speed, delay]);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div className="h-8 md:h-10">
      <span className="text-primary font-mono text-lg md:text-xl">
        {`${texts[index].substring(0, subIndex)}`}
        <span className={`typing-cursor ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
      </span>
    </div>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  
  const specialties = [
    "Data Analyst",
    "Data Visualization",
    "SQL & Python Expert",
    "Machine Learning Enthusiast"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 dark:to-navy-dark/50 z-0"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="space-y-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="block">John Doe</span>
                <span className="text-primary block mt-2">{t('hero.subtitle')}</span>
              </h1>
              
              <TypewriterText texts={specialties} />
              
              <p className="text-lg md:text-xl text-slate dark:text-slate-light mt-4 max-w-2xl mx-auto lg:mx-0">
                {t('hero.description')}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <a 
                href="#contact" 
                className="btn-primary px-6 py-3 rounded-lg text-base"
              >
                {t('hero.cta')}
              </a>
              
              <div className="flex items-center space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                
                <a 
                  href="mailto:email@example.com" 
                  className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-primary/10 absolute -top-6 -left-6 animate-pulse"></div>
              <div className="w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-xl glass">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="John Doe - Data Analyst" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#experience" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float text-foreground/70 hover:text-primary transition-colors"
      >
        <span className="text-sm mb-2">{t('hero.scroll')}</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
