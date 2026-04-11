# Google Sheets Form Setup

## 1. Create Google Sheets
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new spreadsheet named "Galaxy Beauty Academy Leads"
3. Rename first sheet to "Form Responses"

## 2. Add Apps Script
1. In spreadsheet: **Extensions** → **Apps Script**
2. Paste this code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses');
    
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Form Responses');
      sheet.appendRow(['Timestamp', 'Full Name', 'Email', 'Phone', 'Course', 'Source', 'Campaign']);
    }
    
    var data = JSON.parse(e.postData.contents);
    var lastRow = sheet.getLastRow();
    
    if (lastRow === 0) {
      sheet.appendRow(['Timestamp', 'Full Name', 'Email', 'Phone', 'Course', 'Source', 'Campaign']);
    }
    
    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.course || '',
      data.source || 'direct',
      data.campaign || 'none'
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Save the project

## 3. Deploy Web App
1. **Deploy** → **New deployment**
2. Select **Web app**
3. Set:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Deploy and copy the Web App URL

## 4. Update index.html
Find line ~1001 and replace the URL:
```javascript
fetch('YOUR_WEB_APP_URL_HERE', {
```

---

## How It Works:
1. User fills form and clicks submit
2. Data saves to Google Sheets
3. After 1.5 seconds, user is redirected to WhatsApp with pre-filled message
4. User sends the message manually

## WhatsApp Message Format:
```
Hi, I am [Name]. I am interested in the [Course] course. Please provide more details.
```