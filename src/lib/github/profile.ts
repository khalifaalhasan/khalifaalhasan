import { ProfileData } from "./types";
import { GITHUB_PAT, getFetchOptions } from "./config";

export async function fetchProfileData(username: string = "khalifaalhasan"): Promise<ProfileData | null> {
  try {
    const fetchOptions = getFetchOptions();

    // 2. Fetch User Meta (do this first for fallbacks)
    const userRes = await fetch(`https://api.github.com/users/${username}`, fetchOptions);
    const userData = userRes.ok ? await userRes.json() : {};

    let headline = userData.bio || "Software Engineer";
    let bio = "";
    
    // 3. Fetch Contributions via GraphQL
    let totalContributions = 0;
    let contributionWeeks = [];
    if (GITHUB_PAT) {
      const graphqlQuery = `
        query {
          user(login: "${username}") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    contributionLevel
                  }
                }
              }
            }
          }
        }
      `;
      const graphqlRes = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: fetchOptions.headers,
        body: JSON.stringify({ query: graphqlQuery }),
        next: { revalidate: 3600 },
      });
      if (graphqlRes.ok) {
        const graphqlData = await graphqlRes.json();
        const calendar = graphqlData?.data?.user?.contributionsCollection?.contributionCalendar;
        totalContributions = calendar?.totalContributions || 0;
        contributionWeeks = calendar?.weeks || [];
      }
    }

    // 4. Fetch Social Accounts
    const socialRes = await fetch(`https://api.github.com/users/${username}/social_accounts`, fetchOptions);
    const socialData = socialRes.ok ? await socialRes.json() : [];
    
    let linkedin = null;
    let instagram = null;
    let youtube = null;
    let facebook = null;

    if (Array.isArray(socialData)) {
      for (const account of socialData) {
        const url = account.url.toLowerCase();
        if (url.includes('linkedin.com')) linkedin = account.url;
        else if (url.includes('instagram.com')) instagram = account.url;
        else if (url.includes('youtube.com')) youtube = account.url;
        else if (url.includes('facebook.com')) facebook = account.url;
      }
    }

    return { 
      name: userData.name || username,
      headline, 
      bio,
      avatarUrl: userData.avatar_url,
      email: userData.email || null,
      socials: {
        twitter: userData.twitter_username ? `https://twitter.com/${userData.twitter_username}` : null,
        website: userData.blog && userData.blog.trim() !== "" ? (userData.blog.startsWith('http') ? userData.blog : `https://${userData.blog}`) : null,
        github: userData.html_url || `https://github.com/${username}`,
        linkedin,
        instagram,
        youtube,
        facebook
      },
      totalContributions,
      contributionWeeks
    };
  } catch (e) {
    console.error("Failed to fetch profile data:", e);
    return null;
  }
}
