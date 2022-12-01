'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
    {
      name: 'Ana Beatriz Santos',
      cpf: '784.201.654-87',
      balance: 500000
    },
    {
      name: 'Laura Rodrigues',
      cpf: '888.222.456-00',
      balance: 500000
    },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
