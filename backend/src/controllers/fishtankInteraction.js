const { FishtankInteraction } = require('../database/models');

module.exports = {
  create: (req, res) => {
    FishtankInteraction.create({
      fishtankId: req.locals.fishtank.id,
      userId: req.locals.user.id,
      typeId: req.body.type,
      payload: {},
    })
      .then(() => res.status(201).send())
      .then(() => console.log('ping owner')) // TODO: ping owner w/ websockets
      .catch(() => res.status(500).send());
  },
  show: (req, res) => {
    FishtankInteraction.getFormattedInteractions(req.locals.fishtank.id)
      .then(interactions => res.status(200).send(interactions));
  },
};