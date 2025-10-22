"use client";

import Image from 'next/image';
import { skills } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/lib/i18n';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center animate-in fade-in duration-700 ease-out">
        <div className="lg:col-span-1 flex flex-col items-center text-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mb-4">
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
        <div className="lg:col-span-2">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('about.title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            {t('about.paragraph1')}
          </p>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            {t('about.paragraph2')}
          </p>
          <div className="mt-10">
            <h3 className="font-headline text-2xl font-bold text-foreground text-center mb-6">
              {t('about.skillset')}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
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
      </div>
    </section>
  );
};

export default AboutSection;
