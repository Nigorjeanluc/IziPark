export default {
  up: (queryInterface, Sequelize) =>  queryInterface.createTable('places', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    placeName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING, unique: true },
    image: { type: Sequelize.STRING },
    manager: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    phoneNumber: { type: Sequelize.STRING },
    isVerified: { type: Sequelize.BOOLEAN },
    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE }
  }),

  down: (queryInterface) => queryInterface.dropTable('places')
};
