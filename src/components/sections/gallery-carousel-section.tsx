"use client";

import Image from "next/image";
import { galleryImages } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/lib/i18n";

export default function GalleryCarouselSection() {
  const { t } = useTranslation();
  // Duplicate images for a seamless loop
  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <section id="gallery" className="py-24 sm:py-32 animate-in fade-in duration-700 ease-out">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('gallery.title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            {t('gallery.subtitle')}
          </p>
        </div>
      <div className="w-full overflow-hidden">
        <div className="flex animate-scroll-x group hover:animation-pause">
          {duplicatedImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video relative">
                      <Image
                        src={image.imageUrl}
                        alt={image.imageHint}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  </CardContent>
                </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
