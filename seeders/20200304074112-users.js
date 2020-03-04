"use strict";

const users = require("./data/users");

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert("Users", users);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
