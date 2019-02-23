const request = require('supertest');
const sinon = require('sinon');
const faker = require('../../Fakers/index.js');
const models = require('../../../database/models');

const validUsers = [{
  id: 0,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InJlaW11YmVzdGdpcmwifQ.mQuD55X_12rMliQbUhsZmO12WFhsduEkXoaTJ5R8-YQ',
}, {
  id: 1,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Im11cmFzYWlzZ3JlYXR0aG8ifQ.p4PpEK6QQukfVrSQdsJsY1QIrQzY7OEFtmdN_JPrRgY',
}];

describe('Fishtank retrieval validation', () => {
  let app;
  let requestLoader;
  let mockTeamy;

  beforeEach(() => {
    requestLoader = require('../../../middlewares/requestLoading/');
    mockTeamy = require('../../../__mock_teamy__');
    sinon.stub(requestLoader, 'addUser')
      .callsFake(faker.addUser(validUsers));
    sinon.stub(mockTeamy, 'isUserPartOfShoal')
      .callsFake(faker.isUserPartOfShoal([validUsers[0]]));
    app = require('../../../');
  });

  afterEach(() => {
    requestLoader.addUser.restore();
    mockTeamy.isUserPartOfShoal.restore();
  });

  afterAll(() => {
    models.sequelize.close();
  });

  test('It should accept a valid request from a user part of the fishtank\'s shoal', async () => {
    const fishtank = await models.Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: models.FishtankStatus.ONGOING,
      closedAt: null,
    });
    fishtank.setDataValue('status', await fishtank.getStatus());

    return request(app)
      .get(`/api/fishtanks/${fishtank.id}`)
      .send({
        token: validUsers[0].token,
      })
      .set('Content-Type', 'application/json')
      .expect(200, {
        id: fishtank.id,
        ownerId: fishtank.ownerId,
        shoalId: fishtank.shoalId,
        createdAt: fishtank.createdAt,
        status: { name: fishtank.getDataValue('status').name },
      });
  });

  test('It should accept a valid request from the fishtank owner', async () => {
    const fishtank = await models.Fishtank.create({
      ownerId: validUsers[1].id,
      shoalId: 0,
      statusId: models.FishtankStatus.ONGOING,
      closedAt: null,
    });
    fishtank.setDataValue('status', await fishtank.getStatus());

    return request(app)
      .get(`/api/fishtanks/${fishtank.id}`)
      .send({
        token: validUsers[0].token,
      })
      .set('Content-Type', 'application/json')
      .expect(200, {
        id: fishtank.id,
        ownerId: fishtank.ownerId,
        shoalId: fishtank.shoalId,
        createdAt: fishtank.createdAt,
        status: { name: fishtank.getDataValue('status').name },
      });
  });
});