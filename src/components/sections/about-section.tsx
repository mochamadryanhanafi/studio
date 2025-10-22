"use client";

import { skills, type Skill } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/lib/i18n';
import Image from 'next/image';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="flex flex-col gap-12 animate-in fade-in duration-700 ease-out">
        <div className="space-y-6 max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('about.title')}
          </h2>
          <div className="space-y-4 text-lg leading-8 text-foreground/80">
            <p>{t('about.paragraph1')}</p>
            <p>{t('about.paragraph2')}</p>
          </div>
        </div>
        <div className="space-y-6 max-w-3xl mx-auto w-full">
           <h3 className="font-headline text-2xl font-bold text-foreground text-center">
            {t('about.skillset')}
          </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill) => (
                <Badge key={skill.name} variant="default" className="text-sm py-2 px-4 shadow-md">
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
