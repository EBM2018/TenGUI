const request = require('supertest');
const sinon = require('sinon');
const faker = require('../../Fakers/index.js');
const {
  sequelize,
  Fishtank,
  FishtankInteractionType,
  FishtankStatus,
} = require('../../../database/models');

const validUsers = [{
  id: 0,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InJlaW11YmVzdGdpcmwifQ.mQuD55X_12rMliQbUhsZmO12WFhsduEkXoaTJ5R8-YQ', // A valid user who owns most of this suite's fishtanks
}, {
  id: 1,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Im11cmFzYWlzZ3JlYXR0aG8ifQ.p4PpEK6QQukfVrSQdsJsY1QIrQzY7OEFtmdN_JPrRgY', // A valid user who is always part of the fishtank's shoal
}];

describe('Fishtank creation validation', () => {
  let app;
  let requestLoader;
  let mockTeamy;

  beforeEach(() => {
    requestLoader = require('../../../middlewares/requestLoading/');
    mockTeamy = require('../../../__mock_teamy__');
    sinon.stub(requestLoader, 'addUser')
      .callsFake(faker.addUser(validUsers));
    sinon.stub(mockTeamy, 'isUserPartOfShoal')
      .callsFake(faker.isUserPartOfShoal([validUsers[1]]));
    app = require('../../../');
  });

  afterEach(() => {
    requestLoader.addUser.restore();
    mockTeamy.isUserPartOfShoal.restore();
  });

  afterAll(() => {
    sequelize.close();
  });

  test('It should accept a valid emergency press', async () => {
    const fishtank = await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });

    return request(app)
      .post(`/api/fishtanks/${fishtank.id}/interactions`)
      .send({
        type: FishtankInteractionType.EMERGENCY_PRESS,
        token: validUsers[1].token,
      })
      .set('Content-Type', 'application/json')
      .expect(201);
  });
});