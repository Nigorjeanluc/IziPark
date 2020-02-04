const adminDefinition = (sequelize, DataTypes) => {
  const Admin = sequelize.define('admin', {
    fullName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING},
    username: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    phoneNumber: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});
  return Admin;
};

export default adminDefinition;
