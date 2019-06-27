function onOpen(e) {
    SpreadsheetApp.getUi()
    .createMenu('Volunteer')
    .addItem('decisions statuit', 'newStatusOfVolunteer')
    .addToUi();
  }