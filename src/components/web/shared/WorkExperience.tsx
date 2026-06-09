"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: "1",
    company: "TechCorp Inc.",
    role: "Senior Backend Engineer",
    date: "Jan 2023 - Present",
    responsibilities: [
      "Architected and deployed microservices using Go and gRPC, improving system throughput by 40%.",
      "Migrated legacy monolithic PostgreSQL database to a sharded architecture.",
      "Mentored junior engineers and established CI/CD best practices using GitHub Actions.",
    ],
  },
  {
    id: "2",
    company: "StartupXYZ",
    role: "DevOps Engineer",
    date: "Mar 2021 - Dec 2022",
    responsibilities: [
      "Designed and maintained Kubernetes clusters across AWS and GCP using Terraform.",
      "Implemented automated monitoring and alerting with Prometheus and Grafana.",
      "Reduced cloud infrastructure costs by 25% through resource optimization and spot instances.",
    ],
  },
  {
    id: "3",
    company: "Digital Agency",
    role: "Fullstack Developer",
    date: "Jun 2019 - Feb 2021",
    responsibilities: [
      "Developed high-performance web applications using React, Next.js, and Node.js.",
      "Integrated third-party payment gateways and CRM APIs.",
      "Optimized frontend performance, achieving 95+ Lighthouse scores across all metrics.",
    ],
  },
];

export function WorkExperience() {
  return (
    <section id="experience" className="py-24 bg-background/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-accent" />
        </motion.div>

        <div className="relative border-l border-border ml-3 md:ml-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="mb-12 relative pl-8 md:pl-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 rounded-full bg-accent -left-[8.5px] top-1.5 ring-4 ring-background shadow-[0_0_10px_var(--color-accent)]" />

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <span className="text-sm font-mono text-accent">{exp.date}</span>
              </div>
              
              <h4 className="text-lg font-medium text-muted-foreground mb-4">{exp.company}</h4>
              
              <ul className="space-y-2 text-muted-foreground">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="relative pl-4">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-border" />
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
