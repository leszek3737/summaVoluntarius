function newStatusOfVolunteer() {
    var config = getConfig()
    var status = downloadDateFromSheet(config.statusSheet, getSheet(getSpreadsheet(config.responsesSpreadsheetId), config.statusSheet.name))
    var statusType = getFirstFromArray(status)
    var resoinsesSheet = getSheet(getSpreadsheet(config.responsesSpreadsheetId), config.responsesSheet.name)
    var responsesData = downloadDateFromSheet(config.responsesSheet, resoinsesSheet)
    var i = responsesData.length;
    while (i--) {
        if (responsesData[i][config.statusSheet.nameColArr]) {
            var idStatus = statusType.indexOf(responsesData[i][config.statusSheet.nameColArr])
            sendMail({
                mail: responsesData[i][config.responsesSheet.mailColArr],
                subject: status[idStatus][config.statusSheet.subjectColArr],
                templateFile: 'html/templateMail',
                template: {
                    name: responsesData[i][config.responsesSheet.nameColArr],
                    message: status[idStatus][config.statusSheet.messageColArr],
                }
            })
            cutRow(i + config.responsesSheet.startRow, 2, resoinsesSheet, getSheet(getSpreadsheet(config.responsesSpreadsheetId), status[idStatus][config.statusSheet.sheetColArr]))
        }
    }
}