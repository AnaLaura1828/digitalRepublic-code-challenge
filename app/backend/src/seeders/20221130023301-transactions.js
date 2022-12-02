module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Transactions',
    [
      {
        send: 1,
        destiny: 2,
        value: 200.00,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Transactions', null, {}),
};