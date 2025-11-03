# GitHub Pages Deployment Guide

Your project is ready for GitHub Pages! Follow these steps:

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Repository name: `expense-calculator` (or any name you prefer)
3. Description: "Expense Calculator Web App"
4. Make it **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

## Step 2: Connect and Push Your Code

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/expense-calculator.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right of the repository)
3. Scroll down to **Pages** (in the left sidebar)
4. Under **Source**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

## Step 4: Access Your Live Site

After a few minutes, your site will be available at:
```
https://YOUR_USERNAME.github.io/expense-calculator/
```

(Replace `YOUR_USERNAME` with your GitHub username and `expense-calculator` with your repository name)

## Quick Commands Reference

```bash
# Check your current remote (after setup)
git remote -v

# Push updates
git add .
git commit -m "Your commit message"
git push
```

## Notes

- ✅ Your site will update automatically when you push changes
- ✅ It may take 1-2 minutes after enabling Pages for the site to go live
- ✅ HTTPS is enabled automatically
- ✅ Custom domain can be added later in Settings → Pages

## Troubleshooting

If your site doesn't load:
1. Check Settings → Pages to ensure it's enabled
2. Wait 2-3 minutes for GitHub to build
3. Clear your browser cache
4. Check the Actions tab in your repository for any build errors

---

**Ready to deploy?** Follow the steps above!

