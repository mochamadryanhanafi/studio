import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import ContactSection from '@/components/sections/contact-section';
import CertificatesSection from '@/components/sections/certificates-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AboutSection />
          <PortfolioSection />
          <CertificatesSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
