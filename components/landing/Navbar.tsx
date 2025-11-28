"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#platforms", label: "Platforms" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent border-b border-transparent"
      }`}>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center'>
            <Image
              src='/dawan-tv.png'
              alt='Dawan Media'
              width={200}
              height={40}
              className='h-8 sm:h-10 w-auto'
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-1'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200'>
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className='flex items-center gap-3'>
            <Button
              className='hidden sm:inline-flex bg-dawan-600 hover:bg-dawan-700 text-white'
              asChild>
              <a href='#platforms'>Explore Platforms</a>
            </Button>

            {/* Mobile Menu Sheet */}
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='md:hidden text-muted-foreground hover:text-foreground'>
                  <Menu className='h-5 w-5' />
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='min-w-[80vw] px-2'>
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      src='/dawan-tv.png'
                      alt='Dawan Media'
                      width={150}
                      height={24}
                      className='h-6 w-auto'
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className='flex flex-col gap-1 mt-6'>
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setSheetOpen(false)}
                      className='px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all'>
                      {link.label}
                    </a>
                  ))}
                  <Button
                    className='mt-4 bg-dawan-600 hover:bg-dawan-700 text-white'
                    asChild
                    onClick={() => setSheetOpen(false)}>
                    <a href='#platforms'>Explore Platforms</a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
