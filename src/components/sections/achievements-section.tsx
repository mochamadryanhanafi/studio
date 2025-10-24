"use client";

import { Award, Lightbulb, Briefcase } from 'lucide-react';

const AchievementsSection = () => {
  const stats = [
    {
      name: "Certifications",
      value: "20+",
      icon: Award,
    },
    {
      name: "Projects Innovations",
      value: "10+",
      icon: Lightbulb,
    },
    {
      name: "Years Works Experience",
      value: "1",
      icon: Briefcase,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Achievements & Projects Completed
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-3xl mx-auto">
            We have successfully completed numerous projects and achieved significant milestones, showcasing our commitment to delivering impactful solutions for clients and partners.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <stat.icon className="h-6 w-6" aria-hidden="true" />
                </div>
              <p className="order-first text-3xl font-semibold tracking-tight text-foreground">{stat.value}</p>
              <p className="text-sm leading-6 text-foreground/70">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
