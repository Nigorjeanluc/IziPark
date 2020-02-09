const agentDefinition = (sequelize, DataTypes) => {
  const Agent = sequelize.define('employee', {
    fullName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING},
    password: { type: DataTypes.STRING },
    phoneNumber: { type: DataTypes.STRING },
    serviceHours: { type: DataTypes.STRING },
    placeId: { type: DataTypes.INTEGER },
    isVerified: { type: DataTypes.BOOLEAN },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});
  return Agent;
};

export default agentDefinition;
