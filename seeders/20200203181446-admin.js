import Hasher from '../server/helpers/passwordHasher';

export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('admins', [{
    fullName: 'Irasubiza Sadrah',
    email: 'dummy@email.rw',
    image: 'No Image',
    username: 'TheBoss',
    password: Hasher.hashPassword('123456789'),
    phoneNumber: '0784791763',
    role: 'CEO',
    createdAt: new Date(),
    updatedAt: new Date()
  }]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('admins', null, {})
};
