import { NgTablePage } from './app.po';

describe('ng-table App', () => {
  let page: NgTablePage;

  beforeEach(() => {
    page = new NgTablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
