"use client";

import { motion } from "framer-motion";
import resumeData from "@/data/resume.json";

export function DesktopExperience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold tracking-tight mb-6 uppercase text-foreground/90 border-b border-border pb-2">Work Experience</h2>
          <div className="space-y-6">
            {resumeData.work.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-row justify-between items-start gap-4"
              >
                <div>
                  <h3 className="font-semibold text-foreground text-base">{item.company}</h3>
                  <p className="text-muted-foreground text-sm">{item.role}</p>
                </div>
                <div className="text-muted-foreground text-sm font-mono whitespace-nowrap">
                  {item.date}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership */}
        {resumeData.leadership && resumeData.leadership.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold tracking-tight mb-6 uppercase text-foreground/90 border-b border-border pb-2">Leadership</h2>
            <div className="space-y-6">
              {resumeData.leadership.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-row justify-between items-start gap-4"
                >
                  <div>
                    <h3 className="font-semibold text-foreground text-base">{item.organization}</h3>
                    <p className="text-muted-foreground text-sm">{item.role}</p>
                  </div>
                  <div className="text-muted-foreground text-sm font-mono whitespace-nowrap">
                    {item.date}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold tracking-tight mb-6 uppercase text-foreground/90 border-b border-border pb-2">Education</h2>
          <div className="space-y-6">
            {resumeData.education.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-row justify-between items-start gap-4"
              >
                <div className="max-w-2xl">
                  <h3 className="font-semibold text-foreground text-base">{item.school}</h3>
                  <p className="text-muted-foreground text-sm">{item.degree}</p>
                </div>
                <div className="text-muted-foreground text-sm font-mono whitespace-nowrap">
                  {item.date}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
