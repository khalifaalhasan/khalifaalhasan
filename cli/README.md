# Repofolio CLI Development Guide

This directory contains the source code for the `create-repofolio` CLI tool.
This guide explains how to test the CLI locally without publishing it to NPM, and how to publish it when you're ready.

## 🛠️ Testing the CLI Locally

If you make changes to `index.ts` and want to test how the CLI behaves locally, follow these steps:

1. **Navigate to the CLI directory** (if you aren't already there):
   ```bash
   cd cli
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the CLI**:
   The CLI is written in TypeScript, so you must compile it to JavaScript first.
   ```bash
   npm run build
   ```

4. **Link the package locally**:
   Use `npm link` to create a global symlink on your computer pointing to this directory.
   ```bash
   npm link
   ```

5. **Test the CLI anywhere**:
   Now, you can open any folder on your computer and run your CLI just like a real user would:
   ```bash
   create-repofolio
   ```
   *Note: Because you used `npm link`, you type `create-repofolio` instead of `npx create-repofolio`.*

6. **Unlinking (Optional)**:
   If you want to remove the global link later, run this inside the `cli` folder:
   ```bash
   npm unlink -g
   ```

## 🚀 Publishing to NPM

Once you are satisfied with your changes and have tested them locally, you can publish the new version to NPM.

1. **Update the version**:
   Open `cli/package.json` and update the `"version"` field (e.g., from `"1.0.0"` to `"1.0.1"`).

2. **Build the project again** (just to be safe):
   ```bash
   npm run build
   ```

3. **Login to NPM** (if you haven't already):
   ```bash
   npm login
   ```

4. **Publish the package**:
   ```bash
   npm publish
   ```
   *(If this is a scoped package like `@username/create-repofolio`, you might need `npm publish --access public`)*

---
**💡 Pro Tip:** If you update the main portfolio template (the Next.js app in the root directory), you do **NOT** need to publish a new NPM version of the CLI. The CLI uses `degit` to pull the latest code directly from GitHub! You only need to publish to NPM if you change the actual `cli/index.ts` script.
