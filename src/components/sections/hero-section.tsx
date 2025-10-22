import { Button } from '@/components/ui/button';
import Hero3D from '@/components/interactive/hero-3d';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <section className="relative w-full h-[calc(100dvh-3.5rem)] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      <Hero3D />
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          Crafting Digital Realities
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80 sm:text-xl animate-in fade-in slide-in-from-bottom-10 duration-1000 ease-out delay-200">
          Welcome to my Digital Canvas, a curated collection of projects where design meets innovation. Explore my work in the world of modern web development and decentralized technologies.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-out delay-400">
          <Button size="lg" onClick={handleScrollToContact}>
            Get in Touch
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
