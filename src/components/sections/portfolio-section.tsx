
"use client";

import { useState } from 'react';
import { projects, type Project } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import ProjectDetailModal from './project-detail-modal';
import { useTranslation } from '@/lib/i18n';
import PaperAirplaneAnimation from '../interactive/paper-airplane-animation';

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();

  const projectsToShow = showAll ? projects : projects.slice(0, 4);

  return (
    <>
      <section id="portfolio" className="py-24 sm:py-32 relative">
        <PaperAirplaneAnimation />
        <div className="relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t('portfolio.title')}
              </h2>
              <p className="mt-6 text-lg leading-8 text-foreground/80">
                {t('portfolio.subtitle')}
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              {projectsToShow.map((project) => (
                <Card 
                  key={project.id} 
                  className="group flex flex-col overflow-hidden bg-background/50 border-accent/20 shadow-lg shadow-accent/5 transition-all hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 cursor-pointer hover:border-accent/40"
                  onClick={() => setSelectedProject(project)}
                >
                   <div className="relative">
                    <div className="aspect-video overflow-hidden">
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            width={800}
                            height={600}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={project.imageHint}
                        />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="mt-2 text-base text-foreground/70 line-clamp-3">{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex-col items-start gap-4">
                     {project.github && (
                        <div className="flex gap-2">
                            <Button asChild variant="outline" onClick={(e) => e.stopPropagation()}>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" /> GitHub
                              </a>
                            </Button>
                        </div>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
            {projects.length > 4 && (
              <div className="mt-12 text-center">
                <Button variant="secondary" onClick={() => setShowAll(!showAll)}>
                  {showAll ? t('portfolio.showLess') : t('portfolio.showMore')}
                  {showAll ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            )}
             <div className="mt-12 text-center">
                <Button asChild variant="secondary" className="group transition-all duration-300 ease-in-out hover:scale-105">
                    <a href="https://www.linkedin.com/in/mochamad-ryan-hanafi/details/projects/" target="_blank" rel="noopener noreferrer">
                        More on LinkedIn
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </Button>
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

    
