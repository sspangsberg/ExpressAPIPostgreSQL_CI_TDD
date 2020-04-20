import { expect, server, BASE_URL } from './setup';

describe('Index page test', () => {
  it('gets base URL', (done) => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Express API with TDD and CD/CI');
        done();
      });
  });
});
