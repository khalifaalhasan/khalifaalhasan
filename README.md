<div align="center">
  <h1>🚀 Repofolio</h1>
  <p><strong>The ultimate Zero-DB, GitHub-driven portfolio generator for Software Engineers.</strong></p>
</div>

<br />

**Repofolio** is a blazing fast, zero-configuration portfolio template that builds itself. It completely eliminates the need for databases, CMS, or manual data entry by securely fetching your live GitHub data (Profile, Pinned Repositories, Tech Stacks, and Organizations) directly via the GitHub API.

## ✨ Key Features

- **🚫 Zero Database:** No Supabase, Firebase, or PostgreSQL needed. Your GitHub account *is* the database.
- **⚡ Fully Automated:** Automatically fetches your GitHub Bio, Company, Avatar, and Pinned Repositories.
- **🎨 Glassmorphism UI & Themes:** Stunning, modern design with multiple built-in themes (Default, Twitter, Candyland, Claymorphism, Modern Minimal, Vercel, Cyberpunk).
- **🪄 CLI Scaffolding:** Generate your entire portfolio codebase in 5 seconds using our interactive CLI.
- **🖼️ Smart Thumbnails:** Just drop a `thumbnail.png` in any of your GitHub repositories, and Repofolio will automatically use it as the project cover.
- **🌍 Live Website Previews:** Automatically generates live screenshots of your projects via Microlink API if a `homepage` URL is set.
- **📌 Priority Featured Repos:** Want to highlight a specific repo? Add the `featured` topic to your GitHub repo and it will automatically override your pinned repos!
- **🍴 Forked Repo Support:** Forked repositories are automatically included if you explicitly add the `portfolio` topic to them.
- **🔒 Private Repo Support:** Securely fetches and displays private repositories (requires PAT) while gracefully handling their assets and links.
- **👥 Automated Contributors Display:** Magically fetches all human contributors for each repository and displays their interactive GitHub profiles on the Project Details page (ignoring automated bots like dependabot).
- **🛠️ Tech Stack Auto-Detection:** Dynamically parses your `package.json` and GitHub topics to display your project's technology stack.
- **🚀 SEO & Performance:** Built on Next.js App Router with Server-Side Rendering (SSR) and aggressive image optimization caching with dynamic OpenGraph cache busters.

---

## 📦 Quick Start

The fastest way to launch your portfolio is using our CLI tool. Open your terminal and run:

```bash
npx create-portfolio@latest
```

The CLI will ask you for:
1. Your project name (e.g., `my-portfolio`)
2. Your GitHub Username
3. Optional GitHub Organizations to fetch repositories from
4. Your preferred UI Theme

Once the scaffolding is complete, `cd` into your new project directory:

```bash
cd my-portfolio
npm install
```

---

## ⚙️ Configuration (Crucial Step)

Because Repofolio fetches data directly from your GitHub, you **must** provide a GitHub Personal Access Token (PAT) to bypass API rate limits and access your repositories.

1. Open the `.env` file in the root of your new project.
2. Go to your [GitHub Developer Settings](https://github.com/settings/tokens) to generate a new **Classic Token**.
3. **Permissions:** Check `repo` (for private repos and thumbnails) and `read:user`.
4. Paste the token into your `.env` file:

```env
NEXT_PUBLIC_GITHUB_USERNAME="your-github-username"
GITHUB_PAT="ghp_your_generated_token_here"
```

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` and watch the magic happen! ✨

---

## 📁 The `repofolio` Directory (Custom Assets)

Want to add a custom image or a long, detailed explanation for a specific project? **It's insanely easy:**

Simply create a folder named `repofolio` in the **root directory** of your repository on GitHub. Inside this folder, you can add:

1. **`thumbnail.png`** (or `.jpg`, `.svg`, `.webp`): Repofolio will dynamically detect the image, proxy it securely, and display it as your stunning project cover! *(Note: placing it in the root directory still works for backwards compatibility).*
2. **`description.md`** (or `description.txt`): Write an extended overview, background story, or architecture explanation. Repofolio will automatically fetch this file and render it beautifully on the Project Details page below the Overview section!

> **💡 Pro Tip (Microlink Anti-Bot Workaround):**
> If your live website is protected by Cloudflare or aggressive Anti-Bot firewalls, the automated Microlink screenshot API might fail to capture it. In this case, simply take a manual screenshot and upload it as `repofolio/thumbnail.png`. This custom thumbnail will always take priority and override the automated screenshot!

---

## 🚀 Deployment

Repofolio is optimized for Vercel. 

1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. **Important:** Add `NEXT_PUBLIC_GITHUB_USERNAME` and `GITHUB_PAT` to your Vercel Environment Variables before deploying!
4. Click Deploy.

---

## 🛠️ CLI Development

If you want to modify the CLI or test it locally without publishing to NPM, please refer to the **[CLI Development Guide](cli/README.md)**.

---

<div align="center">
  <p>Built with ❤️ by Developers, for Developers.</p>
</div>
# khalifaalhasan
