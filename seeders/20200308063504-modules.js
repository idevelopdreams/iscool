"use strict";

const modules = require("./data/modules");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Modules", modules);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Modules", null, {});
  }
};
