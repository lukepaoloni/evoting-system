import * as request from 'supertest';

describe('Voters', () => {
  let token = '';
  const user = {
    id: null,
    username: 'testuser',
    password: 'password',
  };

  it(`Create a user (POST).`, async done => {
    return await request('')
      .post('http://localhost:4000/api/rest/users/')
      .set('Accept', 'application/json')
      .send({
        username: user.username,
        password: user.password,
      })
      .then(res => {
        expect(res.status).toBe(201);
        expect(res.body.success).toBe(true);
        done();
      });
  });
});
