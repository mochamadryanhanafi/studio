"use client";
import { Github, Phone, Linkedin, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
        <div className="flex items-center gap-2">
           <a href="#" className="flex items-center space-x-2">
              <Cloud className="h-6 w-6 text-accent" />
              <span className="font-bold font-headline text-lg">Ryan Hanafi</span>
            </a>
        </div>
         <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Ryan Hanafi. {t('footer.rights')}.
          </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/mochamadryanhanafi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://wa.me/6285860516408" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <Phone className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/mochamad-ryan-hanafi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
