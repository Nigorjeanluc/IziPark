import Hasher from '../server/helpers/passwordHasher';

export default {
  up: (queryInterface) => queryInterface.bulkInsert('places', [{
    placeName: 'MIC House',
    manager: 'Jean Makara',
    email: 'dummy@email.rw',
    image: 'No Image',
    password: Hasher.hashPassword('123456789'),
    phoneNumber: '0784791763',
    createdAt: new Date(),
    updatedAt: new Date()
  }]),

  down: (queryInterface) => queryInterface.bulkDelete('places', null, {})
};
