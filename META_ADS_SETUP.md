# Meta Ads Lead Generation Guide

## Your Current Setup ✅

- Website form connected to Google Sheets ✓
- Form submits data automatically ✓
- Meta Pixel installed for tracking ✓

---

## How to Run Meta Ads for Lead Generation

### Step 1: Get Your Website URL with Tracking

Your website URL for Meta ads should include UTM parameters:

```
https://galaxybeautyacademy.com/#hero-form?utm_source=meta&utm_campaign=beauty_course_ads

```

Replace the UTM parameters:
- `utm_campaign` = your campaign name (no spaces, use underscores)

### Step 2: Create Meta Ad

1. Go to **Meta Business Manager**
2. Create **Lead Generation** campaign
3. Choose **Send people to your website** as destination
4. Enter your UTM-tagged URL:
   ```
   https://galaxybeautyacademy.com/#hero-form?utm_source=meta&utm_campaign=YOUR_CAMPAIGN_NAME
   ```
5. Set targeting:
   - **Location**: Chennai, Tamil Nadu
   - **Age**: 18-45
   - **Interests**: Beauty, Makeup, Fashion, Cosmetology, Hair Styling
6. Set budget: Start with ₹300-500/day

### Step 3: What Happens

1. User sees your ad on Facebook/Instagram
2. User clicks ad → lands on your website with UTM params
3. User fills form → data saved to Google Sheets
4. Meta Pixel fires "Lead" event → tracks conversion
5. You see which campaign/ads work best!

---

## Google Sheet Data You'll See

| Column | Description |
|--------|-------------|
| Timestamp | When user submitted |
| Full Name | User's name |
| Email | User's email |
| Phone | User's phone |
| Course | Course they're interested in |
| Source | `meta` (from UTM) |
| Campaign | Your campaign name |

---

## How to Track Ad Performance

### In Meta Ads Manager:

1. Go to **Leads** section
2. See all leads with:
   - Which ad generated the lead
   - Cost per lead
   - Lead quality

### In Google Sheets:

1. Filter by "Source" = "meta"
2. Filter by "Campaign" to compare different ads
3. Track which courses are most popular

---

## Important: Update Your Pixel ID

Currently in your code, the Pixel ID is set as placeholder:

```html
fbq('init', 'YOUR_PIXEL_ID_HERE');
```

### To find your Pixel ID:

1. Go to **Meta Events Manager**
2. Click your pixel
3. Copy the Pixel ID (looks like: 1234567890123456)

### To update in index.html:

Find line 38 in index.html and replace:
```
YOUR_PIXEL_ID_HERE
```

with your actual Pixel ID.

---

## Why This Works for Lower Cost

| Factor | How It Helps |
|--------|--------------|
| UTM Tracking | Know exactly which ads work |
| Pixel Data | Meta optimizes toward conversions |
| Direct Form | Users stay on your trusted website |
| Retargeting | Create audiences from website visitors |

---

## Tips to Reduce Cost Per Lead

1. **Use carousel ads** showing course images
2. **Add "Free Counselling"** in ad text
3. **Target lookalike audiences** of your best customers
4. **Exclude** people who already visited (retargeting)
5. **A/B test** different ad creatives

---

## Quick Checklist

- [ ] Get your Meta Pixel ID from Events Manager
- [ ] Update Pixel ID in index.html (line 38)
- [ ] Create ad with UTM URL: `yoursite.com/#hero-form?utm_source=meta&utm_campaign=YOUR_CAMPAIGN`
- [ ] Launch and monitor Google Sheet for leads
- [ ] Optimize based on which courses get most enquiries

---

## Need Help?

- Meta Ads Manager: [business.facebook.com/adsmanager](https://business.facebook.com/adsmanager)
- Meta Events Manager: [business.facebook.com/events_manager](https://business.facebook.com/events_manager)