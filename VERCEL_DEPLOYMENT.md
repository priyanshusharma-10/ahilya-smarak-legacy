# Devi Ahilyabai Holkar Smarak — Deployment Guide

## Vercel Deployment

### Quick Deploy
1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com/import](https://vercel.com/import)
   - Import this GitHub repository
   - Vercel auto-detects Vite + TanStack Start configuration

3. **Build Settings (Auto-detected)**
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Node Version:** 20.x

4. **Deploy**
   - Click "Deploy" — Vercel will build and deploy automatically

---

## Configuration Files

### vercel.json
- Specifies build command, output directory, and Node version
- Auto-configured for Vite + SSR

### .vercelignore
- Excludes Cloudflare/Wrangler files from Vercel build
- Reduces build size and deployment time

### Environment Variables
Set these in Vercel Project Settings > Environment Variables:
```
NODE_ENV = production
VITE_API_URL = https://your-api.com (if needed)
```

---

## Post-Deploy Checklist

- [ ] Test homepage loads correctly
- [ ] Verify all sections scroll and render
- [ ] Check navbar functionality (mobile & desktop)
- [ ] Test donation section links
- [ ] Verify images load from assets
- [ ] Check performance with Vercel Analytics (optional)

---

## Rollback / Redeploy

**To redeploy:**
```bash
git push origin main
```
Vercel automatically rebuilds and deploys.

**To rollback:**
- Go to Vercel Dashboard > Deployments > Select previous deployment > Click "Redeploy"

---

## Local Testing

```bash
npm install
npm run build
npm run preview
```

Then open `http://localhost:3000` (or the port shown in terminal).

---

## Troubleshooting

**Build fails?**
- Ensure all TypeScript is valid: `npx tsc --noEmit`
- Check Node version matches (20.x recommended)

**Styles not loading?**
- Verify Tailwind CSS is installed and configured in `vite.config.ts`
- Clear Vercel cache: Vercel Dashboard > Settings > Clear Cache

**Images not showing?**
- Confirm all images in `src/assets/` are committed to Git
- Check image paths use `/src/assets/...` imports (not hardcoded URLs)

---

## Support

For Vercel-specific issues: [vercel.com/docs](https://vercel.com/docs)
For TanStack Start: [tanstack.com/router](https://tanstack.com/router)
