"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/web/shared/SectionHeader";
import { ExternalLink, Github, ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProjectImage } from "@/components/web/shared/ProjectImage";
import { Project } from "@/lib/github";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 6);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <SectionHeader title="Featured Projects" />
          <div className="w-20 h-1 bg-accent" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col justify-between rounded-xl md:rounded-2xl bg-card border border-border transition-all hover:-translate-y-1 hover:shadow-lg hover:border-accent/50 overflow-hidden"
            >
              {/* Invisible link covering the entire card */}
              <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10" aria-label={`View details for ${project.title}`} />
              
              <div className="relative z-0 pointer-events-none flex flex-col h-full">
                {project.images && project.images.length > 0 && (
                  <ProjectImage 
                    src={project.images[0]} 
                    fallbackSrc={project.images[1]}
                    alt={project.title} 
                    containerClassName="border-b border-border/50 shrink-0"
                    imageClassName="group-hover:scale-105"
                    priority={index < 4}
                  />
                )}
                <div className="flex-1 p-4 md:p-6 pb-0">
                  <h3 className="text-xs md:text-xl font-bold mb-2 md:mb-3 group-hover:text-accent transition-colors truncate md:whitespace-normal leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-[10px] md:text-sm mb-4 md:mb-6 leading-snug md:leading-relaxed line-clamp-3 md:line-clamp-none">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-[9px] md:text-xs px-1.5 md:px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative z-20 flex items-center gap-3 md:gap-4 pt-3 md:pt-4 border-t border-border/50 mt-auto mx-4 md:mx-6 mb-4 md:mb-6">
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub Repository">
                    <Github className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                ) : project.isPrivateRepo ? (
                  <div className="text-muted-foreground/50" aria-label="Private Repository" title="Private Repository">
                    <Lock className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                ) : null}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Live Demo">
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 md:mt-12 flex justify-center"
        >
          <Link href="/projects">
            <Button variant="outline" className="rounded-full px-6 gap-2 border-border/50 text-muted-foreground hover:text-foreground">
              See All Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
