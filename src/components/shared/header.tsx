"use client";
import { Code, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { ThemeToggle } from '../theme-toggle';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <a href="#" className="mr-6 flex items-center space-x-2">
          <Code className="h-6 w-6 text-accent" />
          <span className="font-bold font-headline">Digital Canvas</span>
        </a>
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map(({ href, label }) => (
            <a key={label} href={href} onClick={(e) => handleLinkClick(e, href)} className="text-foreground/60 transition-colors hover:text-foreground/80">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
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
                <div className="flex flex-col space-y-4 p-4">
                  <a href="#" className="mr-6 flex items-center space-x-2 mb-4">
                      <Code className="h-6 w-6 text-accent" />
                      <span className="font-bold font-headline">Digital Canvas</span>
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
