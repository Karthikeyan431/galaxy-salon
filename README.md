# Galaxy Beauty Academy Website

A professional website for Galaxy Beauty Academy & Salon in Chennai, Tamil Nadu - offering beauty courses, salon services, and professional makeup training.

![Galaxy Beauty Academy](images/galaxy%20logo%20website%20(1).png)

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [File Structure](#file-structure)
4. [Pages](#pages)
5. [Admin Panel](#admin-panel)
6. [Deployment](#deployment)
7. [Google SEO Setup](#google-seo-setup)
8. [Customization](#customization)
9. [Troubleshooting](#troubleshooting)
10. [Support](#support)

---

## Overview

| Property | Value |
|----------|-------|
| **Business Name** | Galaxy Beauty Academy & Salon |
| **Location** | Chennai, Tamil Nadu, India |
| **Phone** | +91 96776 94400 |
| **Email** | saransaaro@gmail.com |
| **Website** | https://galaxybeautyacademy.com |

### Courses Offered
- Professional Makeup Artistry
- Hair Styling & Extensions
- Skin Care & Aesthetics
- Nail Art & Extensions
- Cosmetology
- Salon Management

---

## Features

### Public Website
- ✅ Responsive design (mobile-friendly)
- ✅ SEO optimized with meta tags
- ✅ Open Graph & Twitter Cards
- ✅ Structured data (JSON-LD)
- ✅ Google Maps integration
- ✅ WhatsApp & Instagram links
- ✅ Meta Pixel tracking
- ✅ Portfolio page

### Admin Panel
- ✅ Secure admin login
- ✅ Edit site information
- ✅ Add/Edit/Delete courses
- ✅ Update founder info
- ✅ Change admin password

---

## File Structure

```
Galaxy-Website/
├── index.html              # Main website homepage
├── portfolio.html          # Portfolio page
├── admin.html            # Admin panel dashboard
├── test-admin.html      # Test version (no API needed)
├── style.css           # Main stylesheet
├── script.js          # JavaScript functionality
├── Code.js           # Additional code
├── voice.js          # Voice features
├── sitemap.xml        # XML sitemap for SEO
├── robots.txt        # Search engine instructions
├── vercel.json      # Vercel deployment config
├── README.md        # This file
│
├── api/                    # Serverless API (Vercel)
│   ├── content.js          # Website content API
│   ├── courses.js         # Courses CRUD API
│   ├── login.js          # Admin authentication
│   ├── dynamic-content.js  # Client-side loader
│   └── data/
│       ├── content.json  # All editable content
│       └── auth.json   # Admin credentials
│
└── images/                # All website images
    ├── logo files
    ├── course images
    ├── gallery images
    └── icons
```

---

## Pages

### 1. index.html (Homepage)
- Hero section with call-to-action
- Courses grid (6 beauty courses)
- About section (founder info)
- Gallery showcase
- Contact form & map
- Footer with social links

### 2. portfolio.html (Portfolio)
- Founder's portfolio showcase
- Work samples
- Awards & achievements

### 3. admin.html (Admin Panel)
- Login: `galaxy2026`
- Dashboard with stats
- Content management
- Course management

---

## Admin Panel

### Accessing Admin Panel

1. **URL**: `https://your-domain.com/admin.html`
2. **Password**: `galaxy2026`

### Features

| Tab | Description |
|-----|------------|
| **Overview** | View stats, quick actions |
| **Site Info** | Edit name, phone, email, social links |
| **Courses** | Add, edit, delete courses |
| **Founder** | Edit profile info |
| **Settings** | Change admin password |

### Editing Content

1. Login to admin panel
2. Navigate to desired section
3. Make changes
4. Click "Save" button
5. Changes apply immediately

---

## Deployment

### Quick Deploy to Vercel

```bash
# Navigate to project folder
cd "E:\desktop\Galaxy salon\Galaxy-Website"

# Deploy using Vercel CLI
npx vercel --prod
```

### GitHub Deployment

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Deploy website"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Deploy

### Custom Domain

1. Go to Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records with your registrar

---

## Google SEO Setup

### 1. Google Search Console

1. Visit [search.google.com/search-console](https://search.google.com/search-console)
2. Add your website URL
3. Verify ownership (HTML file or meta tag)
4. Submit sitemap

### 2. Sitemap

Your sitemap is available at: `https://your-domain.com/sitemap.xml`

Submit it in Google Search Console under "Sitemaps" section.

### 3. Request Indexing

1. Go to Google Search Console
2. Click "URL Inspection"
3. Enter your homepage URL
4. Click "Request Indexing"

### 4. Meta Verification (Optional)

Replace `YOUR_VERIFICATION_CODE` in index.html with your Google Search Console verification code:

```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```

---

## Customization

### Updating Site Information

Edit these files to update site details:

| Information | File |
|-------------|------|
| Courses | `api/data/content.json` |
| Site info | `api/data/content.json` |
| Founder | `api/data/content.json` |
| Admin password | `api/data/auth.json` |

### Changing Admin Password

1. Open `api/data/auth.json`
2. Update the password
3. Deploy changes

### Adding New Courses

Via Admin Panel:
1. Login to admin.html
2. Go to "Courses" tab
3. Click "+ Add Course"
4. Fill in details
5. Save

Manually:
Edit `api/data/content.json` and add course object:

```json
{
  "id": 7,
  "title": "New Course",
  "description": "Course description",
  "image": "images/course.jpg",
  "duration": "2 Months",
  "price": "₹20,000",
  "level": "Beginner"
}
```

### Updating Meta Tags

Edit in `index.html`:

```html
<title>Your Title</title>
<meta name="description" content="Your description">
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://...">
```

### Meta Pixel (Facebook)

Replace `YOUR_PIXEL_ID_HERE` in index.html with your actual Pixel ID:

```javascript
fbq('init', '1234567890123456');
```

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|---------|
| Admin login fails | Clear browser cache or use incognito |
| Images not loading | Check image path in content.json |
| API errors | Ensure Vercel API functions deployed |
| Google not indexing | Verify ownership in Search Console |
| Site not showing | Request indexing in Search Console |

### Testing Locally

```bash
# Install Vercel CLI
npm i -g vercel

# Run local server
vercel dev

# Test URLs
# http://localhost:3000
# http://localhost:3000/admin.html
# http://localhost:3000/api/content
```

---

## Technical Details

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Technologies
- HTML5, CSS3, JavaScript (ES6+)
- Vercel Serverless Functions (Node.js)
- JSON for data storage

### SEO Score
- Mobile-friendly: ✅
- Page speed: Optimized
- Structured data: ✅
- Sitemap: ✅
- Robots.txt: ✅

---

## License

Copyright © 2026 Galaxy Beauty Academy. All rights reserved.

---

## Contact

| Contact | Details |
|---------|---------|
| **Phone** | +91 96776 94400 |
| **Email** | saransaaro@gmail.com |
| **Instagram** | @saran_saro__ |
| **WhatsApp** | +91 96776 94400 |

---

## Changelog

### v1.0 (2026-04-04)
- Initial release
- Added admin panel
- Added serverless API
- Added SEO optimizations
- Added sitemap

---

*Last updated: April 2026*