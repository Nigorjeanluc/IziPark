export default {
  up: (queryInterface, Sequelize) =>  queryInterface.createTable('devices', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    model: { type: Sequelize.STRING },
    gate: { type: Sequelize.STRING },
    device_id: { type: Sequelize.STRING, unique: true },
    placeId: { type: Sequelize.INTEGER },
    description: { type: Sequelize.STRING },
    createdAt: { type: Sequelize.DATE },
    updatedAt: { type: Sequelize.DATE }
  }),

  down: (queryInterface) => queryInterface.dropTable('devices')
};
