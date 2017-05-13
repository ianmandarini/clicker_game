import { ClickerGamePage } from './app.po';

describe('clicker-game App', () => {
  let page: ClickerGamePage;

  beforeEach(() => {
    page = new ClickerGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
