"use client";
import { Code, Menu, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { ThemeToggle } from '../theme-toggle';
import { useTranslation } from '@/lib/i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, setLanguage, language } = useTranslation();

  const navLinks = [
    { href: '#about', label: t('header.about') },
    { href: '#timeline', label: t('header.timeline') },
    { href: '#portfolio', label: t('header.portfolio') },
    { href: '#certificates', label: t('header.certificates') },
    { href: '#services', label: t('header.services') },
    { href: '#contact', label: t('header.contact') },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-5xl px-4">
      <div className="container flex h-14 items-center rounded-full border border-border/40 bg-background/50 backdrop-blur-md">
        <a href="#" className="mr-6 flex items-center space-x-2">
          <Code className="h-6 w-6 text-accent" />
          <span className="font-bold font-headline">Ryan Hanafi</span>
        </a>
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map(({ href, label }) => (
            <a key={label} href={href} onClick={(e) => handleLinkClick(e, href)} className="text-foreground/60 transition-colors hover:text-foreground/80">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Languages className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Toggle language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')} disabled={language === 'en'}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('id')} disabled={language === 'id'}>
                  Indonesia
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
           <ThemeToggle />
          <div className='md:hidden'>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <SheetDescription className="sr-only">Main navigation menu</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-4 p-4">
                  <a href="#" className="mr-6 flex items-center space-x-2 mb-4">
                      <Code className="h-6 w-6 text-accent" />
                      <span className="font-bold font-headline">Ryan Hanafi</span>
                  </a>
                  {navLinks.map(({ href, label }) => (
                    <a key={label} href={href} onClick={(e) => handleLinkClick(e, href)} className="text-lg font-medium text-foreground transition-colors hover:text-accent">
                      {label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
