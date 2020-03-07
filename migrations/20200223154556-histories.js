export default {
  up: (queryInterface, Sequelize) =>  queryInterface.createTable('histories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    deviceId: { type: Sequelize.STRING },
    placeId: { type: Sequelize.INTEGER },
    plateNumber: { type: Sequelize.STRING },
    employeeId: { type: Sequelize.INTEGER },
    cardId : { type: Sequelize.STRING },
    enteredAt: { type: Sequelize.DATE },
    exitedAt: { type: Sequelize.DATE },
    createdAt: { type: Sequelize.DATE },
    updatedAt: { type: Sequelize.DATE }
  }),

  down: (queryInterface) => queryInterface.dropTable('histories')
};
