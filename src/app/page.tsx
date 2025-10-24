import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import TimelineSection from '@/components/sections/timeline-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import ContactSection from '@/components/sections/contact-section';
import CertificatesSection from '@/components/sections/certificates-section';
import GalleryCarouselSection from '@/components/sections/gallery-carousel-section';
import WaveParticleAnimation from '@/components/interactive/wave-particle-animation';
import ProfileCalloutSection from '@/components/sections/profile-callout-section';
import AchievementsSection from '@/components/sections/achievements-section';
import AnimateOnScroll from '@/components/interactive/animate-on-scroll';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <WaveParticleAnimation />
      <main className="flex-grow">
        <HeroSection />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateOnScroll>
            <ProfileCalloutSection />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <AchievementsSection />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <AboutSection />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <TimelineSection />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <PortfolioSection />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <CertificatesSection />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <GalleryCarouselSection />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <ContactSection />
          </AnimateOnScroll>
        </div>
      </main>
      <Footer />
    </div>
  );
}
