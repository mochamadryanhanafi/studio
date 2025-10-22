"use client";

import Hero3D from '@/components/interactive/hero-3d';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/lib/data';
import { useTranslation } from '@/lib/i18n';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full h-[calc(100dvh-3.5rem)] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      <Hero3D />
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl animate-in fade-in duration-1000 ease-out">
          {t('hero.title')}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80 sm:text-xl animate-in fade-in duration-1000 ease-out delay-200">
          {t('hero.subtitle')}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-in fade-in duration-1000 ease-out delay-400">
          {skills.slice(0, 5).map((skill) => (
            <Badge key={skill} variant="default" className="text-sm py-2 px-4 shadow-md text-primary-foreground">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
