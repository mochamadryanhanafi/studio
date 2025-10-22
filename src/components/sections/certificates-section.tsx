'use client';

import { useState } from 'react';
import { certificates, type Certificate } from '@/lib/data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';
import CertificateDetailModal from './certificate-detail-modal';
import { useTranslation } from '@/lib/i18n';

const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const { t } = useTranslation();

  return (
    <>
      <section id="certificates" className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center animate-in fade-in duration-700 ease-out">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('certificates.title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            {t('certificates.subtitle')}
          </p>
        </div>
        <div className="mt-16 mx-auto max-w-3xl space-y-6 animate-in fade-in duration-700 ease-out">
          {certificates.map((cert) => (
            <Card
              key={cert.id}
              className="group flex items-center overflow-hidden bg-background/50 border-border/60 shadow-lg shadow-primary/5 transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedCertificate(cert)}
            >
              <CardHeader className="p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Award className="h-6 w-6" />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <p className="font-headline text-lg font-semibold">{cert.title}</p>
                <p className="text-sm text-foreground/70">{cert.issuer}</p>
              </CardContent>
              <div className="p-4">
                 <Badge variant="secondary">{cert.year}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <CertificateDetailModal
        certificate={selectedCertificate}
        isOpen={!!selectedCertificate}
        onOpenChange={(isOpen) => !isOpen && setSelectedCertificate(null)}
      />
    </>
  );
};

export default CertificatesSection;
