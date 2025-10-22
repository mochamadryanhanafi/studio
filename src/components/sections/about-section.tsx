"use client";

import { skills, type Skill } from '@/lib/data';
import { useTranslation } from '@/lib/i18n';
import { Badge } from '@/components/ui/badge';
import About3D from '../interactive/about-3d';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <About3D />
      <div className="flex flex-col gap-16 animate-in fade-in duration-700 ease-out relative z-10">
        <div className="grid grid-cols-1 items-center">
            <div className="space-y-6 max-w-2xl mx-auto text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t('about.title')}
              </h2>
              <div className="space-y-4 text-lg leading-8 text-foreground/80">
                <p>{t('about.paragraph1')}</p>
                <p>{t('about.paragraph2')}</p>
              </div>
            </div>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto w-full">
           <h3 className="font-headline text-2xl font-bold text-foreground text-center">
            {t('about.skillset')}
          </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill) => (
                <Badge key={skill.name} variant="default" className="text-sm py-2 px-4 shadow-md bg-primary text-primary-foreground hover:bg-primary/80 transition-all duration-300 transform hover:scale-105">
                  {skill.name}
                </Badge>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
