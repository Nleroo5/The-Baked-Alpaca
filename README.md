# The Baked Alpaca - Website Documentation

A professional, SEO-optimized website for The Baked Alpaca, a luxury artisan bakery in Peachtree City, Georgia.

## 🎯 Project Overview

**Client:** The Baked Alpaca
**Industry:** Restaurant / Bakery
**Location:** Peachtree City, Georgia
**Tech Stack:** HTML5, CSS3, Vanilla JavaScript (Static Site)
**Deployment:** Vercel (automatic deployments via GitHub)
**Backend:** Firebase (if needed for forms/bookings)

## 📁 Project Structure

```
The-Baked-Alpaca/
├── index.html              # Homepage
├── about.html              # About page
├── services.html           # Services page
├── gallery.html            # Photo gallery
├── testimonials.html       # Customer testimonials
├── contact.html            # Contact form
├── disclaimer.html         # Legal disclaimer
├── cookies.html            # Cookie policy
├── 404.html                # 404 error page
├── robots.txt              # SEO robots file
├── sitemap.xml             # XML sitemap
├── vercel.json             # Vercel configuration
├── css/
│   ├── reset.css           # CSS reset/normalize
│   ├── variables.css       # Design system tokens
│   ├── components.css      # Reusable components
│   └── main.css            # Main styles
├── js/
│   ├── utils.js            # Utility functions
│   ├── components.js       # Interactive components
│   └── main.js             # Initialization
├── images/                 # Image assets (to be added)
└── assets/                 # Icons, fonts, favicons (to be added)
```

## 🚀 Getting Started

### Prerequisites

- A code editor (VS Code recommended)
- Git installed
- A GitHub account
- A Vercel account (free tier works great)

### Local Development

1. **Clone or navigate to the repository:**
   ```bash
   cd /Users/nicolasleroo/Desktop/The-Baked-Alpaca
   ```

2. **Open with a local server:**

   **Option 1 - VS Code Live Server:**
   - Install "Live Server" extension in VS Code
   - Right-click `index.html` → "Open with Live Server"

   **Option 2 - Python:**
   ```bash
   # Python 3
   python -m http.server 8000

   # Then visit http://localhost:8000
   ```

   **Option 3 - Node.js:**
   ```bash
   npx serve
   ```

3. **Make changes and test locally**

## 📤 Deployment to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: The Baked Alpaca website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the static site
   - Click "Deploy"
   - Done! Future pushes auto-deploy

### Method 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

### Method 3: Drag & Drop

- Zip the project folder
- Go to vercel.com
- Drag and drop the folder

## 🎨 Design System

### Color Palette

```css
--color-primary: #05908C     /* Teal - primary brand color */
--color-secondary: #012E40   /* Dark blue - headings, text */
--color-accent: #F2A922      /* Gold - CTAs, highlights */
--color-background: #FFFFFF  /* White */
```

### Typography

- **Headings:** Playfair Display (serif)
- **Body:** Montserrat / System fonts
- **Base Size:** 16px (1rem)
- **Scale:** Responsive type scale from 12px to 60px

### Spacing

8px base unit with responsive spacing scale (0.5rem to 12rem)

## 📸 Adding Images

### Required Images

Replace placeholder paths in HTML with actual images:

**Homepage:**
- `/images/hero-video.mp4` - Hero background video
- `/images/hero-poster.jpg` - Video poster/fallback
- `/images/pastries.jpg` - Pastries service card
- `/images/custom-cakes.jpg` - Custom cakes card
- `/images/dessert-tables.jpg` - Dessert tables card
- `/images/featured-1.jpg` through `/images/featured-4.jpg` - Slider images

**About Page:**
- `/images/about-story.jpg` - Story section
- `/images/horse-trailer.jpg` - Vintage trailer

**Services Page:**
- `/images/pastries-hero.jpg` - Pastries section
- `/images/custom-cakes-detail.jpg` - Cakes section
- `/images/entremets.jpg` - Entremets section
- `/images/dessert-table-setup.jpg` - Dessert tables
- `/images/wedding-cake.jpg` - Wedding section

**Gallery Page:**
- `/images/gallery-1.jpg` through `/images/gallery-15.jpg`

**Favicon/Icons:**
- `/assets/favicon-32x32.png`
- `/assets/favicon-16x16.png`
- `/assets/apple-touch-icon.png`

### Image Optimization

Before uploading images:

1. **Resize images:**
   - Hero images: 1920x1080px max
   - Gallery images: 800x800px
   - Card images: 600x400px

2. **Compress images:**
   - Use [TinyPNG](https://tinypng.com/)
   - Or [Squoosh](https://squoosh.app/)
   - Target: <200KB per image

3. **Convert to WebP (optional but recommended):**
   ```bash
   # Using ImageMagick
   convert input.jpg -quality 85 output.webp
   ```

4. **Add to `/images/` folder**

## 🔧 Customization

### Update Contact Information

**Search and replace in ALL files:**

1. **Phone Number:**
   - Find: `+1XXXXXXXXXX` or `(XXX) XXX-XXXX`
   - Replace with: Actual phone number

2. **Email:**
   - Find: `hello@thebakedalpaca.com`
   - Replace if different

3. **Social Media:**
   - Update Instagram/Facebook URLs in footer

### Update Business Hours

Edit `contact.html` - Business Hours section

### Add Google Analytics

Uncomment in `/js/main.js`:

```javascript
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID'); // Replace with your ID
```

Add to `<head>` of all pages:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Connect Contact Form

The contact form currently simulates submission. To connect to a real backend:

**Option 1 - Firebase:**
1. Set up Firebase project
2. Add Firebase SDK to contact.html
3. Update form submission in `/js/components.js` `initContactForm()`

**Option 2 - Formspree:**
1. Sign up at [formspree.io](https://formspree.io)
2. Update form action:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Option 3 - Netlify Forms:**
1. Add `netlify` attribute to form:
   ```html
   <form netlify name="contact">
   ```

## 🔍 SEO Checklist

- ✅ Unique meta titles on every page
- ✅ Meta descriptions (150-160 characters)
- ✅ Open Graph tags for social sharing
- ✅ Structured data (Schema.org)
- ✅ Semantic HTML5
- ✅ Alt text on all images
- ✅ XML sitemap
- ✅ robots.txt
- ✅ Mobile-friendly
- ✅ Fast loading
- ⏳ Submit sitemap to Google Search Console (after deployment)
- ⏳ Set up Google Business Profile

### Submit to Search Engines

After deployment:

1. **Google Search Console:**
   - Visit [search.google.com/search-console](https://search.google.com/search-console)
   - Add property
   - Verify ownership
   - Submit sitemap: `https://www.thebakedalpaca.com/sitemap.xml`

2. **Bing Webmaster Tools:**
   - Visit [bing.com/webmasters](https://www.bing.com/webmasters)
   - Same process

## 📱 Testing

### Desktop Testing

Test in these browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Mobile Testing

Test on real devices or use Chrome DevTools:
- iPhone SE (375px width)
- iPhone 12 (390px width)
- iPad (768px width)
- Samsung Galaxy (360px width)

### Performance Testing

Run Lighthouse audit in Chrome:
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Check all categories
4. Click "Generate report"
5. Target scores: 90+ in all categories

### Accessibility Testing

- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [aXe DevTools](https://www.deque.com/axe/devtools/)
- Test keyboard navigation (Tab key)
- Test screen reader (NVDA on Windows, VoiceOver on Mac)

## 🐛 Common Issues & Solutions

### Images not loading
- Check file paths are correct (case-sensitive)
- Ensure images are in `/images/` folder
- Check file extensions match HTML

### Mobile menu not working
- Ensure all 3 JS files are loaded
- Check browser console for errors
- Clear browser cache

### Form not submitting
- Check browser console for errors
- Ensure backend is connected
- Verify form validation

### Videos not playing
- Ensure video files exist
- Check video format (MP4 recommended)
- Videos must be muted for autoplay

## 🔒 Security Notes

- HTTPS enforced via Vercel
- Security headers in vercel.json
- Form validation prevents XSS
- No sensitive data in frontend code
- Cookie consent banner implemented

## 📊 Performance Targets

- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Time to Interactive:** < 3.0s
- **Cumulative Layout Shift:** < 0.1
- **Total Page Size:** < 1MB per page

## 🎯 Local SEO Optimization

### Target Keywords

Primary:
- peachtree city bakery
- custom cakes peachtree city
- gourmet bakery fayette county ga

See full keyword list in project brief.

### Local Citations

Ensure NAP (Name, Address, Phone) consistency across:
- Google Business Profile
- Yelp
- Facebook Business Page
- Local directories

## 📞 Support

For technical issues or questions:
- Review this README
- Check browser console for errors
- Consult HTML/CSS comments in code
- Contact developer

## 📄 License

© 2025 The Baked Alpaca. All rights reserved.

---

## 🚦 Quick Start Checklist

- [ ] Add all images to `/images/` folder
- [ ] Add favicon files to `/assets/` folder
- [ ] Update phone number throughout site
- [ ] Verify email address
- [ ] Update social media links
- [ ] Connect contact form backend
- [ ] Test all pages locally
- [ ] Run Lighthouse audit
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Connect custom domain (if applicable)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Create Google Business Profile
- [ ] Test on real mobile devices

---

**Built with ❤️ for The Baked Alpaca**
