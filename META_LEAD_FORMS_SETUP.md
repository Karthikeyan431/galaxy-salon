# Meta Lead Forms Setup Guide

## How to Connect Meta Lead Forms Directly to Google Sheets

This guide will help you set up Meta (Facebook/Instagram) Lead Forms that send leads directly to your Google Sheet - without any website!

---

## Why Use Meta Lead Forms?

| Feature | Meta Lead Forms | Your Website Form |
|---------|-----------------|-------------------|
| **Cost per Lead** | $3-8 | $15-30+ |
| **Conversion** | Higher (in-app) | Lower (external) |
| **Setup** | Easy | Medium |
| **Data Storage** | Google Sheets | Google Sheets |

---

## Step 1: Create a Lead Form in Meta

### Option A: Through Facebook Ads Manager

1. Go to [business.facebook.com](https://business.facebook.com)
2. Click **Leads Center** (left sidebar)
3. Click **Create Form** → **Create New Form**

4. **Configure Form**:
   - **Form Name**: Galaxy Academy Enquiry Form
   - **Welcome Screen**:
     - Headline: "Start Your Beauty Career Today!"
     - Subhead: "Get free career counselling from Galaxy Beauty Academy"
     - Add Image: Upload your logo

5. **Questions to Add**:
   - ✏️ Custom Question: "Full Name" (Required)
   - ✏️ Custom Question: "Email Address" (Required)
   - ✏️ Custom Question: "Phone Number" (Required)
   - ❓ Multiple Choice: "Which course interests you?" (Optional)
     - Options: Makeup, Hair, Skin Care, Nail Art, Cosmetology, Salon Management, Not Sure

6. **Call to Action**:
   - Button Text: "Submit"
   - Thank You Screen: "Thank you! Our counsellor will call you within 24 hours."

7. **Save Form**

---

### Option B: Through Leads Center

1. Go to [facebook.com/leads_center](https://facebook.com/leads_center)
2. Click **Create Form**
3. Follow the same steps above

---

## Step 2: Connect Form to Google Sheets (Direct)

1. In **Leads Center**, find your form
2. Click **Connect with Partner**
3. Select **Google Sheets**
4. Sign in to your Google account
5. Select your Google Sheet (Galaxy Enquiries)
6. Click **Connect**

---

## Step 3: Test the Integration

1. In Leads Center, click your form
2. Click **Preview** → **Open in Facebook**
3. Fill out the form as a test lead
4. Check your Google Sheet - data should appear!

---

## Step 4: Create an Ad Using This Form

1. Go to **Ads Manager** → **Create Ad**
2. Choose **Lead Generation** as your objective
3. Select your lead form
4. Set targeting:
   - Location: Chennai, Tamil Nadu
   - Age: 18-45
   - Interests: Beauty, Makeup, Fashion, Cosmetology
5. Set budget: Start with ₹300-500/day
6. Publish!

---

## Google Sheet Headers Setup

Make sure your Google Sheet has these columns:

| Column | Header Name |
|--------|-------------|
| A | Timestamp |
| B | Full Name |
| C | Email |
| D | Phone Number |
| E | Course |

Meta will automatically map these fields!

---

## How to Track Lead Source

Meta passes source information. To track which ad generated the lead:

1. In Ads Manager, go to **Leads** tab
2. Click **Export**
3. Export includes: ad name, campaign, date

---

## Alternative: Use Webhook with Zapier (Advanced)

If you want more customization:

### Setup:
1. Create Lead Form in Meta
2. In Form Settings → **Webhook**
3. Enter Zapier webhook URL
4. Zapier parses data → sends to Google Sheets

### Zapier Setup:
1. Create Zap: Webhook → Google Sheets
2. Map fields: Name, Email, Phone, Course
3. Test and activate

---

## Quick Checklist

- [ ] Create Lead Form in Meta
- [ ] Add questions (Name, Email, Phone, Course)
- [ ] Connect to Google Sheets
- [ ] Test with preview form
- [ ] Create Lead Generation Ad
- [ ] Set targeting (Chennai, 18-45 age)
- [ ] Launch and monitor!

---

## Expected Results

| Metric | Typical Values |
|--------|----------------|
| Cost per Lead | ₹250-700 ($3-8) |
| Conversion Rate | 10-20% |
| Daily Leads | 5-20 (with ₹500/day budget) |

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| No leads in sheet | Reconnect Google Sheets in Leads Center |
| Form not showing | Check form is published and active |
| Missing fields | Edit form questions in Leads Center |

---

## Need Help?

- Meta Business Help: [business.facebook.com/help](https://business.facebook.com/help)
- Google Sheets: Create new sheet and reconnect

---

## What's Next?

Once you have leads flowing:
1. Set up auto-responder email (in Meta or Google Sheets)
2. Create custom audiences for retargeting
3. Set up offline conversion tracking
4. Optimize ads based on lead quality

---

Good luck with your lead generation! 🚀