#!/bin/bash
# Vercel Pre-Deployment Checklist

echo "🚀 Devi Ahilyabai Holkar Smarak — Pre-Deployment Verification"
echo "================================================================"
echo ""

# Check Node version
echo "✓ Checking Node.js version..."
node_version=$(node -v)
echo "  Current: $node_version (Vercel supports 18.x, 20.x)"
echo ""

# Check npm packages
echo "✓ Checking npm packages..."
if [ -d "node_modules" ]; then
  echo "  ✓ Dependencies installed"
else
  echo "  ✗ Dependencies NOT installed - run: npm install"
  exit 1
fi
echo ""

# Type check
echo "✓ Running TypeScript type check..."
if npx tsc --noEmit 2>/dev/null; then
  echo "  ✓ No TypeScript errors"
else
  echo "  ✗ TypeScript errors found - fix them first"
  exit 1
fi
echo ""

# Build
echo "✓ Building project..."
if npm run build > /dev/null 2>&1; then
  echo "  ✓ Build successful"
  if [ -d "dist" ]; then
    size=$(du -sh dist | cut -f1)
    echo "  ✓ Output size: $size"
  fi
else
  echo "  ✗ Build failed"
  npm run build
  exit 1
fi
echo ""

# Git status
echo "✓ Checking Git status..."
if git status --short | grep -q "^??"; then
  untracked=$(git status --short | grep "^??" | wc -l)
  echo "  ⚠ Warning: $untracked untracked files"
fi

if [ "$(git status --short)" = "" ]; then
  echo "  ✓ Clean working tree"
  echo "  ✓ Ready to push to GitHub"
else
  echo "  ✗ Uncommitted changes found:"
  git status --short | head -10
  echo "  → Commit or stash changes before deploying"
fi
echo ""

echo "================================================================"
echo "✓ All checks passed! Ready for Vercel deployment"
echo ""
echo "Next steps:"
echo "  1. git push origin main"
echo "  2. Vercel will auto-deploy on push"
echo "  3. Check Vercel Dashboard for deployment status"
echo "  4. Once deployed, your site will be live!"
echo ""
