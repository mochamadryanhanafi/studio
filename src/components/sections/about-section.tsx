"use client";

import { skills, type Skill } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/lib/i18n';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="flex flex-col gap-12 animate-in fade-in duration-700 ease-out">
         <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mb-4">
                <Image
                    src="https://picsum.photos/seed/avatar/200/200"
                    alt="Profile Picture"
                    width={200}
                    height={200}
                    className="object-cover"
                    data-ai-hint="person portrait"
                />
            </div>
            <h3 className="font-headline text-2xl font-bold text-foreground">Jane Doe</h3>
            <p className="text-lg text-foreground/80">Full-Stack Web3 Developer</p>
        </div>
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
          <TooltipProvider>
            <div className="flex flex-wrap gap-4 justify-center">
              {skills.map((skill) => (
                <Tooltip key={skill.name}>
                  <TooltipTrigger asChild>
                    <div 
                      className="cursor-pointer p-3 rounded-lg shadow-md text-primary-foreground bg-primary hover:bg-primary/80 transition-all duration-300 transform hover:scale-110 flex items-center justify-center h-14 w-14"
                    >
                      {skill.icon ? <skill.icon className="h-7 w-7" /> : null}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;