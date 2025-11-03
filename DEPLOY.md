# Deployment Guide

Your Expense Calculator is ready to deploy! Here are multiple deployment options:

## Option 1: Vercel (Recommended - Easiest & Free)

### Steps:

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```
   This will open your browser to authenticate with Vercel.

3. **Deploy**:
   ```bash
   vercel --yes
   ```
   
   When prompted:
   - Set up and deploy? **Yes**
   - Which scope? **Select your account**
   - Link to existing project? **No**
   - What's your project's name? **expense-calculator** (or any name you prefer)
   - In which directory is your code located? **./** (just press Enter)

4. **Get your deployment URL**:
   After deployment, you'll get a URL like: `https://expense-calculator-xxx.vercel.app`

5. **Make it production** (optional):
   ```bash
   vercel --prod
   ```

---

## Option 2: Netlify Drop (Easiest - No CLI needed!)

### Steps:

1. **Go to Netlify Drop**: https://app.netlify.com/drop

2. **Drag and drop your project folder** onto the page

3. **Get your deployment URL** immediately!

4. **Optional**: You can customize the URL in Netlify settings

---

## Option 3: Netlify CLI

### Steps:

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**:
   ```bash
   netlify login
   ```

3. **Deploy**:
   ```bash
   netlify deploy
   ```
   
   When prompted:
   - Create & configure a new site? **Yes**
   - Team: **Select your team**
   - Site name: **expense-calculator** (or any name)
   - Publish directory: **./** (just press Enter)

4. **Deploy to production**:
   ```bash
   netlify deploy --prod
   ```

---

## Option 4: GitHub Pages

### Steps:

1. **Create a GitHub repository**:
   - Go to GitHub and create a new repository
   - Push your code to GitHub

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select source: **Deploy from a branch**
   - Branch: **main** (or master)
   - Folder: **/ (root)**
   - Click Save

3. **Access your site**:
   Your site will be at: `https://yourusername.github.io/repository-name`

---

## Option 5: Render (Free Static Site Hosting)

### Steps:

1. **Go to**: https://render.com
2. **Sign up** for free account
3. **Create New → Static Site**
4. **Connect your GitHub repository** (or upload files)
5. **Configure**:
   - Build Command: (leave empty for static sites)
   - Publish Directory: **/**
6. **Deploy** - Get your URL immediately!

---

## Quick Deploy Script

I've created a helper script. Run:

```bash
chmod +x deploy.sh
./deploy.sh
```

This will guide you through Vercel deployment.

---

## After Deployment

Your expense calculator will be:
- ✅ Accessible from anywhere in the world
- ✅ Using HTTPS (secure)
- ✅ Fast loading with CDN
- ✅ Free hosting (for static sites)

All your data is stored in browser localStorage, so it will work the same way online as it does locally!

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **GitHub Pages Docs**: https://docs.github.com/en/pages

