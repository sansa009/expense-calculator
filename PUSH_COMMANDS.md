# Push Commands for sansa009

After you get your Personal Access Token, run:

```bash
cd "/Users/shailabbh/New project"
git push -u origin main
```

When prompted:
- Username: `sansa009`
- Password: [paste your Personal Access Token here]

---

## Alternative: Use Token in URL (One-time)

You can also use the token directly in the command (replace YOUR_TOKEN):

```bash
git remote set-url origin https://sansa009:YOUR_TOKEN@github.com/sansa009/expense-calculator.git
git push -u origin main
```

---

## After Successful Push

1. Enable GitHub Pages:
   - Go to: https://github.com/sansa009/expense-calculator/settings/pages
   - Source: Branch `main`, Folder `/ (root)`
   - Click Save

2. Your site will be live at:
   ```
   https://sansa009.github.io/expense-calculator/
   ```

