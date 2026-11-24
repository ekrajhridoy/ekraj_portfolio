# Ariful Ekraj Hridoy: Portfolio

React + Vite, frontend only. Content lives in `src/data/portfolio.js`.

## Run locally
1. Install Node.js (LTS) from https://nodejs.org and a code editor such as VS Code.
2. In this folder run:
   ```
   npm install
   npm run dev
   ```
3. Open the address it prints (usually http://localhost:5173).

## Upload to GitHub
1. Create an empty repository on github.com (no README).
2. In this folder run:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

## Deploy on GitHub Pages (github.io)
1. Push the project to GitHub (steps above).
2. On GitHub open your repository > Settings > Pages > Build and deployment > Source: choose **GitHub Actions**.
3. Open the Actions tab and wait for "Deploy to GitHub Pages" to turn green (about 1 minute). If it did not start, click it > Run workflow.
4. Your site is at `https://YOUR-USERNAME.github.io/YOUR-REPO/`.
5. Every `git push` to `main` redeploys automatically.

## Edit later
- Text, skills, links, projects, awards: `src/data/portfolio.js`. To add a project, copy a block in `projects`.
- Project links: fill `link` (live demo) and `repo` (GitHub). Empty values hide the button.
- CV: replace `public/cv.pdf` with a new file of the same name.
- Colors and fonts: the variables at the top of `src/index.css`.
- After any edit: `git add . && git commit -m "Update" && git push`.
