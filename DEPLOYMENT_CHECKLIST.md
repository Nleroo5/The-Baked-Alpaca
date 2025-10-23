# 🚀 Deployment Checklist - The Baked Alpaca

Use this checklist to ensure everything is ready before launching the website.

## 📋 Pre-Launch Checklist

### 1. Content & Images

- [ ] **All images added** to `/images/` folder
  - [ ] Hero video/poster
  - [ ] Service cards (3 images)
  - [ ] Featured slider (4 images)
  - [ ] About page (2 images)
  - [ ] Services page (5 images)
  - [ ] Gallery (15 images)
  - [ ] Social media preview images (OG/Twitter)
- [ ] **Favicon files** in `/assets/` folder
  - [ ] favicon-32x32.png
  - [ ] favicon-16x16.png
  - [ ] apple-touch-icon.png
- [ ] **All images optimized** (<200KB each)
- [ ] **Alt text added** to all images in HTML
- [ ] **Contact information updated** throughout site
  - [ ] Phone number (search: `+1XXXXXXXXXX`, `(XXX) XXX-XXXX`)
  - [ ] Email address (verify: `hello@thebakedalpaca.com`)
  - [ ] Business hours on contact page
- [ ] **Social media links updated**
  - [ ] Instagram URL
  - [ ] Facebook URL

### 2. Functionality Testing

- [ ] **Navigation works** on all pages
  - [ ] Desktop menu
  - [ ] Mobile menu (hamburger)
  - [ ] All links go to correct pages
  - [ ] Active page highlights correctly
- [ ] **Contact form works**
  - [ ] All fields validate correctly
  - [ ] Email validation works
  - [ ] Phone validation works
  - [ ] Required fields enforce
  - [ ] Form submission connected to backend
  - [ ] Success message displays
  - [ ] Error handling works
- [ ] **Gallery lightbox** opens images
- [ ] **Image slider** on homepage works
  - [ ] Auto-advance
  - [ ] Arrow navigation
  - [ ] Dot navigation
  - [ ] Touch/swipe on mobile
- [ ] **Video background** plays (if using)
- [ ] **Smooth scrolling** for anchor links
- [ ] **Cookie consent banner** appears
- [ ] **All buttons work** and go to correct destinations

### 3. Cross-Browser Testing

Test on **desktop** browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

Test on **mobile** devices/emulation:
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Small screen (375px - iPhone SE)
- [ ] Medium screen (768px - iPad)
- [ ] Large screen (1920px - Desktop)

### 4. Performance Optimization

- [ ] **Lighthouse audit** run on all pages
  - [ ] Performance: 90+ score
  - [ ] Accessibility: 90+ score
  - [ ] Best Practices: 90+ score
  - [ ] SEO: 90+ score
- [ ] **Images compressed** and optimized
- [ ] **Page load time** < 3 seconds on 3G
- [ ] **No console errors** in browser DevTools
- [ ] **CSS/JS files** load without errors
- [ ] **Lazy loading** working for images

### 5. SEO Optimization

- [ ] **Meta tags** on all pages
  - [ ] Unique title tags (50-60 characters)
  - [ ] Meta descriptions (150-160 characters)
  - [ ] Open Graph tags
  - [ ] Twitter Card tags
- [ ] **Heading hierarchy** correct (h1 → h2 → h3)
- [ ] **Structured data** implemented (Schema.org)
  - [ ] LocalBusiness schema on homepage
  - [ ] Organization schema
  - [ ] Review schema on testimonials
- [ ] **robots.txt** file present
- [ ] **sitemap.xml** created and accurate
- [ ] **All internal links** working
- [ ] **No broken links** (check with [Dead Link Checker](https://www.deadlinkchecker.com/))
- [ ] **Canonical URLs** set (if needed)
- [ ] **Image alt text** descriptive and includes keywords

### 6. Accessibility

- [ ] **Keyboard navigation** works
  - [ ] Can tab through all interactive elements
  - [ ] Focus states visible
  - [ ] Can access mobile menu with keyboard
- [ ] **Screen reader tested**
  - [ ] Mac: VoiceOver
  - [ ] Windows: NVDA
- [ ] **Color contrast** meets WCAG AA (4.5:1 minimum)
- [ ] **Skip to content** link works
- [ ] **ARIA labels** on interactive elements
- [ ] **Form labels** associated with inputs
- [ ] **No auto-playing audio** without controls

### 7. Security

- [ ] **HTTPS enforced** (Vercel provides this)
- [ ] **Security headers** in vercel.json
  - [ ] X-Content-Type-Options
  - [ ] X-Frame-Options
  - [ ] X-XSS-Protection
  - [ ] Strict-Transport-Security
- [ ] **Form validation** prevents XSS
- [ ] **No sensitive data** in frontend code
- [ ] **External links** have `rel="noopener noreferrer"`

### 8. Legal & Compliance

- [ ] **Disclaimer page** accessible
- [ ] **Cookie policy page** accessible
- [ ] **Cookie consent banner** displays
- [ ] **Privacy policy** (if collecting data)
- [ ] **Terms of service** (if applicable)
- [ ] **Allergen information** disclaimer present

### 9. Mobile Responsiveness

- [ ] **All pages responsive** on mobile
- [ ] **Touch targets** at least 44x44px
- [ ] **Text readable** without zooming (minimum 16px)
- [ ] **No horizontal scrolling**
- [ ] **Images scale** properly
- [ ] **Navigation accessible** on mobile
- [ ] **Forms usable** on mobile
- [ ] **Phone numbers** clickable (tel: links)
- [ ] **Viewport meta tag** present

### 10. Content Quality

- [ ] **Spelling/grammar checked** on all pages
- [ ] **Business information accurate**
- [ ] **Service descriptions** clear and compelling
- [ ] **Testimonials** authentic (get permission to use)
- [ ] **All placeholder text** replaced
- [ ] **Copyright year** correct (2025)

---

## 🌐 Deployment Steps

### Step 1: Final Local Testing

```bash
# Navigate to project
cd /Users/nicolasleroo/Desktop/The-Baked-Alpaca

# Test locally with Live Server or:
python -m http.server 8000
# Visit http://localhost:8000
```

- [ ] Test all pages locally
- [ ] Check browser console for errors
- [ ] Verify all images load

### Step 2: Git Repository Setup

```bash
# Initialize Git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: The Baked Alpaca website"

# Create main branch
git branch -M main

# Add remote repository (create on GitHub first)
git remote add origin https://github.com/USERNAME/the-baked-alpaca.git

# Push to GitHub
git push -u origin main
```

- [ ] GitHub repository created
- [ ] All files pushed to GitHub
- [ ] Repository is public or Vercel has access

### Step 3: Deploy to Vercel

#### Option A: Vercel Dashboard (Recommended)

1. [ ] Go to [vercel.com](https://vercel.com)
2. [ ] Sign up/Log in
3. [ ] Click "New Project"
4. [ ] Import GitHub repository
5. [ ] Vercel auto-detects settings
6. [ ] Click "Deploy"
7. [ ] Wait for deployment (1-2 minutes)
8. [ ] Visit deployment URL

#### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts
# Deploy to production
vercel --prod
```

- [ ] Deployment successful
- [ ] No build errors
- [ ] Site accessible at Vercel URL

### Step 4: Custom Domain (Optional)

If you own `thebakedalpaca.com`:

1. [ ] Go to Vercel project settings
2. [ ] Click "Domains"
3. [ ] Add custom domain
4. [ ] Update DNS records at domain registrar
   - Add A record or CNAME as instructed
5. [ ] Wait for DNS propagation (up to 48 hours)
6. [ ] Verify HTTPS certificate issued

**DNS Settings (typical):**
- Type: A Record
- Name: @
- Value: 76.76.21.21 (Vercel IP)

OR

- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

- [ ] Custom domain connected
- [ ] HTTPS working on custom domain
- [ ] www and non-www both work

### Step 5: Post-Deployment Testing

- [ ] Visit production URL
- [ ] Test all pages live
- [ ] Check mobile responsiveness
- [ ] Verify images load
- [ ] Test contact form submission
- [ ] Run Lighthouse on production URL
- [ ] Check in different browsers

---

## 📊 Post-Launch Tasks

### Week 1: Setup Analytics & SEO

- [ ] **Google Analytics** setup
  - [ ] Create GA4 property
  - [ ] Add tracking code to all pages
  - [ ] Verify tracking works
- [ ] **Google Search Console**
  - [ ] Add property
  - [ ] Verify ownership
  - [ ] Submit sitemap (`/sitemap.xml`)
  - [ ] Request indexing for homepage
- [ ] **Google Business Profile**
  - [ ] Create/claim listing
  - [ ] Verify business
  - [ ] Add photos
  - [ ] Add business hours
  - [ ] Add website URL
- [ ] **Bing Webmaster Tools**
  - [ ] Add site
  - [ ] Submit sitemap

### Week 2-4: Monitor & Optimize

- [ ] Monitor Google Search Console for errors
- [ ] Check analytics for user behavior
- [ ] Fix any reported issues
- [ ] Collect customer feedback
- [ ] Add more photos from actual products
- [ ] Update gallery with new creations

### Ongoing Maintenance

- [ ] Update gallery monthly
- [ ] Add new testimonials as received
- [ ] Update seasonal offerings
- [ ] Monitor site speed
- [ ] Keep software dependencies updated
- [ ] Renew domain annually
- [ ] Backup site files regularly

---

## 🎯 Success Metrics

Track these KPIs after launch:

**Traffic:**
- [ ] Google Analytics tracking visitors
- [ ] 100+ unique visitors in first month
- [ ] Average session duration > 1 minute

**Engagement:**
- [ ] Contact form submissions tracked
- [ ] Gallery views monitored
- [ ] Bounce rate < 60%

**SEO:**
- [ ] Ranking for "peachtree city bakery"
- [ ] Ranking for "custom cakes peachtree city"
- [ ] Google Business Profile showing in local searches

**Business Goals:**
- [ ] Contact form leads
- [ ] Phone call inquiries
- [ ] Social media followers growth

---

## 🆘 Troubleshooting

### Common Issues After Deployment

**Images not loading:**
- Check file paths are correct (case-sensitive)
- Ensure images are committed to Git
- Clear Vercel build cache and redeploy

**Form not working:**
- Verify form backend is connected
- Check browser console for errors
- Test with valid email address

**Slow load times:**
- Run Lighthouse audit
- Compress images further
- Check for large video files

**Mobile menu not opening:**
- Clear browser cache
- Check JavaScript console for errors
- Verify all JS files are loading

**404 errors:**
- Check file paths in links
- Ensure all HTML files are in root directory
- Verify vercel.json routing configuration

---

## ✅ Final Sign-Off

When all items are checked:

- [ ] **I have tested the entire website thoroughly**
- [ ] **All contact information is correct**
- [ ] **All images are optimized and loading**
- [ ] **Contact form is working**
- [ ] **Site is mobile-friendly**
- [ ] **SEO is optimized**
- [ ] **Site is deployed and accessible**
- [ ] **Analytics tracking is set up**
- [ ] **I am ready to launch!**

---

**Launch Date:** _______________

**Production URL:** _______________

**Deployed By:** _______________

---

🎉 **Congratulations on launching The Baked Alpaca website!** 🎉
