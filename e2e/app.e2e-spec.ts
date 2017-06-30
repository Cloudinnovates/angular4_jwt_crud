import { Angular4CoursePage } from './app.po';

describe('angular4_jwt_crud App', () => {
  let page: Angular4CoursePage;

  beforeEach(() => {
    page = new Angular4CoursePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
