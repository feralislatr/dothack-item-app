import { DothackItemsPage } from './app.po';

describe('dothack-items App', () => {
  let page: DothackItemsPage;

  beforeEach(() => {
    page = new DothackItemsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
