function getSheet(spreadsheet, name){
  return spreadsheet.getSheetByName(name)
}
function getSpreadsheet(id){
  return SpreadsheetApp.openById(id)
}
function downloadDateFromSheet(config, sheetSource){
  return sheetSource.getRange(config.startRow, config.startCol, sheetSource.getLastRow() - 1, sheetSource.getLastColumn()).getValues()
}
function getFirstFromArray(data){
  var first = []
  for (var i = 0; i < data.length; i++) {
    first.push(data[i][0])
  }
  return first
}
function cutRow(row, col, sheet, destinationSheet){
  var cellsDecision =  sheet.getRange(row, col, 1, sheet.getLastColumn()).getValues()  
  destinationSheet.appendRow(cellsDecision[0])
  sheet.deleteRow(row)
}
function sendMail(data) {
  var template = HtmlService.createTemplateFromFile(data.templateFile);
  template.data = data.template
  var html = template.evaluate().getBlob().getDataAsString();
  GmailApp.sendEmail( data.mail, data.subject, "",    {
    htmlBody: html,
  } )
}
//function dayInMiliSec(day){
//  return 86400000 * day
//}
//function dateLessTime(time){
//  return new Date(Date.now() - time)
//}
//function dateIsOld(dateLessTime){
//  return function(date){
//    if (date > dateLessTime){
//      return true 
//    } else {
//      return false
//    }
//  }
//}
//function appendRowByIndexToSheet(data, index, sheet){
//  for (var i = 0; i < index.length; i++) {
//    sheet.appendRow(data[index[i]])
//  }
//}
//function indexElementsNotExistingInArray(data, dataIn){
//  var indexOf = []
//  for(var i = 0; i < dataIn.length; i++) {
//    if(data.indexOf(dataIn[i]) == -1 && dataIn[i]){
//      indexOf.push(i)
//    }
//  }
//  return indexOf
//}