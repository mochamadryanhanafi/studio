"use client";

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import TimelineSection from '@/components/sections/timeline-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import ContactSection from '@/components/sections/contact-section';
import CertificatesSection from '@/components/sections/certificates-section';
import GalleryCarouselSection from '@/components/sections/gallery-carousel-section';
import ProfileCalloutSection from '@/components/sections/profile-callout-section';
import AchievementsSection from '@/components/sections/achievements-section';
import AnimateOnScroll from '@/components/interactive/animate-on-scroll';
import LoadingScreen from '@/components/shared/loading-screen';
import ServicesSection from '@/components/sections/services-section';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimationReady, setIsAnimationReady] = useState(false);

  useEffect(() => {
    // Hide the loading screen after a delay to allow animations to initialize.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust delay as needed

    // Allow content animations to start after the loading screen is gone.
    const animationTimer = setTimeout(() => {
        setIsAnimationReady(true);
    }, 2200);

    return () => {
        clearTimeout(timer);
        clearTimeout(animationTimer);
    };
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div 
        className={`flex flex-col min-h-dvh bg-transparent transition-opacity duration-500 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      >
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimateOnScroll variant="zoom-in" isReady={isAnimationReady}>
              <ProfileCalloutSection />
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" isReady={isAnimationReady}>
              <AchievementsSection />
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-right" isReady={isAnimationReady}>
              <AboutSection />
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" isReady={isAnimationReady}>
              <TimelineSection />
            </AnimateOnScroll>
            <AnimateOnScroll variant="zoom-in" isReady={isAnimationReady}>
              <PortfolioSection />
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" isReady={isAnimationReady}>
              <CertificatesSection />
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-right" isReady={isAnimationReady}>
              <GalleryCarouselSection />
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" isReady={isAnimationReady}>
              <ServicesSection />
            </AnimateOnScroll>
            <AnimateOnScroll variant="zoom-in" isReady={isAnimationReady}>
              <ContactSection />
            </AnimateOnScroll>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
