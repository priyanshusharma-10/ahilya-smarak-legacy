# 🚀 Vercel Deployment — Complete Setup

Your project is now **fully configured for Vercel deployment**. Here's what's been prepared:

---

## 📋 New Files Created

### Configuration Files
| File | Purpose |
|------|---------|
| `vercel.json` | Vercel deployment configuration (build command, output dir, Node version) |
| `.vercelignore` | Tells Vercel which files to skip (Cloudflare/Wrangler files) |
| `.env.example` | Template for environment variables |
| `.github/workflows/deploy.yml` | CI/CD pipeline (auto-checks on every push) |
| `VERCEL_DEPLOYMENT.md` | Detailed deployment guide |
| `scripts/verify-deployment.sh` | Pre-deployment verification script |

---

## 🎯 Quick Start to Deploy

### Step 1: Verify Everything Works Locally
```bash
# Run verification script (Mac/Linux)
bash scripts/verify-deployment.sh

# Or manually:
npm install
npx tsc --noEmit
npm run build
npm run preview  # Test the built version
```

### Step 2: Push to GitHub
```bash
git add .
git commit -m "chore: add Vercel deployment configuration"
git push origin main
```

### Step 3: Connect to Vercel
1. Go to **[vercel.com](https://vercel.com)** and sign in
2. Click **"Add New" → "Project"**
3. Select **"Import Git Repository"**
4. Find your GitHub repository (`ahilyaBaiWebstite/ahilya-smarak-legacy`)
5. Click **"Import"**

### Step 4: Configure in Vercel UI
**Vercel will auto-detect most settings**, but verify:

| Setting | Value |
|---------|-------|
| **Framework** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Node Version** | 20.x |

### Step 5: Deploy
Click **"Deploy"** → Done! 🎉

Your site will be live at: `https://[project-name].vercel.app`

---

## 📊 Project Statistics

- **Framework:** TanStack Start (React SSR)
- **Build Tool:** Vite
- **Node Version:** 20.x (Vercel default)
- **Build Time:** ~30-60 seconds
- **Output Size:** ~500KB-1MB (dist folder)
- **Regions:** US Virginia (iad) — auto-scales globally

---

## 🔒 Environment Variables

If you need environment variables (e.g., API keys):

**In Vercel Dashboard:**
1. Go to **Settings → Environment Variables**
2. Add each variable:
   ```
   KEY = value
   ```

**In your code:**
```typescript
const apiUrl = process.env.VITE_API_URL || 'https://api.example.com';
```

**Note:** Variables must start with `VITE_` to be available in client-side code.

---

## ✅ Post-Deployment Testing

After deployment, test these sections:

- [ ] **Homepage** — Hero image, navbar, scroll
- [ ] **All Sections** — Biography, Timeline, Zones, National Significance, Patron Message
- [ ] **Donations** — Links and forms
- [ ] **Mobile Responsive** — Test on phone/tablet
- [ ] **Images** — All heritage photos load
- [ ] **Links** — Navbar links scroll to sections correctly
- [ ] **Performance** — Vercel Analytics shows good metrics

---

## 🔄 Update & Redeploy

**Every time you push to `main`:**
```bash
git push origin main
```
→ Vercel automatically rebuilds and deploys (usually within 1-2 minutes)

**To see deployment history:**
- Go to Vercel Dashboard → Your Project → **Deployments**
- Click any deployment to view logs and preview

---

## 🐛 Troubleshooting

### Build fails on Vercel
**Solution:** Check the build log in Vercel Dashboard
```bash
# Test locally first
npm run build
npx tsc --noEmit
```

### Styles/CSS not loading
**Solution:** Clear Vercel cache
- Vercel Dashboard → **Settings** → **Clear Cache** → **Redeploy**

### Images not showing
**Solution:** Verify images are committed to Git
```bash
# Check if images are tracked
git ls-files | grep "src/assets"
```

### Old version still showing
**Solution:** Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R) or clear cache

---

## 📚 Additional Resources

- **Vercel Docs:** https://vercel.com/docs
- **TanStack Router:** https://tanstack.com/router
- **Vite Guide:** https://vitejs.dev/guide/
- **Next Steps:** Monitor your Vercel Analytics dashboard

---

## 🎓 GitHub Actions (CI/CD)

Your `.github/workflows/deploy.yml` automatically:
- ✓ Checks TypeScript for errors
- ✓ Runs the build
- ✓ Verifies output
- ✓ Triggers Vercel deployment on successful push

**You don't need to do anything** — it happens automatically!

---

## 💡 Tips

1. **Keep commits clean** — Push only when ready to deploy
2. **Monitor Vercel Analytics** — See real user metrics
3. **Set up error tracking** — Consider adding Sentry or similar
4. **Use custom domain** — In Vercel Settings, add your domain (e.g., `ahilya-smarak.org`)

---

## ✨ You're All Set!

Your **Devi Ahilyabai Holkar Smarak website** is ready to go live on Vercel.

**One last check:**
```bash
git push origin main
```

Then watch your Vercel Dashboard as your site deploys live! 🚀

---

Questions? Check VERCEL_DEPLOYMENT.md for more details.
