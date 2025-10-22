"use client";

import { skills } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/lib/i18n';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start animate-in fade-in duration-700 ease-out">
        <div className="lg:col-span-3">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('about.title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            {t('about.paragraph1')}
          </p>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            {t('about.paragraph2')}
          </p>
        </div>
        <div className="lg:col-span-2">
          <div className="p-6 rounded-lg bg-card border border-border/60 shadow-lg">
            <h3 className="font-headline text-2xl font-bold text-foreground text-center">
              {t('about.skillset')}
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="default" 
                  className="text-sm py-2 px-4 shadow-md text-primary-foreground hover:shadow-accent/40 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
