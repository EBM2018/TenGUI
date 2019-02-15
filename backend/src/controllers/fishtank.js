const { Fishtank, FishtankStatus } = require('../database/models');

module.exports = {
  create: () => Fishtank.create({
    ownerId: 0,
    shoalId: 0,
    statusId: FishtankStatus.ONGOING,
    closedAt: null,
  }),
};
