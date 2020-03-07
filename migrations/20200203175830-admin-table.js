export default {
  up: (queryInterface, Sequelize) =>  queryInterface.createTable('admins', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    fullName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING, unique: true },
    image: { type: Sequelize.STRING},
    username: { type: Sequelize.STRING, unique: true },
    password: { type: Sequelize.STRING },
    phoneNumber: { type: Sequelize.STRING },
    role: { type: Sequelize.STRING },
    createdAt: { type: Sequelize.DATE },
    updatedAt: { type: Sequelize.DATE }
  }),

  down: (queryInterface) => queryInterface.dropTable('admins')
};
