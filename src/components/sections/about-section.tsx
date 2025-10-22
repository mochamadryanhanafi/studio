"use client";

import { skills } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/lib/i18n';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center animate-in fade-in duration-700 ease-out">
        <div className="space-y-6">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('about.title')}
          </h2>
          <div className="space-y-4 text-lg leading-8 text-foreground/80">
            <p>{t('about.paragraph1')}</p>
            <p>{t('about.paragraph2')}</p>
          </div>
        </div>
        <div className="space-y-6">
           <h3 className="font-headline text-2xl font-bold text-foreground">
            {t('about.skillset')}
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="default" 
                className="text-sm py-2 px-4 shadow-md text-primary-foreground bg-primary hover:bg-primary/80 transition-all duration-300 transform hover:scale-105"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
