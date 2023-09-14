function doGet() {
  
    var feedbackSheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1Z7Jbfu-LOJa23MoJPS3hWAGrfVSLvS7lovPEUgeWEcU/edit')
    var sheet = feedbackSheet.getSheetByName('LEADERBOARD') // Replace "Sheet1" with your sheet's name
    var data = sheet.getDataRange().getValues();
  
    var blocks = []
    for (var i = 1; i < data[0].length; i++) {
      if (data[0][i] === "") {
        break; // Stop when an empty string is encountered
      }
      blocks.push(data[0][i]);
    }
  var eventNames = [];
  var scores = {};
  
  for (var i = 1; i < data.length - 1; i++) {
    if (data[i][0] === "") {
      break; // Stop when an empty string is encountered in the first column
    }
    eventNames.push(data[i][0]); // Extract event names (first column)
  
    // Extract scores for the current event until an empty string is encountered
    scores[i.toString()] = [];
    for (var j = 1; j < data[i].length; j++) {
      if (data[i][j] === "") {
        break; // Stop when an empty string is encountered in the scores column
      }
      scores[i.toString()].push(data[i][j]);
    }
  }
  
  
    var result = {
      blocks: blocks,
      eventNames: eventNames,
      scores: scores
    };
  
    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  }
  