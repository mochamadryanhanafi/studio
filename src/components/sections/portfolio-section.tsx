"use client";

import { useState } from 'react';
import { projects, type Project } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import ProjectDetailModal from './project-detail-modal';
import { useTranslation } from '@/lib/i18n';
import PaperAirplaneAnimation from '../interactive/paper-airplane-animation';

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useTranslation();

  return (
    <>
      <section id="portfolio" className="py-24 sm:py-32 relative">
        <PaperAirplaneAnimation />
        <div className="relative z-10">
            <div className="mx-auto max-w-2xl text-center animate-in fade-in duration-700 ease-out">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t('portfolio.title')}
              </h2>
              <p className="mt-6 text-lg leading-8 text-foreground/80">
                {t('portfolio.subtitle')}
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 animate-in fade-in duration-700 ease-out">
              {projects.map((project) => (
                <Card 
                  key={project.id} 
                  className="flex flex-col overflow-hidden bg-background/50 border-accent/20 shadow-lg shadow-accent/5 transition-all hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 cursor-pointer hover:border-accent/40"
                  onClick={() => setSelectedProject(project)}
                >
                  <CardHeader>
                    <div className="aspect-video overflow-hidden rounded-lg border">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={project.imageHint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                    <p className="mt-2 text-base text-foreground/70">{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex-col items-start gap-4">
                     <div className="flex gap-2">
                        <Button asChild variant="outline" onClick={(e) => e.stopPropagation()}>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            {t('portfolio.liveDemo')} <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                        <Button asChild variant="outline" onClick={(e) => e.stopPropagation()}>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> GitHub
                          </a>
                        </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
        </div>
      </section>
      <ProjectDetailModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)} 
      />
    </>
  );
};

export default PortfolioSection;
