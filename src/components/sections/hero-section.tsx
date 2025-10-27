"use client";

import PaperAirplaneAnimation from '@/components/interactive/paper-airplane-animation';
import { Badge } from '@/components/ui/badge';
import { skills, type Skill } from '@/lib/data';
import { useTranslation } from '@/lib/i18n';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full h-[calc(100dvh-3.5rem)] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      <PaperAirplaneAnimation />
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {t('hero.title')}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80 sm:text-xl">
          {t('hero.subtitle')}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {skills.slice(0, 5).map((skill) => (
            <Badge key={skill.name} variant="default" className="text-sm py-2 px-4 shadow-md text-primary-foreground">
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
