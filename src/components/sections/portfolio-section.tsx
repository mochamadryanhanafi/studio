"use client";

import { projects } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioSection = () => {

  return (
    <>
      <section id="portfolio" className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Portfolio
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            Here are some of the projects I'm proud to have worked on. Each one represents a unique challenge and a step forward in my journey as a developer.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden bg-background/50 border-border/60 shadow-lg shadow-primary/5 transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
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
                    <Button asChild variant="outline">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
