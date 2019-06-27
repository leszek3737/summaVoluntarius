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