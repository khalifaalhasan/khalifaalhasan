export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  challengeDescription?: string | null;
  features?: string[] | null;
  images: string[];
  techStack: string[];
  githubUrl: string | null;
  githubFullName?: string;
  isPrivateRepo?: boolean;
  isHidden?: boolean;
  liveUrl: string | null;
  featured: boolean;
  customTitle?: string | null;
  customDescription?: string | null;
  ownerName?: string;
  ownerAvatarUrl?: string;
  ownerUrl?: string;
  contributors?: { login: string; avatar_url: string; html_url: string }[];
}

export interface ContributionDay {
  date: string;
  contributionCount: number;
  contributionLevel: string;
}

export interface ProfileData {
  name: string;
  headline: string;
  bio: string;
  avatarUrl?: string;
  email?: string | null;
  socials?: {
    twitter?: string | null;
    website?: string | null;
    github?: string;
    linkedin?: string | null;
    instagram?: string | null;
    youtube?: string | null;
    facebook?: string | null;
  };
  totalContributions?: number;
  contributionWeeks?: {
    contributionDays: ContributionDay[];
  }[];
}
