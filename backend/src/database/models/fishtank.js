module.exports = (sequelize, DataTypes) => {
  const Fishtank = sequelize.define('Fishtank', {
    ownerId: DataTypes.INTEGER,
    shoalId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
  }, {
    timestamps: true,
    updatedAt: false,
  });
  Fishtank.associate = (models) => {
    Fishtank.belongsTo(models.FishtankStatus, { foreignKey: 'statusId' });
  };
  return Fishtank;
};
