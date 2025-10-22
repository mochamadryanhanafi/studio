'use client';

import { certificates } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Certificates & Credentials
        </h2>
        <p className="mt-6 text-lg leading-8 text-foreground/80">
          A collection of my professional certifications and credentials, showcasing my commitment to continuous learning and expertise.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        {certificates.map((cert) => (
          <Card 
            key={cert.id} 
            className="flex flex-col overflow-hidden bg-background/50 border-border/60 shadow-lg shadow-primary/5 transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
          >
            <CardHeader className='p-0'>
              <div className="aspect-video overflow-hidden">
                <Image
                  src={cert.imageUrl}
                  alt={cert.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={cert.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <CardTitle className="font-headline text-2xl">{cert.title}</CardTitle>
              <p className="mt-2 text-base text-foreground/70">{cert.issuer}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between items-center">
               <Badge variant="secondary">{cert.year}</Badge>
               <Button asChild variant="outline" size="sm">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    Verify <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
