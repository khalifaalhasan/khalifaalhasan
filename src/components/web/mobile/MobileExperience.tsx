"use client";

import { motion } from "framer-motion";
import resumeData from "@/data/resume.json";

export function MobileExperience() {
  return (
    <section id="experience" className="py-16 bg-background">
      <div className="px-5">
        
        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-lg font-bold tracking-tight mb-4 capitalize text-foreground/90 border-b border-border pb-1.5">Work Experience</h2>
          <div className="space-y-5">
            {resumeData.work.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col gap-0.5"
              >
                <h3 className="font-semibold text-foreground text-[13px] leading-snug">{item.company}</h3>
                <p className="text-muted-foreground text-[11px] font-medium">{item.role}</p>
                <p className="text-muted-foreground/70 text-[10px] font-mono mt-0.5">{item.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership */}
        {resumeData.leadership && resumeData.leadership.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <h2 className="text-lg font-bold tracking-tight mb-4 capitalize text-foreground/90 border-b border-border pb-1.5">Leadership</h2>
            <div className="space-y-5">
              {resumeData.leadership.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col gap-0.5"
                >
                  <h3 className="font-semibold text-foreground text-[13px] leading-snug">{item.organization}</h3>
                  <p className="text-muted-foreground text-[11px] font-medium">{item.role}</p>
                  <p className="text-muted-foreground/70 text-[10px] font-mono mt-0.5">{item.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-lg font-bold tracking-tight mb-4 capitalize text-foreground/90 border-b border-border pb-1.5">Education</h2>
          <div className="space-y-5">
            {resumeData.education.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col gap-0.5"
              >
                <h3 className="font-semibold text-foreground text-[13px] leading-snug">{item.school}</h3>
                <p className="text-muted-foreground text-[11px] font-medium leading-relaxed">{item.degree}</p>
                <p className="text-muted-foreground/70 text-[10px] font-mono mt-0.5">{item.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
