'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posicaos',   { 
      id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    end: {
      type: Sequelize.STRING,
      allowNull: false,
    }, 
    latitude: {
      type:Sequelize.DECIMAL,
      allowNull: false,
    }, 
    longitude:{
      type: Sequelize.DECIMAL,
      allowNull: false,

    },
   
    created_at:{
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

    });
    
  },
  down: queryInterface => {
    return queryInterface.dropTable('posicaos');
  
  }
};