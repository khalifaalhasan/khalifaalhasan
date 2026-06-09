"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ThemeToggle } from "@/components/web/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ProfileData } from "@/lib/github";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
];

export function DesktopNavbar({ profileData }: { profileData?: ProfileData | null }) {
  const [activeHash, setActiveHash] = useState("/#home");
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;
      const sections = navLinks.map(link => link.href.substring(2));
      
      let current = sections[0];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            current = section;
          }
        }
      }
      
      if (current) {
        setActiveHash(`/#${current}`);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // init
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="absolute top-0 w-full z-40 pt-6 pb-4 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between pointer-events-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group pointer-events-auto">
          <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-transform group-hover:scale-105 border border-primary/20 shadow-sm">
            <Terminal size={18} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-xl tracking-tight transition-colors group-hover:text-primary lowercase">
            {process.env.NEXT_PUBLIC_GITHUB_USERNAME || "dev"}<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {profileData?.email && (
            <a href={`mailto:${profileData.email}`}>
              <Button variant="secondary" className="rounded-full font-medium px-6 shadow-sm hidden sm:inline-flex">
                Let&apos;s Talk
              </Button>
            </a>
          )}
        </div>
      </div>
    </header>

    {/* Sticky Pill Nav */}
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto hidden md:block"
    >
      <nav className="flex items-center p-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-md">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (window.location.pathname === "/") {
                      e.preventDefault();
                      const targetId = link.href.replace("/#", "");
                      const elem = document.getElementById(targetId);
                      if (elem) {
                        window.scrollTo({ top: elem.offsetTop, behavior: "smooth" });
                        window.history.pushState(null, "", link.href);
                      }
                    }
                    isClickScrolling.current = true;
                    setActiveHash(link.href);
                    setTimeout(() => {
                      isClickScrolling.current = false;
                    }, 1000);
                  }}
                  className={`relative px-5 py-2 text-sm font-medium transition-colors rounded-full ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="desktop-nav-underline"
                      className="absolute left-0 right-0 bottom-1 mx-auto w-8 h-[2px] rounded-full bg-foreground"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </motion.div>
    </>
  );
}
