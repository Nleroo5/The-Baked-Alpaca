# 🔤 Custom Fonts Setup Guide - The Baked Alpaca

Your website is now configured to use your actual brand fonts. Follow this guide to add the font files.

## 📋 Required Brand Fonts

Your brand uses these specific fonts:

1. **BEVERLY HILLS TYPEFACE** - Headers (h1, h2, h3, logo)
2. **ARNO PRO LIGHT DISPLAY** - Body text and subheaders
3. **EDWARDIAN SCRIPT ITC REGULAR** - Accent text (decorative elements)

---

## 🚀 Quick Setup (3 Steps)

### Step 1: Create Fonts Folder

```bash
mkdir -p /Users/nicolasleroo/Desktop/The-Baked-Alpaca/assets/fonts
```

Or manually create: `assets/fonts/` folder in your project

### Step 2: Add Font Files

You need to add these font files to `/assets/fonts/`:

**Beverly Hills:**
- `BeverlyHills-Regular.woff2`
- `BeverlyHills-Regular.woff`
- `BeverlyHills-Bold.woff2` (optional)
- `BeverlyHills-Bold.woff` (optional)

**Arno Pro:**
- `ArnoPro-LightDisplay.woff2`
- `ArnoPro-LightDisplay.woff`
- `ArnoPro-Regular.woff2`
- `ArnoPro-Regular.woff`
- `ArnoPro-Semibold.woff2` (optional)
- `ArnoPro-Semibold.woff` (optional)

**Edwardian Script ITC:**
- `EdwardianScriptITC-Regular.woff2`
- `EdwardianScriptITC-Regular.woff`

### Step 3: Test

Open your website and the custom fonts should load automatically!

---

## 📁 Where to Get Font Files

### If You Have the Fonts Installed on Your Computer:

#### Option 1: Use a Font Converter (Easiest)

1. Go to [CloudConvert](https://cloudconvert.com/ttf-to-woff2) or [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
2. Upload your font files (.ttf, .otf, etc.)
3. Convert to:
   - WOFF2 (modern browsers - best compression)
   - WOFF (older browsers - fallback)
4. Download converted files
5. Rename to match the expected filenames above
6. Place in `/assets/fonts/` folder

#### Option 2: Find Original Font Files

**On Mac:**
- Font Book app → Right-click font → "Show in Finder"
- Usually in: `/Library/Fonts/` or `~/Library/Fonts/`

**On Windows:**
- Settings → Fonts → Click font → "Font file location"
- Usually in: `C:\Windows\Fonts\`

Then convert using Option 1 above.

### If You Need to Purchase/License the Fonts:

#### Beverly Hills Typeface
- Search on font marketplaces:
  - [MyFonts](https://www.myfonts.com)
  - [Creative Market](https://creativemarket.com)
  - [FontSpring](https://www.fontspring.com)
- License for web use (important!)
- Price: Typically $20-50

#### Arno Pro
- Adobe Fonts (included with Creative Cloud)
- [Adobe Fonts - Arno Pro](https://fonts.adobe.com/fonts/arno)
- OR purchase from [MyFonts](https://www.myfonts.com)

#### Edwardian Script ITC
- Part of Microsoft Office (included with Windows)
- [MyFonts - Edwardian Script ITC](https://www.myfonts.com)
- Price: ~$35

---

## 🎨 Temporary Fallback (While Getting Fonts)

If you don't have the font files yet, you can use similar Google Fonts temporarily:

### Option 1: Use the Fallback Fonts

The website is already configured with fallback fonts that will display if your custom fonts aren't available:
- **Heading fallback:** Playfair Display, Georgia (serif)
- **Body fallback:** Georgia (serif)
- **Accent fallback:** Cursive (system)

### Option 2: Use Similar Google Fonts Temporarily

1. **Edit [css/fonts.css](css/fonts.css)**
2. **Uncomment** the Google Fonts import at the bottom:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Text:wght@300;400;600&family=Great+Vibes&display=swap');
   ```

3. **Edit [css/variables.css](css/variables.css)** - temporarily change lines 46-48:
   ```css
   --font-heading: 'Cinzel', serif;
   --font-body: 'Crimson Text', serif;
   --font-accent: 'Great Vibes', cursive;
   ```

**Similar vibes:**
- Cinzel ≈ Beverly Hills (elegant, luxury serif)
- Crimson Text ≈ Arno Pro (classic, readable)
- Great Vibes ≈ Edwardian Script (elegant script)

**Remember:** Replace with your actual fonts before launch!

---

## ✅ Verification Checklist

After adding font files:

- [ ] Font files are in `/assets/fonts/` folder
- [ ] Files are named correctly (case-sensitive!)
- [ ] At least `.woff2` files added (WOFF2 is modern standard)
- [ ] Test website in browser
- [ ] Open DevTools → Network tab → Filter "Font"
- [ ] Verify fonts load (should see 200 status)
- [ ] Check for 404 errors (means filename mismatch)
- [ ] Text displays with custom fonts

---

## 🎯 Where Each Font is Used

### BEVERLY HILLS (Headers)
Used for:
- Logo: "The Baked Alpaca"
- All h1, h2, h3, h4, h5, h6 tags
- Page titles
- Section headings
- Hero titles
- Card titles

**Preview:**
```
The Baked Alpaca
Luxury Baked Goods
Our Story
```

### ARNO PRO LIGHT DISPLAY (Body/Subheaders)
Used for:
- All body text (paragraphs)
- Subheadings
- Descriptions
- Testimonials
- Form labels
- Footer text

**Preview:**
```
Experience luxury baked goods that double as art.
European-inspired pastries, custom cakes, and dessert
tables for your most important celebrations.
```

### EDWARDIAN SCRIPT ITC (Accent)
Used for:
- Decorative elements
- Special callouts
- Accent phrases
- Button text (in some cases)
- Navigation links

**Preview:**
```
Contact Us
View Our Creations
Made with Love
```

---

## 🔧 Troubleshooting

### Fonts Not Loading?

**1. Check file paths:**
```bash
# Should exist:
ls /Users/nicolasleroo/Desktop/The-Baked-Alpaca/assets/fonts/
```

**2. Check browser console (F12):**
- Look for 404 errors
- Check if font files are being requested
- Verify correct file names

**3. Check filename case sensitivity:**
- `BeverlyHills-Regular.woff2` ≠ `beverlyhills-regular.woff2`
- macOS is case-insensitive, but web servers are case-sensitive!

**4. Clear browser cache:**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Or open in Incognito/Private mode

**5. Verify MIME types (if self-hosting):**
- `.woff2` → `font/woff2`
- `.woff` → `font/woff`
- Vercel handles this automatically

### Font Shows Wrong Weight?

Edit [css/fonts.css](css/fonts.css) and adjust `font-weight` values in `@font-face` declarations.

### Font Looks Different?

1. Check if you have the correct variant (Light, Regular, Bold)
2. Verify the font file is not corrupted
3. Try re-converting with different settings

---

## 📊 Font Performance

### File Size Guidelines

**Target sizes:**
- WOFF2: ~30-80KB per font file
- WOFF: ~40-100KB per font file

**Total font weight budget:** <300KB for all fonts combined

### Optimization Tips

1. **Only include needed characters:**
   - Use subsetting if available
   - Remove unused glyphs (font converter options)

2. **Use WOFF2 primarily:**
   - Best compression (~30% smaller than WOFF)
   - Supported by 95%+ of browsers

3. **Font loading strategy:**
   - We use `font-display: swap` (already configured)
   - Shows fallback font immediately
   - Swaps to custom font when loaded
   - No invisible text!

---

## 📜 Font Licensing (Important!)

### Web Font Licensing Requirements

**Most font licenses require:**
- ✅ Desktop use license (for design work)
- ✅ **Web font license** (for website use) - MUST HAVE
- ✅ Specify domain(s) using the font
- ✅ Sometimes limited by page views/month

### Before Launching:

- [ ] Verify you have **web font license** for all 3 fonts
- [ ] Check if license covers: `thebakedalpaca.com` and `*.vercel.app`
- [ ] Read license terms about self-hosting vs CDN
- [ ] Keep license documentation

**Where to check:**
- Read license agreement PDF
- Check purchase receipt/email
- Contact font foundry if unsure

**Note:** Using unlicensed fonts on a commercial website is copyright infringement!

---

## 🎨 Custom Font Configuration

Current configuration in [css/variables.css](css/variables.css):

```css
--font-heading: 'BEVERLY HILLS', 'Playfair Display', Georgia, serif;
--font-body: 'Arno Pro', 'Arno Pro Light Display', Georgia, serif;
--font-accent: 'Edwardian Script ITC', cursive;
```

**How it works:**
1. Browser tries 'BEVERLY HILLS'
2. If not found, tries 'Playfair Display' (Google Font)
3. If not found, tries Georgia (system font)
4. Last resort: generic serif

This ensures your site always has readable text!

---

## 📞 Need Help?

**Common Questions:**

**Q: I have .ttf files, will those work?**
A: No, convert to .woff2 and .woff for web use. Use Font Squirrel or CloudConvert.

**Q: Can I use Adobe Fonts instead?**
A: Yes! If you have Adobe Creative Cloud with Arno Pro, you can use Adobe Fonts web project instead. [Adobe Fonts Guide](https://fonts.adobe.com/fonts/arno)

**Q: The fonts look different than in my designs?**
A: Check the font weight. Light = 300, Regular = 400, Semibold = 600, Bold = 700. Adjust in fonts.css if needed.

**Q: Do I need all the font files listed?**
A: Minimum: Each font's .woff2 file. The .woff files are fallbacks for older browsers.

---

## 🎯 Summary - What to Do

1. **Locate your font files** on your computer or purchase licenses
2. **Convert to web fonts** (.woff2 and .woff formats)
3. **Create folder:** `assets/fonts/`
4. **Add font files** with correct names
5. **Test website** - fonts should load automatically
6. **Verify licensing** for commercial web use

**Time needed:** 30 minutes to 1 hour (depending on if you have fonts already)

---

**Questions?** Check [README.md](README.md) or test with the Google Fonts fallback first!

---

## 📋 Quick Reference - Font Files Needed

Copy this checklist:

```
assets/fonts/
├── BeverlyHills-Regular.woff2
├── BeverlyHills-Regular.woff
├── ArnoPro-LightDisplay.woff2
├── ArnoPro-LightDisplay.woff
├── EdwardianScriptITC-Regular.woff2
└── EdwardianScriptITC-Regular.woff
```

Minimum files: 6 (the .woff2 and .woff for each font)
