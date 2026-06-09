"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Instagram, Youtube, Facebook, Globe } from "lucide-react";
import Link from "next/link";
import { ProfileData } from "@/lib/github";
import { ContributionGraph } from "@/components/web/shared/ContributionGraph";
import heroData from "@/data/hero.json";

export function MobileHero({ profileData }: { profileData: ProfileData | null }) {
  const mainTitle = heroData.headline;
  const subTitle = heroData.subHeadline;
  
  const bio = heroData.description;
  return (
    <section id="home" className="min-h-[90vh] flex flex-col items-center justify-start pt-8 pb-24 px-4 text-center">
      
      {/* Avatar / Portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative w-36 h-36 rounded-full overflow-hidden border border-border/50 bg-secondary/30 mb-8 mx-auto flex items-center justify-center shadow-2xl"
      >
        {profileData?.avatarUrl ? (
          <img src={profileData.avatarUrl} alt="Portrait" className="w-full h-full object-cover relative z-10" />
        ) : (
          <span className="text-muted-foreground text-[10px] font-mono">Portrait</span>
        )}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none" />
      </motion.div>

      {/* Greeting Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold bg-secondary/80 text-secondary-foreground mb-6 border border-border/50">
          👋 I am {profileData?.name || "Developer"}
        </span>
      </motion.div>
      
      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full"
      >
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.2] mb-4">
          {mainTitle}<br /> 
          <span className="text-muted-foreground text-xl mt-1 block">{subTitle}</span>
        </h1>
      </motion.div>
      
      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-[13px] text-muted-foreground mb-8 leading-relaxed max-w-[280px] mx-auto font-medium"
      >
        {bio}
      </motion.p>
      
      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col items-center gap-4 w-full max-w-[260px]"
      >
        <Button size="lg" variant="secondary" className="rounded-full w-full font-bold h-12 text-sm shadow-lg shadow-background/50" onClick={() => window.open('/resume/dummy.pdf', '_blank')}>
          Download CV
        </Button>
        
        <div className="flex flex-col items-center gap-4 text-secondary-foreground w-full mt-2">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {profileData?.socials?.linkedin && (
              <Link href={profileData.socials.linkedin} target="_blank" className="hover:text-foreground transition-all hover:-translate-y-1 p-3.5 rounded-full bg-secondary/30 border border-border/50">
                <Linkedin className="w-5 h-5" />
              </Link>
            )}
            {profileData?.socials?.twitter && (
              <Link href={profileData.socials.twitter} target="_blank" className="hover:text-foreground transition-colors p-3.5 rounded-full bg-secondary/30 border border-border/50">
                <Twitter className="w-5 h-5" />
              </Link>
            )}
            {profileData?.socials?.instagram && (
              <Link href={profileData.socials.instagram} target="_blank" className="hover:text-foreground transition-colors p-3.5 rounded-full bg-secondary/30 border border-border/50">
                <Instagram className="w-5 h-5" />
              </Link>
            )}
            {profileData?.socials?.youtube && (
              <Link href={profileData.socials.youtube} target="_blank" className="hover:text-foreground transition-colors p-3.5 rounded-full bg-secondary/30 border border-border/50">
                <Youtube className="w-5 h-5" />
              </Link>
            )}
            {profileData?.socials?.facebook && (
              <Link href={profileData.socials.facebook} target="_blank" className="hover:text-foreground transition-colors p-3.5 rounded-full bg-secondary/30 border border-border/50">
                <Facebook className="w-5 h-5" />
              </Link>
            )}
            <Link href={profileData?.socials?.github || "#"} target="_blank" className="hover:text-foreground transition-all hover:-translate-y-1 p-3.5 rounded-full bg-secondary/30 border border-border/50">
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </motion.div>
      
      {/* Contribution Graph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full mt-8"
      >
        <ContributionGraph profileData={profileData} />
      </motion.div>
      
    </section>
  );
}
