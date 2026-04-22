# 💃 Feel The Beat Dance Academy

A modern, production-ready SaaS-style website for Aniket's Feel The Beat Dance Academy in Khanda Colony, Panvel, India.

## 🎯 Features

### Core Features Implemented

1. **🎧 Beat-Based Animated UI**
   - Music toggle with pulsing animations
   - Smooth transitions and micro-interactions
   - Beat-synchronized visual effects

2. **📅 Smart Batch Recommender**
   - Interactive questionnaire (Age, Skill Level, Goal)
   - Dynamic batch recommendations
   - Real-time seat availability display

3. **🧠 Dance Style Quiz**
   - 5 engaging multiple-choice questions
   - Animated progress bar
   - Personalized dance style results
   - Batch recommendations based on quiz results

4. **🎥 "See Yourself Dancing Here" Feature**
   - Image upload functionality
   - Canvas-based studio lighting effects
   - Logo watermark overlay
   - Download processed image

5. **📲 Demo Class Booking System**
   - Interactive time slot selection
   - Real-time availability status
   - Form validation
   - Confirmation animation

6. **🎭 Event Showcase (Dhatingnaach)**
   - Live countdown timer
   - Event details and highlights
   - Video placeholder section
   - Registration CTA

7. **📸 Live Instagram Feed Section**
   - Grid layout with hover effects
   - Like and comment counts
   - Video indicators
   - Direct Instagram link

8. **🧍 "Find Your Dance Tribe"**
   - Age and style selection
   - Community group recommendations
   - Member count display
   - Tribe vibe descriptions

9. **🎤 Founder Section**
   - Timeline-style journey (2015-2026)
   - Animated milestone cards
   - Stats showcase
   - Personal story narrative

10. **⭐ Testimonials Section**
    - Carousel with smooth transitions
    - Video testimonial indicators
    - Star ratings
    - Navigation controls

11. **📲 WhatsApp Integration**
    - Floating button (bottom right)
    - Pre-filled message
    - Hover tooltip
    - Smooth animations

12. **🔥 Limited Seats Indicator**
    - Dynamic seat count display
    - Urgency messaging
    - Color-coded alerts

13. **🧾 Classes Section**
    - 6 dance styles (Hip-Hop, Bollywood, Contemporary, Ladies, Kids, Self-Defence)
    - Flip card animations
    - Detailed level information
    - Gradient color themes

14. **📍 Contact Section**
    - Address with Google Maps embed
    - Phone numbers and email
    - Working hours
    - Interactive contact cards

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## 📁 Project Structure

```
feel-the-beat-academy/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── Classes.tsx
│   │   ├── BatchRecommender.tsx
│   │   ├── DanceQuiz.tsx
│   │   ├── ImageUpload.tsx
│   │   ├── BookDemo.tsx
│   │   ├── Events.tsx
│   │   ├── InstagramFeed.tsx
│   │   ├── DanceTribe.tsx
│   │   ├── FounderStory.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   └── ui/                 # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── WhatsAppButton.tsx
├── data/                   # Data files
│   ├── classes.ts
│   ├── testimonials.ts
│   └── quiz.ts
└── utils/                  # Utility functions
    └── batchRecommender.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd feel-the-beat-academy
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design Features

- **Dark Theme**: Black background with neon pink/purple/cyan accents
- **Glassmorphism**: Frosted glass effect on cards
- **Smooth Animations**: Framer Motion for all interactions
- **Responsive Design**: Mobile-first approach
- **Modern Typography**: Bold headings with gradient text
- **Micro-interactions**: Hover effects and click animations

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Key Sections

1. **Hero** - Eye-catching landing with stats and CTAs
2. **Classes** - Flip cards showcasing 6 dance styles
3. **Batch Recommender** - Smart recommendation system
4. **Dance Quiz** - Interactive personality quiz
5. **Image Upload** - Virtual studio preview
6. **Events** - Dhatingnaach festival countdown
7. **Founder Story** - Timeline of Aniket's journey
8. **Dance Tribe** - Community finder
9. **Instagram Feed** - Social media integration
10. **Testimonials** - Carousel of reviews
11. **Book Demo** - Interactive booking system
12. **Contact** - Location and contact info

## 🔧 Customization

### Update Contact Information

Edit `components/sections/Contact.tsx`:
- Phone numbers
- Email addresses
- Physical address
- Google Maps embed URL

### Update WhatsApp Number

Edit `components/ui/WhatsAppButton.tsx`:
```typescript
const phoneNumber = "919876543210"; // Replace with actual number
```

### Modify Classes

Edit `data/classes.ts` to add/remove dance styles

### Update Testimonials

Edit `data/testimonials.ts` to add real testimonials

## 🌟 Performance Optimizations

- Lazy loading for images
- Optimized animations with Framer Motion
- Minimal bundle size
- Fast page loads
- SEO-friendly metadata

## 📈 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Descriptive alt texts
- Structured data ready
- Fast Core Web Vitals

## 🎭 Future Enhancements

- Backend integration (Supabase/Firebase)
- Real booking system with payment
- Admin dashboard
- Student portal
- Video gallery
- Blog section
- Online classes integration

## 📄 License

© 2026 Feel The Beat Dance Academy. All rights reserved.

## 👨‍💻 Developer Notes

This is a complete, production-ready website with:
- Clean, modular code
- Reusable components
- Type-safe TypeScript
- Best practices followed
- Ready for deployment

Deploy to Vercel, Netlify, or any hosting platform that supports Next.js.

---

Built with ❤️ for Feel The Beat Dance Academy
