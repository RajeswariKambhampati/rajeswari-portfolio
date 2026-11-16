# Rajeswari Kambhampati — Data Science Portfolio

## 1. Install prerequisites
- Install Node.js LTS from https://nodejs.org/
- Install Visual Studio Code from https://code.visualstudio.com/
- Extract this ZIP and open the `rajeswari-portfolio` folder in VS Code.

## 2. Open the VS Code terminal
Select **Terminal → New Terminal** and run:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (usually http://localhost:5173).

## 3. Personalize before publishing
Open `src/App.jsx` and update:
- Your exact project repository URLs in the `projects` array.
- Your email address (`YOUR_EMAIL@example.com`) in the contact section.
- Internship description to match the work you actually do.
- Skills so they reflect tools you can confidently discuss.
- Add a resume PDF link only after placing your resume in the `public` folder.

Also update the page title and description in `index.html` if desired.

## 4. Check the production build
```bash
npm run build
```
If successful, Vite creates a `dist` folder.

## 5. Publish on GitHub
Create a new public repository on GitHub, for example `rajeswari-portfolio`.
In the VS Code terminal, from this project folder, run:

```bash
git init
git add .
git commit -m "Create personal data science portfolio"
git branch -M main
git remote add origin https://github.com/RajeswariKambhampati/rajeswari-portfolio.git
git push -u origin main
```

If Git asks you to sign in, complete the GitHub authentication in your browser.

## 6. Deploy on Vercel
- Sign in at https://vercel.com/ using GitHub.
- Choose **Add New → Project**.
- Import `rajeswari-portfolio`.
- Framework should be detected as Vite.
- Build command: `npm run build`
- Output directory: `dist`
- Click Deploy.

After deployment, Vercel gives you a public website URL. Add it to your LinkedIn Featured section and Contact Info.

## Notes
This is a starter portfolio template. Replace placeholder details and verify every project link before publishing. Do not claim skills, work or results you have not actually completed.
