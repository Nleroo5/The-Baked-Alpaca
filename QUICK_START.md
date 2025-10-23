# 🚀 Quick Start Guide - The Baked Alpaca

**Get your website live in 30 minutes!**

## ⚡ Super Quick Launch (5 Steps)

### 1️⃣ Add Images (10 min)

**Minimum required images:**
- Hero image: `images/hero-poster.jpg` (1920x1080px)
- 3 service cards: `images/pastries.jpg`, `images/custom-cakes.jpg`, `images/dessert-tables.jpg` (600x400px each)
- At least 6 gallery images: `images/gallery-1.jpg` through `images/gallery-6.jpg` (800x800px each)

**Quick option:** Use free stock photos from [Unsplash](https://unsplash.com)
- Search: "french pastry", "wedding cake", "bakery"
- Download → Resize → Compress → Add to `/images/` folder

**Compress images:** Use [TinyPNG](https://tinypng.com)

### 2️⃣ Update Contact Info (5 min)

**Find and replace in ALL .html files:**

```
Find: +1XXXXXXXXXX
Replace: YOUR_ACTUAL_PHONE

Find: (XXX) XXX-XXXX
Replace: (XXX) XXX-XXXX  (your formatted phone)

Find: hello@thebakedalpaca.com
Replace: YOUR_EMAIL@domain.com  (if different)
```

**Update social media links in footer:**
- Instagram: `https://www.instagram.com/YOUR_HANDLE`
- Facebook: `https://www.facebook.com/YOUR_PAGE`

### 3️⃣ Test Locally (5 min)

**Option A - VS Code:**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

**Option B - Python:**
```bash
cd /Users/nicolasleroo/Desktop/The-Baked-Alpaca
python -m http.server 8000
# Visit http://localhost:8000
```

**Quick checks:**
- ✅ Homepage loads
- ✅ Navigation works
- ✅ Images display
- ✅ Contact form shows

### 4️⃣ Push to GitHub (5 min)

```bash
# In project folder
git init
git add .
git commit -m "Initial commit"
git branch -M main

# Create repo on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/the-baked-alpaca.git
git push -u origin main
```

### 5️⃣ Deploy to Vercel (5 min)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import `the-baked-alpaca` repository
5. Click "Deploy" (that's it!)
6. Get your live URL: `your-site.vercel.app`

---

## 🎯 Essential Tasks (Do These First)

### Before Launch
- [ ] Add minimum 9 images (hero + 3 services + 5 gallery)
- [ ] Update phone number everywhere
- [ ] Update email if different
- [ ] Update social media links
- [ ] Test contact form
- [ ] Check on mobile device

### After Launch (Week 1)
- [ ] Set up Google Analytics
- [ ] Submit to Google Search Console
- [ ] Create Google Business Profile
- [ ] Add more gallery photos
- [ ] Test on real customers

---

## 📞 Key Contact Points to Update

**Files that need phone/email:**
1. `index.html` - Footer, hero CTA
2. `about.html` - Footer
3. `services.html` - Footer, CTAs
4. `gallery.html` - Footer
5. `testimonials.html` - Footer
6. `contact.html` - Contact info section, footer
7. `disclaimer.html` - Contact section
8. `cookies.html` - Contact section

**Search for:** `XXXX`, `hello@thebakedalpaca.com`

---

## 🖼️ Image Priority List

**Must have (9 images):**
1. Hero/poster image
2. Pastries card
3. Custom cakes card
4. Dessert tables card
5-9. Five gallery images

**Should have (add soon):**
10-13. Featured slider (4 images)
14-15. About page (2 images)
16-20. Services page details (5 images)
21-29. More gallery images (9 more)

**Nice to have:**
- Hero video (can add later)
- 30+ gallery images
- Social media preview images

---

## 🔧 Quick Fixes

### Images not showing?
- Check file names match HTML exactly (case-sensitive!)
- Make sure images are in `/images/` folder
- Compress if over 200KB

### Mobile menu not working?
- Clear browser cache
- Check all 3 JS files are loading (utils.js, components.js, main.js)

### Form not working?
- Normal! It's simulated by default
- See [README.md](README.md) → "Connect Contact Form" section

### Slow loading?
- Compress all images (use TinyPNG)
- Reduce image dimensions
- Check video file size (<5MB)

---

## 📱 Must Test On

- [ ] Chrome desktop
- [ ] Your actual phone (iPhone or Android)
- [ ] Tablet (if available)

**Quick mobile test:**
- Chrome → F12 → Toggle device toolbar (Ctrl+Shift+M)
- Select "iPhone 12 Pro"

---

## 🎨 Quick Customization

### Change Colors
Edit [css/variables.css](css/variables.css):
```css
--color-primary: #05908C     /* Main teal */
--color-secondary: #012E40   /* Dark blue */
--color-accent: #F2A922      /* Gold */
```

### Add Your Logo
Replace text logo in header:
```html
<!-- In all .html files, find: -->
<a href="/" class="logo">The Baked Alpaca</a>

<!-- Replace with: -->
<a href="/" class="logo">
  <img src="/assets/logo.png" alt="The Baked Alpaca" height="40">
</a>
```

### Update Business Hours
Edit [contact.html](contact.html) - search for "Business Hours"

---

## 🆘 Need Help?

**Common questions answered in:**
- [README.md](README.md) - Full documentation
- [IMAGE_GUIDE.md](IMAGE_GUIDE.md) - Image specifications
- [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) - Pre-launch tasks

**Still stuck?**
- Check browser console (F12) for errors
- Google the error message
- Ask ChatGPT/Claude for help with specific errors

---

## 🎉 Launch Checklist

Bare minimum before going live:

- [ ] 9+ images added
- [ ] Phone number updated
- [ ] Email updated (if different)
- [ ] Social links updated
- [ ] Tested on desktop browser
- [ ] Tested on your phone
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Visited live URL - works!

**That's it! You're live!** 🚀

---

## 🚀 Next Level (When You Have Time)

Week 2+:
- Replace stock photos with your actual product photos
- Add more gallery images (aim for 20+)
- Set up Google Analytics
- Create Google Business Profile
- Get professional photos taken
- Add customer testimonials
- Connect contact form to email
- Add your logo
- Get custom domain

---

## 📊 Success in First Month

**Goals:**
- ✅ Website live and mobile-friendly
- ✅ Shows up on Google for business name
- ✅ 1+ contact form submission per week
- ✅ 100+ website visitors
- ✅ Gallery with 10+ real photos

**Track via:**
- Google Analytics (free)
- Contact form submissions
- Phone call inquiries

---

**Time to launch:** 30 minutes ⏱️

**Difficulty:** Easy 😊

**You got this!** 💪

---

**Questions?** See [README.md](README.md) for detailed help.
