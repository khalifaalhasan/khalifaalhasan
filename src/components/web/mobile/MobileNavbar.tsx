"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Home, Layers, User, Code, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/#home", icon: Home },
  { name: "Services", href: "/#services", icon: Layers },
  { name: "About", href: "/#about", icon: User },
  { name: "Skills", href: "/#skills", icon: Code },
  { name: "Projects", href: "/#projects", icon: LayoutGrid },
];

export function MobileNavbar() {
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
          if (rect.top <= window.innerHeight / 2.5) {
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
      {/* Floating Bottom Nav Container */}
      <div className="fixed bottom-6 left-4 right-4 z-50 md:hidden pointer-events-none">
        <nav 
          className="bg-background/90 backdrop-blur-xl border border-border/60 rounded-2xl flex items-center justify-around px-2 py-2.5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] pointer-events-auto"
        >
          {navLinks.map((link) => {
            const isActive = activeHash === link.href;
            const Icon = link.icon;
            
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
                className={`relative flex flex-col items-center justify-center gap-1.5 w-14 h-14 transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-bold tracking-wide">
                  {link.name}
                </span>
                
                {/* Active Underline */}
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-underline"
                    className="absolute bottom-1 w-6 h-[3px] rounded-full bg-foreground"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
