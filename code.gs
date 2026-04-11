// Google Apps Script - Galaxy Beauty Academy Form Handler
// Deploy as Web App and set execute as "Me" and permissions as "Anyone"
// This saves form data to Google Sheets only

function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses');
    
    // If sheet doesn't exist, create it
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Form Responses');
      // Add headers
      sheet.appendRow(['Timestamp', 'Full Name', 'Email', 'Phone', 'Course', 'Source', 'Campaign']);
    }
    
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    
    // Get the last row to check if headers exist
    var lastRow = sheet.getLastRow();
    
    // If sheet is empty, add headers first
    if (lastRow === 0) {
      sheet.appendRow(['Timestamp', 'Full Name', 'Email', 'Phone', 'Course', 'Source', 'Campaign']);
    }
    
    // Append the form data
    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.course || '',
      data.source || 'direct',
      data.campaign || 'none'
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