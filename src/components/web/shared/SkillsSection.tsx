"use client";

import { motion } from "framer-motion";

import skillsData from "@/data/skills.json";
import { SectionHeader } from "@/components/web/shared/SectionHeader";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <SectionHeader title="Skills" />
          <p className="text-xs md:text-sm font-medium text-muted-foreground capitalize">
            Crafting scalable infrastructure and clean code
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {skillsData.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-xl md:rounded-2xl bg-card border border-border p-4 md:p-8 min-h-[160px] md:min-h-[300px] overflow-hidden"
            >
              <h3 className="text-xs md:text-xl font-bold mb-4 md:mb-8 text-foreground leading-tight md:leading-normal truncate md:whitespace-normal">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-1.5 md:gap-3">
                {cat.skills.map((skill) => (
                  <div key={skill} className="px-2 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl border border-border bg-secondary/50 text-[9px] md:text-xs font-medium text-muted-foreground whitespace-nowrap">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
