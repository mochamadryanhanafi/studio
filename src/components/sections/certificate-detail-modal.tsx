"use client";

import type { Certificate } from '@/lib/data';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface CertificateDetailModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function CertificateDetailModal({ certificate, isOpen, onOpenChange }: CertificateDetailModalProps) {
  const { t } = useTranslation();
  if (!certificate) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">{certificate.title}</DialogTitle>
          <DialogDescription>{certificate.issuer} - {certificate.year}</DialogDescription>
        </DialogHeader>
        <div className="pt-4 space-y-6">
            <div className="aspect-video relative overflow-hidden rounded-lg border">
                <Image
                src={certificate.imageUrl}
                alt={certificate.title}
                fill
                className="object-cover"
                data-ai-hint={certificate.imageHint}
                />
            </div>
            <div className='text-center'>
                 <Button asChild variant="outline">
                  <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                    {t('certificateModal.verify')} <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
