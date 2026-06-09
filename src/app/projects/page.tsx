import { fetchGithubProjects } from "@/lib/github";
import Link from "next/link";
import { ProjectImage } from "@/components/web/shared/ProjectImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default async function ProjectsPage() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "github";
  const allProjects = await fetchGithubProjects(username);
  const visibleProjects = allProjects.filter(p => !p.isHidden);
  
  const currentProjects = visibleProjects;
  
  return (
    <main className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">All Projects</h1>
        <div className="w-20 h-1 bg-accent mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {currentProjects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.slug}`} className="group flex flex-col justify-between rounded-xl md:rounded-2xl bg-card border border-border transition-all hover:-translate-y-1 hover:shadow-lg hover:border-accent/50 overflow-hidden">
              <div className="flex flex-col h-full">
                {project.images && project.images.length > 0 && (
                  <ProjectImage 
                    src={project.images[0]} 
                    fallbackSrc={project.images[1]}
                    alt={project.title} 
                    priority={index < 4}
                    containerClassName="border-b border-border/50 shrink-0"
                    imageClassName="group-hover:scale-105"
                  />
                )}
                <div className="flex-1 p-4 md:p-6 pb-0">
                  <h3 className="text-xs md:text-xl font-bold mb-2 md:mb-3 group-hover:text-accent transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-[10px] md:text-sm mb-4 md:mb-6 leading-relaxed line-clamp-3">
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
              <div className="flex items-center gap-4 pt-3 md:pt-4 border-t border-border/50 text-muted-foreground mt-auto mx-4 md:mx-6 mb-4 md:mb-6">
                <span className="text-[10px] md:text-xs font-bold group-hover:text-foreground transition-colors">View Details &rarr;</span>
              </div>
            </Link>
          ))}
        </div>


      </div>
    </main>
  );
}
