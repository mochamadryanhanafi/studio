"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimationVariant = 'fade-up' | 'fade-down' | 'fade-right' | 'zoom-in';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  variant?: AnimationVariant;
}

const AnimateOnScroll = ({ children, className, variant = 'fade-up' }: AnimateOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'aos-element',
        `aos-${variant}`,
        { 'is-visible': isVisible },
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
