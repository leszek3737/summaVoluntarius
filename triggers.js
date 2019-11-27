function onOpen(e) {
  SpreadsheetApp.getUi()
  .createMenu('Obsługa')
  .addItem('Przypisz decyzjie', 'newStatusOfVolunteer')
  .addToUi();
}