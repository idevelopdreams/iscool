"use strict";
const courses = require("./data/courses");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Courses", courses);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Courses", null, {});
  }
};
