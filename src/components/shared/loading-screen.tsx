"use client";

import { Cloud } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-300 ease-in-out",
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex items-center space-x-3">
        <Cloud className="h-8 w-8 text-accent animate-pulse" />
        <span className="font-bold font-headline text-2xl animate-pulse">Ryan Hanafi</span>
      </div>
       <p className="mt-4 text-muted-foreground text-sm">Crafting digital experiences...</p>
    </div>
  );
};

export default LoadingScreen;
