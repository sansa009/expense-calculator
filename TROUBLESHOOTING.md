# GitHub Pages Troubleshooting Guide

## Issue: Site returning 404

### Step 1: Enable GitHub Pages

1. Go to: https://github.com/sansa009/expense-calculator/settings/pages
2. Under **"Source"** section:
   - Select **"Deploy from a branch"**
   - Branch: Select **"main"**
   - Folder: Select **"/ (root)"**
3. Click **"Save"**

### Step 2: Wait for Deployment

- GitHub Pages takes **1-3 minutes** to build and deploy
- After saving, you'll see a green checkmark when it's ready
- Refresh the site: https://sansa009.github.io/expense-calculator/

### Step 3: Verify Repository Settings

1. Go to: https://github.com/sansa009/expense-calculator/settings
2. Scroll down to **"Pages"** in the left sidebar
3. Make sure:
   - ✅ Source is set to **main branch**
   - ✅ Folder is set to **/ (root)**
   - ✅ Custom domain is empty (unless you have one)

### Step 4: Check Actions Tab (if available)

1. Go to: https://github.com/sansa009/expense-calculator/actions
2. Look for any failed deployment workflows
3. If there are errors, they'll be shown here

### Step 5: Verify Files Are Present

Make sure `index.html` is in the root of your repository:
- ✅ index.html
- ✅ style.css
- ✅ script.js

### Common Issues:

**Issue: "Page not found" (404)**
- ✅ Solution: Enable GitHub Pages (Step 1)
- ✅ Wait 2-3 minutes after enabling

**Issue: "Repository not found"**
- ✅ Check: Is the repository public? (Required for free GitHub Pages)
- ✅ Go to Settings → Change repository visibility to Public

**Issue: "Build failed"**
- ✅ Check: Actions tab for error messages
- ✅ Verify: index.html is in the root directory

**Issue: "Still showing old version"**
- ✅ Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- ✅ Wait a few more minutes for cache to update

### Quick Checklist:

- [ ] Repository is **Public**
- [ ] GitHub Pages is **enabled**
- [ ] Source branch is **main**
- [ ] Source folder is **/ (root)**
- [ ] index.html is in **root directory**
- [ ] Waited **2-3 minutes** after enabling

### Alternative: Check Repository Directly

Visit your repository to verify files:
https://github.com/sansa009/expense-calculator

Make sure you can see:
- index.html
- style.css
- script.js

If you can't see these files, the push might have failed. Run:
```bash
git push origin main
```

---

**Need help?** Let me know what error you're seeing!

