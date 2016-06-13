import { BankDemoPage } from './app.po';

describe('bank-demo App', function() {
  let page: BankDemoPage;

  beforeEach(() => {
    page = new BankDemoPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bank-demo works!');
  });
});
