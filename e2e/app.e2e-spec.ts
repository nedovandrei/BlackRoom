import { BlackRoomPage } from './app.po';

describe('black-room App', () => {
  let page: BlackRoomPage;

  beforeEach(() => {
    page = new BlackRoomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
