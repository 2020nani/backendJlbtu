'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'imagem_id',
      {
        type:Sequelize.INTEGER,
        references: {model: 'files',Key:'id'},
      }
    );
  },

  down: (queryInterface) => {
   return queryInterface.removeColumn('users','imagem_id');
  }
};
