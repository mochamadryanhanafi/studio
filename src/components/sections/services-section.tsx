"use client";

import { useTranslation } from "@/lib/i18n";
import { services, type Service } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const ServiceCard = ({ service }: { service: Service }) => {
  const { t } = useTranslation();

  return (
    <Card className="flex flex-col border-border/30 bg-card/50 backdrop-blur-sm shadow-lg shadow-primary/5 transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-accent/40">
      <CardHeader className="items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
          <service.icon className="h-8 w-8" />
        </div>
        <CardTitle className="font-headline text-2xl">{t(service.titleKey)}</CardTitle>
        <CardDescription>{t(service.descriptionKey)}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <p className="text-center text-3xl font-bold font-headline text-primary">
            {t(service.priceRangeKey)}
        </p>
        <ul className="space-y-3 text-foreground/80">
          {service.featuresKey.map((featureKey) => (
            <li key={featureKey} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span>{t(featureKey)}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
            <a href="#contact">
                {t('services.cta')}
                <ArrowRight className="ml-2 h-4 w-4" />
            </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('services.title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            {t('services.subtitle')}
          </p>
        </div>
        <div className="mt-16 mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
