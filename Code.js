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
      sheet.appendRow(['Timestamp', 'Full Name', 'Email', 'Phone', 'Course', 'Source', 'Campaign']);
    }
    
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    
    // Add row with form data
    sheet.appendRow([
      new Date(),
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.course || '',
      data.source || 'Website',
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

// Test function - open in browser to test
function doGet() {
  return ContentService.createTextOutput(
    "Galaxy Academy Form Handler is working! Time: " + new Date()
  ).setMimeType(ContentService.MimeType.TEXT);
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