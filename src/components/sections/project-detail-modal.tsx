"use client";

import type { Project } from '@/lib/data';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function ProjectDetailModal({ project, isOpen, onOpenChange }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="pt-2 text-base text-foreground/80">
            {project.projectContext}
          </DialogDescription>
        </DialogHeader>
        <div className="pt-4">
          <h4 className="font-semibold text-foreground">Keywords</h4>
          <p className="text-foreground/80">{project.keywords}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
