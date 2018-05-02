import { AppPage } from './app.po';

describe('angular-issues-page App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Github issues page in Angular 5');
  });
});
