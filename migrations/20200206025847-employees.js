export default {
  up: (queryInterface, Sequelize) =>  queryInterface.createTable('employees', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    fullName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING, unique: true },
    image: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    phoneNumber: { type: Sequelize.STRING },
    serviceHours: { type: Sequelize.STRING },
    placeId: { type: Sequelize.INTEGER },
    isVerified: { type: Sequelize.BOOLEAN },
    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE }
  }),

  down: (queryInterface) => queryInterface.dropTable('employees')
};
