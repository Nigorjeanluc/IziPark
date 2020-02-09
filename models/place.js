const placeDefinition = (sequelize, DataTypes) => {
  const Place = sequelize.define('place', {
    placeName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING},
    manager: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    phoneNumber: { type: DataTypes.STRING },
    isVerified: { type: DataTypes.BOOLEAN },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});
  return Place;
};

export default placeDefinition;
