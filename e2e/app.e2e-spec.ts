import { AngularAnimationsPage } from './app.po';

describe('angular-animations App', function() {
  let page: AngularAnimationsPage;

  beforeEach(() => {
    page = new AngularAnimationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
