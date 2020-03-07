const deviceDefinition = (sequelize, DataTypes) => {
  const Device = sequelize.define('device', {
    model: { type: DataTypes.STRING },
    device_id: { type: DataTypes.STRING },
    placeId: { type: DataTypes.INTEGER },
    description: { type: DataTypes.STRING},
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});
  return Device;
};

export default deviceDefinition;
