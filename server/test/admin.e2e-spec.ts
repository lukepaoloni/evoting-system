import * as request from 'supertest';

describe('Admin - Configurations', () => {
  let token = '';
  const user = {
    username: 'testadmin',
    password: 'password',
  };

  beforeAll(done => {
    request('')
      .post('http://localhost:4000/api/rest/users/login')
      .set('Accept', 'application/json')
      .send({
        username: user.username,
        password: user.password,
      })
      .then(res => {
        expect(res.status).toBe(201);
        expect(res.body.username).toBeDefined();
        expect(res.body.token).toBeDefined();
        token = res.body.token;
        done();
      });
  });

  it(`Amend configuration. (PUT).`, done => {
    return request('')
      .put('http://localhost:4000/api/rest/configurations')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send({
        voteType: 'first_pass',
        limit: 1,
        startDate: '2019-05-01 09:00:00',
        endDate: '2019-08-01 09:00:00',
      })
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
        done();
      });
  });
});
