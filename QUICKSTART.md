# 🚀 Quick Start Guide

## Get Running in 2 Minutes

### Step 1: Install Dependencies
```bash
cd feel-the-beat-academy
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

That's it! 🎉

---

## 📝 Customization Checklist

### Essential Updates (Do These First)

#### 1. Update Contact Information
**File**: `components/sections/Contact.tsx`
```typescript
// Update these lines:
Phone: +91 XXXXX XXXXX  // Line ~45
Email: your@email.com    // Line ~65
Address: Your Address    // Line ~35
```

#### 2. Update WhatsApp Number
**File**: `components/ui/WhatsAppButton.tsx`
```typescript
// Line 6:
const phoneNumber = "919876543210"; // Replace with real number
```

#### 3. Update Google Maps
**File**: `components/sections/Contact.tsx`
```typescript
// Line ~95 - Replace the iframe src with your actual location
src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
```

#### 4. Update Social Media Links
**File**: `components/ui/Footer.tsx`
```typescript
// Lines ~10-13:
{ icon: Instagram, href: "https://instagram.com/your_handle" }
{ icon: Facebook, href: "https://facebook.com/your_page" }
{ icon: Youtube, href: "https://youtube.com/your_channel" }
```

#### 5. Add Real Images
Create these folders and add images:
```
public/
  images/
    hiphop.jpg
    bollywood.jpg
    contemporary.jpg
    ladies.jpg
    kids.jpg
    selfdefense.jpg
    testimonial1.jpg
    testimonial2.jpg
    testimonial3.jpg
    testimonial4.jpg
    testimonial5.jpg
```

### Optional Updates

#### Update Batch Timings
**File**: `data/classes.ts`
- Modify the `batches` array with your actual schedule

#### Update Testimonials
**File**: `data/testimonials.ts`
- Replace with real student testimonials

#### Update Quiz Questions
**File**: `data/quiz.ts`
- Customize questions and results

---

## 🎨 Color Customization

Want to change the color scheme? Update these in `tailwind.config.ts`:

```typescript
// Primary colors
pink-500: '#ec4899'    // Main accent
purple-500: '#8b5cf6'  // Secondary accent
cyan-500: '#06b6d4'    // Tertiary accent
```

Or use Tailwind's built-in colors by replacing class names:
- `from-pink-500` → `from-blue-500`
- `to-purple-500` → `to-green-500`

---

## 📱 Testing Checklist

Before going live, test these:

- [ ] All navigation links work
- [ ] WhatsApp button opens correctly
- [ ] Contact form (if backend added)
- [ ] Booking system
- [ ] Quiz functionality
- [ ] Image upload feature
- [ ] Mobile responsiveness
- [ ] All CTAs work
- [ ] Social media links
- [ ] Google Maps loads

---

## 🚀 Deploy to Vercel (Fastest)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts, done in 2 minutes!
```

---

## 🆘 Common Issues

### Port 3000 Already in Use
```bash
# Kill the process
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache
rm -rf .next
npm run build
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

---

## 📚 Project Structure

```
feel-the-beat-academy/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections
│   └── ui/                # Reusable components
├── data/                  # Data files
├── utils/                 # Utility functions
└── public/                # Static assets
```

---

## 🎯 Next Steps

1. ✅ Customize content
2. ✅ Add real images
3. ✅ Update contact info
4. ✅ Test all features
5. ✅ Deploy to Vercel
6. 🎉 Share with the world!

---

## 💡 Pro Tips

1. **Images**: Use WebP format for better performance
2. **SEO**: Update metadata in `app/layout.tsx`
3. **Analytics**: Add Google Analytics after deployment
4. **Backup**: Push to GitHub before deploying
5. **Domain**: Connect custom domain in Vercel settings

---

## 📞 Need Help?

- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind Docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Framer Motion: [framer.com/motion](https://www.framer.com/motion/)

---

**Happy Dancing! 💃🕺**
