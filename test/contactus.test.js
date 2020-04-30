import { expect, server, BASE_URL } from './setup';

describe('Contact Us page test', () => {
  it('gets contactus URL', (done) => {
    server
      .get(`${BASE_URL}/contactus`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('This is the contact info');
        done();
      });
  });
});