
"use client";

import type { Project } from '@/lib/data';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function ProjectDetailModal({ project, isOpen, onOpenChange }: ProjectDetailModalProps) {
  const { t } = useTranslation();
  
  if (!project) return null;

  const allImages = [project.imageUrl, ...project.detailImageUrls];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="space-y-6 pt-4">
          <Carousel className="w-full">
            <CarouselContent>
              {allImages.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video relative overflow-hidden rounded-lg border">
                    <Image
                      src={img}
                      alt={`${project.title} - image ${index + 1}`}
                      fill
                      className="object-cover"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {allImages.length > 1 && (
              <>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </>
            )}
          </Carousel>
          
          <div className="space-y-4">
            <p className="text-base text-foreground/80">
              {project.projectContext}
            </p>

            <div>
              <h4 className="font-semibold text-foreground mb-2">{t('projectModal.keywords')}</h4>
              <div className="flex flex-wrap gap-2">
                {project.keywords.split(',').map((keyword, i) => (
                  <Badge key={i} variant="secondary">{keyword.trim()}</Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
              {project.github && (
                <Button asChild variant="outline">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

    