const agentDefinition = (sequelize, DataTypes) => {
  const Agent = sequelize.define('historie', {
    deviceId: { type: DataTypes.INTEGER },
    placeId: { type: DataTypes.INTEGER },
    plateNumber: { type: DataTypes.STRING },
    employeeId: { type: DataTypes.INTEGER },
    cardId : { type: DataTypes.STRING },
    enteredAt: { type: DataTypes.DATE},
    exitedAt: { type: DataTypes.DATE },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});
  return Agent;
};

export default agentDefinition;
