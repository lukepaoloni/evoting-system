import * as request from 'supertest';

describe('Voters', () => {
  let token = '';
  const user = {
    id: null,
    username: 'testuser',
    password: 'password',
    constituencyId: null,
  };

  it(`Create a user (POST).`, async done => {
    return await request('')
      .get('http://localhost:4000/api/rest/constituency/')
      .set('Accept', 'application/json')
      .then(res => {
        expect(res.status).toBe(200);
        user.constituencyId = res.body[0].id;
        done();
      });
  });

  it(`Create a user (POST).`, async done => {
    return await request('')
      .post('http://localhost:4000/api/rest/users/')
      .set('Accept', 'application/json')
      .send({
        username: user.username,
        password: user.password,
        constituencyId: user.constituencyId,
      })
      .then(res => {
        expect(res.status).toBe(201);
        expect(res.body.success).toBe(true);
        done();
      });
  });

  it(`Login (POST).`, async done => {
    return await request('')
      .post('http://localhost:4000/api/rest/users/login')
      .set('Accept', 'application/json')
      .send({
        username: user.username,
        password: user.password,
      })
      .then(res => {
        expect(res.status).toBe(201);
        expect(res.body.username).toBeDefined();
        expect(res.body.role).toBeDefined();
        expect(res.body.token).toBeDefined();
        expect(res.body.iatDate).toBeDefined();
        done();
      });
  });

  it(`Login (POST).`, async done => {
    return await request('')
      .post('http://localhost:4000/api/rest/users/login')
      .set('Accept', 'application/json')
      .send({
        username: user.username,
        password: user.password,
      })
      .then(res => {
        expect(res.status).toBe(201);
        expect(res.body.username).toBeDefined();
        expect(res.body.role).toBeDefined();
        expect(res.body.token).toBeDefined();
        expect(res.body.iatDate).toBeDefined();
        token = res.body.token;
        done();
      });
  });

  it(`Get Users Constituency, Candidates In That Constituency & the Parties. (Get).`, async done => {
    return await request('')
      .get('http://localhost:4000/api/rest/users/constituency')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
        done();
      });
  });
});
