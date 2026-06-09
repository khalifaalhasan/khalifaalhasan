"use client";

import { motion } from "framer-motion";

import servicesData from "@/data/services.json";
import { SectionHeader } from "@/components/web/shared/SectionHeader";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <SectionHeader title="Services" />
          <p className="text-xs md:text-sm font-medium text-muted-foreground capitalize">
            Designing clean scalable resilient systems
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col justify-between rounded-xl md:rounded-2xl bg-card border border-border p-4 md:p-8 min-h-[180px] md:min-h-[380px]"
            >
              <div>
                <h3 className="text-xs md:text-2xl font-bold mb-2 md:mb-6 text-foreground leading-tight md:leading-snug break-words">
                  {service.title.replace('\n', ' ')}
                </h3>
                <p className="text-muted-foreground text-[10px] md:text-sm leading-snug md:leading-relaxed mb-4 md:mb-8 line-clamp-3 md:line-clamp-none">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-col gap-2 md:gap-3">
                {service.pills.map((pill) => (
                  <div key={pill} className="px-2 md:px-4 py-1.5 md:py-2.5 rounded-lg md:rounded-xl border border-border bg-secondary/50 text-[9px] md:text-xs font-medium text-secondary-foreground text-center md:text-left truncate">
                    {pill}
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
