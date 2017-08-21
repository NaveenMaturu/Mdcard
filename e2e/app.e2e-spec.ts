import { MdcardPage } from './app.po';

describe('mdcard App', () => {
  let page: MdcardPage;

  beforeEach(() => {
    page = new MdcardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
