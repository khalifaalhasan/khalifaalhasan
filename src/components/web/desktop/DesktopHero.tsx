"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Instagram, Youtube, Facebook, Globe } from "lucide-react";
import Link from "next/link";
import { ProfileData } from "@/lib/github";
import { ContributionGraph } from "@/components/web/shared/ContributionGraph";
import heroData from "@/data/hero.json";

export function DesktopHero({ profileData }: { profileData: ProfileData | null }) {
  const mainTitle = heroData.headline;
  const subTitle = heroData.subHeadline;
  
  const bio = heroData.description;
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start max-w-2xl relative z-20"
        >
          <span className="text-muted-foreground font-medium mb-4 tracking-wide">
            I am {profileData?.name || "Developer"}
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            {mainTitle} <br />
            <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl mt-2 block">{subTitle}</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            {bio}
          </p>
          
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-6">
              <Button size="lg" variant="secondary" className="rounded-full px-8 font-medium" onClick={() => window.open('/resume/dummy.pdf', '_blank')}>
                Download CV
              </Button>
              
              <div className="flex items-center gap-4 text-secondary-foreground">
                {profileData?.socials?.linkedin && (
                  <Link href={profileData.socials.linkedin} target="_blank" className="hover:text-foreground transition-colors p-2 rounded-full bg-secondary/50">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                )}
                {profileData?.socials?.twitter && (
                  <Link href={profileData.socials.twitter} target="_blank" className="hover:text-foreground transition-colors p-2 rounded-full bg-secondary/50">
                    <Twitter className="w-5 h-5" />
                  </Link>
                )}
                {profileData?.socials?.instagram && (
                  <Link href={profileData.socials.instagram} target="_blank" className="hover:text-foreground transition-colors p-2 rounded-full bg-secondary/50">
                    <Instagram className="w-5 h-5" />
                  </Link>
                )}
                {profileData?.socials?.youtube && (
                  <Link href={profileData.socials.youtube} target="_blank" className="hover:text-foreground transition-colors p-2 rounded-full bg-secondary/50">
                    <Youtube className="w-5 h-5" />
                  </Link>
                )}
                {profileData?.socials?.facebook && (
                  <Link href={profileData.socials.facebook} target="_blank" className="hover:text-foreground transition-colors p-2 rounded-full bg-secondary/50">
                    <Facebook className="w-5 h-5" />
                  </Link>
                )}
                <Link href={profileData?.socials?.github || "#"} target="_blank" className="hover:text-foreground transition-colors p-2 rounded-full bg-secondary/50">
                  <Github className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            {/* Contribution Graph */}
            <div className="w-full mt-2">
              <ContributionGraph profileData={profileData} />
            </div>
          </div>
        </motion.div>

        {/* Right Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[450px] lg:h-[500px] w-full max-w-md mx-auto lg:ml-auto lg:mr-0 flex justify-end z-10"
        >
          {/* Avatar / Portrait Image Mock */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-secondary/20 border border-border/50 flex items-center justify-center">
             {profileData?.avatarUrl ? (
               <img src={profileData.avatarUrl} alt="Portrait" className="w-full h-full object-cover rounded-2xl relative z-10 shadow-2xl" />
             ) : (
               <span className="text-muted-foreground text-sm font-mono rotate-[-90deg]">Portrait Placeholder</span>
             )}
             
             {/* Decorative glow matching theme */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/20 blur-[100px] rounded-full pointer-events-none" />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
