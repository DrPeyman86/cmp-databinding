import { CmpDatabindingPage } from './app.po';

describe('cmp-databinding App', function() {
  let page: CmpDatabindingPage;

  beforeEach(() => {
    page = new CmpDatabindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
