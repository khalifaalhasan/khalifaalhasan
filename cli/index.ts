#!/usr/bin/env node

import * as p from "@clack/prompts";
import degit from "degit";
import path from "path";
import fs from "fs";
import pc from "picocolors";

const TEMPLATE_REPO = "khalifaalhasan/repo-taker-porfolio"; // This is your repo!

async function main() {
  p.intro(pc.cyan(pc.bold(" Zero-DB Portfolio CLI ")));

  const project = await p.group(
    {
      projectName: () =>
        p.text({
          message: "What is your project named?",
          placeholder: "my-portfolio",
          defaultValue: "my-portfolio",
          validate: (value) => {
            if (!value) return "Please enter a project name.";
          },
        }),
      githubUsername: () =>
        p.text({
          message: "What is your GitHub Username?",
          placeholder: "my-github-username",
          validate: (value) => {
            if (!value) return "Username is required!";
          },
        }),
      githubOrgs: () =>
        p.text({
          message:
            "Fetch repos from any specific GitHub Organizations? (comma-separated, leave blank for none)",
          defaultValue: "",
        }),
      theme: () =>
        p.select({
          message: "Choose a default UI Theme",
          options: [
            { label: pc.white("Default"), value: "default" },
            { label: pc.blue("Twitter"), value: "twitter" },
            { label: pc.magenta("Candyland"), value: "candyland" },
            { label: pc.green("Claymorphism"), value: "claymorshphims" },
            { label: pc.gray("Modern Minimal"), value: "modernminimal" },
            { label: pc.bold(pc.white("Vercel")), value: "vercel" },
            { label: pc.yellow("Cyberpunk"), value: "cyberpunk" },
          ],
        }),
    },
    {
      onCancel: () => {
        p.cancel("Setup cancelled.");
        process.exit(1);
      },
    }
  );

  const projectDir = path.resolve(process.cwd(), project.projectName);

  const s = p.spinner();
  s.start(`Downloading template from ${TEMPLATE_REPO}...`);

  try {
    const emitter = degit(TEMPLATE_REPO, {
      cache: false,
      force: true,
      verbose: false,
    });

    await emitter.clone(projectDir);

    s.stop("Template downloaded successfully.");

    // 1. Write the .env file
    p.log.step("Configuring environment variables...");
    const envContent = `NEXT_PUBLIC_GITHUB_USERNAME=${project.githubUsername}

# ==============================================================================
# GITHUB PERSONAL ACCESS TOKEN (PAT)
# ==============================================================================
# Follow these steps to create one:
# 1. Go to https://github.com/settings/tokens
# 2. Click 'Generate new token (classic)'
# 3. Set Expiration: 
#    - 'No expiration': Recommended so your site never breaks.
#    - '1 Year': Better security, but you MUST regenerate it yearly.
# 4. Check the following scopes:
#    - [x] repo (Full control of private repositories)
#    - [x] read:user (Read all user profile data)
# ==============================================================================
GITHUB_PAT=""

GITHUB_ORGS=${project.githubOrgs}
`;
    fs.writeFileSync(path.join(projectDir, ".env"), envContent);

    // 2. Inject Theme into globals.css
    p.log.step(`Applying ${project.theme} theme...`);
    const globalsCssPath = path.join(projectDir, "src/app/globals.css");
    if (fs.existsSync(globalsCssPath)) {
      let cssContent = fs.readFileSync(globalsCssPath, "utf-8");
      // Replace the default theme import with the selected theme
      cssContent = cssContent.replace(
        /@import "\.\.\/styles\/themes\/.+\.css";/g,
        `@import "../styles/themes/${project.theme}.css";`
      );

      fs.writeFileSync(globalsCssPath, cssContent);
      p.log.message(pc.gray("Themes lovingly provided by https://tweakcn.com/"));
    }

    p.note(
      `Open the ${pc.cyan(`${project.projectName}/.env`)} file and add your GitHub PAT:\n\n` +
      pc.gray("1. Go to https://github.com/settings/tokens\n") +
      pc.gray("2. Generate a new classic token with 'repo' and 'read:user' scopes\n") +
      pc.gray(`3. Set ${pc.white('GITHUB_PAT="ghp_your_token"')} inside the .env file`),
      "IMPORTANT NEXT STEP"
    );

    p.outro(
      `Your Zero-DB Portfolio is ready!\n\n` +
      `Run the following commands to start:\n` +
      pc.cyan(`  cd ${project.projectName}\n`) +
      pc.cyan(`  npm install\n`) +
      pc.cyan(`  npm run dev`)
    );

    process.exit(0);
  } catch (error: any) {
    s.stop("Failed to download template.");
    p.log.error(`Error setting up project: ${error.message}`);
    p.cancel(
      "Make sure your template repository is public or you have the correct Git permissions."
    );
    process.exit(1);
  }
}

main().catch(console.error);
