export class BankDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bank-demo-app h1')).getText();
  }
}
