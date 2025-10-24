"use client";

import { useTranslation } from '@/lib/i18n';
import { workExperience, education, type TimelineItem as TimelineItemType } from '@/lib/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';
import Timeline3D from '../interactive/timeline-3d';

const TimelineItem = ({ item }: { item: TimelineItemType }) => (
  <li className="mb-10 ms-6">
    <span className="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary ring-8 ring-background">
      {item.type === 'work' ? <Briefcase className="h-4 w-4" /> : <GraduationCap className="h-4 w-4" />}
    </span>
    <Card className="ml-4 border-l-4 border-primary/50 bg-background/50 shadow-md transition-all hover:shadow-primary/10 hover:border-primary">
        <CardHeader>
            <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
            <CardDescription className="text-base !mt-1">
                {item.company} | <time className="text-sm font-medium leading-none text-foreground/70">{item.date}</time>
            </CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-base font-normal text-foreground/80">{item.description}</p>
        </CardContent>
    </Card>
  </li>
);

const TimelineSection = () => {
  const { t } = useTranslation();

  return (
    <section id="timeline" className="py-24 sm:py-32 relative">
      <Timeline3D />
      <div className="mx-auto max-w-4xl text-center relative z-10">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t('timeline.title')}
        </h2>
        <p className="mt-6 text-lg leading-8 text-foreground/80">
          {t('timeline.subtitle')}
        </p>

        <Tabs defaultValue="experience" className="w-full mt-16">
          <TabsList className="grid w-full grid-cols-2 max-w-sm mx-auto">
            <TabsTrigger value="experience">{t('timeline.experience')}</TabsTrigger>
            <TabsTrigger value="education">{t('timeline.education')}</TabsTrigger>
          </TabsList>
          <TabsContent value="experience" className="mt-12 text-left">
            <ol className="relative border-s border-border/50">
              {workExperience.map((item, index) => (
                <TimelineItem key={`work-${index}`} item={item} />
              ))}
            </ol>
          </TabsContent>
          <TabsContent value="education" className="mt-12 text-left">
             <ol className="relative border-s border-border/50">
              {education.map((item, index) => (
                <TimelineItem key={`edu-${index}`} item={item} />
              ))}
            </ol>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TimelineSection;
