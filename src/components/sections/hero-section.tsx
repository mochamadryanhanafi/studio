"use client";

import { Badge } from '@/components/ui/badge';
import { skills, type Skill } from '@/lib/data';
import { useTranslation } from '@/lib/i18n';
import AnimateOnScroll from '../interactive/animate-on-scroll';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { t } = useTranslation();

   const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-[calc(100dvh-8rem)] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-transparent"></div>
      <AnimateOnScroll isReady={true} variant='zoom-in' className="relative z-10 container px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {t('hero.title')}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80 sm:text-xl">
          {t('hero.subtitle')}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {skills.slice(0, 5).map((skill) => (
            <Badge key={skill.name} variant="default" className="text-sm py-2 px-4 shadow-md text-primary-foreground backdrop-blur-sm">
              {skill.name}
            </Badge>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default HeroSection;
