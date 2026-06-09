"use client";

import { motion } from "framer-motion";
import aboutData from "@/data/about.json";

export function DesktopAbout() {
  const bio = aboutData.bio;
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">About Me</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto whitespace-pre-wrap">
            {bio}
          </p>
        </motion.div>

        {/* My Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-xl font-bold text-center mb-6">My Approach</h3>
          <div className="grid grid-cols-3 gap-4">
            {aboutData.approaches.map((item) => (
              <div key={item.step} className="flex flex-row items-start gap-4 bg-card border border-border rounded-xl p-4 text-left">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-secondary text-secondary-foreground font-bold flex items-center justify-center text-sm">
                  {item.step}
                </div>
                <span className="text-muted-foreground text-sm font-medium leading-normal">{item.title}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-24"
        >
          {aboutData.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h4 className="text-5xl font-bold mb-2">{stat.value}</h4>
              <p className="text-sm font-medium text-muted-foreground tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
