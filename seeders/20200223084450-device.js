export default {
  up: (queryInterface) => queryInterface.bulkInsert('devices', [{
    model: 'Arduino Uno',
    placeId: 1,
    device_id: 'qwertyuiop',
    gate: 'Gate 5',
    description: 'A device in the building 3 at the basement',
    createdAt: new Date(),
    updatedAt: new Date()
  }]),

  down: (queryInterface) => queryInterface.bulkDelete('devices', null, {})
};
