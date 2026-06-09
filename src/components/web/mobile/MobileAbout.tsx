"use client";

import { motion } from "framer-motion";
import aboutData from "@/data/about.json";

export function MobileAbout() {
  const bio = aboutData.bio;
  return (
    <section id="about" className="py-16 bg-background">
      <div className="px-5">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-muted-foreground text-[13px] leading-relaxed whitespace-pre-wrap">
            {bio}
          </p>
        </motion.div>

        {/* My Approach */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-sm font-bold tracking-wider text-muted-foreground capitalize mb-4">My Approach</h3>
          <div className="flex flex-col gap-3">
            {aboutData.approaches.map((item) => (
              <div key={item.step} className="flex items-center gap-3 bg-card border border-border rounded-lg p-3">
                <div className="w-8 h-8 shrink-0 rounded bg-secondary text-secondary-foreground font-bold flex items-center justify-center text-xs">
                  {item.step}
                </div>
                <span className="text-foreground/90 text-xs font-medium leading-snug">{item.title}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-between items-center bg-secondary/30 rounded-xl p-5 border border-border/50"
        >
          {aboutData.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h4 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h4>
              <p className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider max-w-[70px] mx-auto leading-tight">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
