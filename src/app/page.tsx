import { ResponsiveNavbar } from "@/components/web/shared/ResponsiveNavbar";
import { ResponsiveHero } from "@/components/web/shared/ResponsiveHero";
import { FeaturedProjects } from "@/components/web/shared/FeaturedProjects";
import { ServicesSection } from "@/components/web/shared/ServicesSection";
import { SkillsSection } from "@/components/web/shared/SkillsSection";
import { ResponsiveAbout } from "@/components/web/shared/ResponsiveAbout";
import { ResponsiveExperience } from "@/components/web/shared/ResponsiveExperience";
import { Footer } from "@/components/web/shared/Footer";
import { Metadata } from "next";
import { Terminal, Key, RefreshCw, ExternalLink, Settings } from "lucide-react";
import heroData from "@/data/hero.json";
import { fetchGithubProjects } from "@/lib/github/projects";
import { fetchProfileData } from "@/lib/github/profile";

export async function generateMetadata(): Promise<Metadata> {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "github";

  return {
    title: `${username} | ${heroData.headline}`,
    description: heroData.description || `Portfolio of ${username}`,
  };
}

export default async function PortfolioPage() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "github";
  const allProjects = await fetchGithubProjects(username);
  const projects = allProjects.filter((p) => !p.isHidden);
  const profileData = await fetchProfileData(username);

  if (!process.env.GITHUB_PAT || !profileData) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-8 bg-background text-foreground relative">
        <div className="max-w-xl w-full bg-card border border-border rounded-xl p-8 md:p-10 shadow-sm relative z-10">
          <div className="w-12 h-12 bg-secondary text-muted-foreground rounded-lg flex items-center justify-center mb-6 border border-border">
            <Terminal size={24} />
          </div>

          <h1 className="text-2xl font-semibold mb-3 tracking-tight">
            Configuration Required
          </h1>
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
            The portfolio environment has been initialized. To fetch your GitHub
            profile and repositories, you need to configure a Personal Access
            Token.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Settings size={20} className="text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">
                  1. Update Environment Variables
                </h3>
                <p className="text-sm text-muted-foreground">
                  Open the{" "}
                  <code className="bg-secondary px-1.5 py-0.5 rounded text-xs font-mono border border-border">
                    .env
                  </code>{" "}
                  file in your project root.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Key size={20} className="text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">
                  2. Provide Access Token
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Assign your GitHub PAT to the{" "}
                  <code className="bg-secondary px-1.5 py-0.5 rounded text-xs font-mono border border-border">
                    GITHUB_PAT
                  </code>{" "}
                  variable.
                </p>
                <a
                  href="https://github.com/settings/tokens"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-medium"
                >
                  Generate a token <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <RefreshCw size={20} className="text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">
                  3. Refresh Application
                </h3>
                <p className="text-sm text-muted-foreground">
                  Reload this page to authenticate and compile your portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <ResponsiveNavbar profileData={profileData} />

      <main className="flex min-h-screen flex-col w-full overflow-hidden relative">
        {/* Dynamic Ambient Background Gradients */}
        <div className="pointer-events-none absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] -z-10 mix-blend-screen" />
        <div className="pointer-events-none absolute top-[10%] -right-[10%] w-[40%] h-[60%] rounded-full bg-accent/20 blur-[120px] -z-10 mix-blend-screen" />

        <ResponsiveHero profileData={profileData} />

        <ResponsiveAbout />
        <ResponsiveExperience />
        <ServicesSection />
        <SkillsSection />
        <FeaturedProjects projects={projects} />
      </main>

      <Footer profileData={profileData} />
    </>
  );
}
