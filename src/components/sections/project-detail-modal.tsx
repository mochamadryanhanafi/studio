"use client";

import type { Project } from '@/lib/data';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
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
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div>
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
          </div>
          <div className="space-y-4">
            <div>
              <DialogDescription className="text-base text-foreground/80">
                {project.projectContext}
              </DialogDescription>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{t('projectModal.keywords')}</h4>
              <p className="text-foreground/80">{project.keywords}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
