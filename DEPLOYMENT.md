# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Feel The Beat Dance Academy"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Your site will be live in ~2 minutes!

### Option 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts and your site will be deployed!

## Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

## Deploy to Other Platforms

### Railway

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Login and deploy:
```bash
railway login
railway init
railway up
```

### Render

1. Create a new Web Service on [render.com](https://render.com)
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set start command: `npm start`
5. Deploy!

## Environment Variables (Optional)

If you add backend features later, create a `.env.local` file:

```env
# Supabase (if using)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key

# Firebase (if using)
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

# Email Service (if using)
EMAIL_SERVICE_API_KEY=your_email_api_key

# WhatsApp Business API (if using)
WHATSAPP_API_KEY=your_whatsapp_key
```

## Custom Domain Setup

### Vercel
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify
1. Go to "Domain settings"
2. Add custom domain
3. Configure DNS

## Performance Optimization

### Before Deployment

1. **Optimize Images**: Add real images to `/public/images/`
2. **Update Content**: Replace placeholder text with real content
3. **Test Responsiveness**: Check on mobile, tablet, desktop
4. **SEO Check**: Update metadata in `app/layout.tsx`

### After Deployment

1. **Enable Analytics**: Add Google Analytics or Vercel Analytics
2. **Set up Monitoring**: Use Vercel Speed Insights
3. **Configure CDN**: Automatic with Vercel/Netlify
4. **Enable Compression**: Automatic with Next.js

## Post-Deployment Checklist

- [ ] Test all interactive features
- [ ] Verify WhatsApp button works
- [ ] Check contact form submissions
- [ ] Test on multiple devices
- [ ] Verify Google Maps embed
- [ ] Check all navigation links
- [ ] Test booking system
- [ ] Verify quiz functionality
- [ ] Check image upload feature
- [ ] Test all animations
- [ ] Verify social media links
- [ ] Check mobile responsiveness

## Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for security issues
npm audit

# Fix security issues
npm audit fix
```

### Monitoring

- Set up uptime monitoring (UptimeRobot, Pingdom)
- Enable error tracking (Sentry)
- Monitor Core Web Vitals
- Track user analytics

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Deployment Issues

1. Check Node.js version (should be 18+)
2. Verify all dependencies are installed
3. Check for TypeScript errors
4. Review build logs

### Performance Issues

1. Optimize images (use WebP format)
2. Enable lazy loading
3. Minimize JavaScript bundle
4. Use CDN for static assets

## Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)

---

🎉 Your Feel The Beat Dance Academy website is ready to go live!
