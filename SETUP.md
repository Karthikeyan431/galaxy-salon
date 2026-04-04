# Google Sheets Form Setup Guide

Follow these steps to connect your website forms to Google Sheets:

---

## Step 1: Create Google Spreadsheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Click **+ New** → **Blank spreadsheet**
3. Rename the sheet to `Galaxy Enquiries` (click on "Untitled spreadsheet")
4. Rename the first tab to `Sheet1` (right-click on tab → Rename)
5. Add these headers in row 1:
   - **A1**: Timestamp
   - **B1**: Full Name
   - **C1**: Email
   - **D1**: Phone
   - **E1**: Course
   - **F1**: Source

---

## Step 2: Update Google Apps Script

1. In your spreadsheet, go to **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Copy the updated code below and paste it:

```javascript
/**
 * Google Apps Script - Galaxy Beauty Academy Form Handler
 * Deploy as Web App with "Anyone" access
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName('Sheet1');
    
    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Sheet1');
      sheet.appendRow(['Timestamp', 'Full Name', 'Email', 'Phone', 'Course', 'Source']);
    }
    
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    
    // Add row with form data
    sheet.appendRow([
      new Date(),
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.course || 'Website',
      data.source || 'Website'
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - open in browser to test
function doGet() {
  return ContentService.createTextOutput(
    "Galaxy Academy Form Handler is working! Time: " + new Date()
  ).setMimeType(ContentService.MimeType.TEXT);
}
```

4. Click the **Save** icon (floppy disk)
5. **Click Deploy** → **Manage deployments**
6. Find your current deployment and click the **Edit** button (pencil icon)
7. Click **Deploy** again to update it with new code

---

## Step 3: Test the Script

1. In Apps Script, click the **Deploy** dropdown → **Test deployment**
2. Copy the Web App URL
3. Open that URL in a new tab
4. You should see: "Galaxy Academy Form Handler is working! Time: [date]"

---

## Step 4: Update index.html

If the URL changed after redeploying, update it in index.html on line 979.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Script function not found" | Redeploy the web app (manage deployments → edit → deploy) |
| Data not in sheet | Check Apps Script → Executions tab for errors |
| CORS error | This is normal - the form still works |

---

## How to Redeploy (IMPORTANT)

1. Go to **Extensions** → **Apps Script**
2. Click **Deploy** → **Manage deployments**
3. Click the **Edit** icon next to your current deployment
4. Click **Deploy** (bottom right)
5. If URL changed, copy new URL and update in index.html