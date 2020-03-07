export default {
  up: (queryInterface) => queryInterface.bulkInsert('histories', [{
    deviceId: 'qwertyuiop',
    placeId: 1,
    plateNumber: 'RAC784N',
    employeeId: 1,
    cardId: 'qwertyuiop1234567890',
    enteredAt: new Date(),
    exitedAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    deviceId: 'qwertyuiop',
    placeId: 1,
    plateNumber: 'RAC794N',
    employeeId: 1,
    cardId: '1234567890lkjhgfdsa',
    enteredAt: new Date(),
    exitedAt: null,
    createdAt: new Date(),
    updatedAt: new Date()
  }]),

  down: (queryInterface) => queryInterface.bulkDelete('histories', null, {})
};
