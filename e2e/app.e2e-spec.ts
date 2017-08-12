import { PulzoTestPage } from './app.po';

describe('pulzo-test App', () => {
  let page: PulzoTestPage;

  beforeEach(() => {
    page = new PulzoTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
