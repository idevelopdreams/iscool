"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Modules", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      UserId: {
        type: Sequelize.UUID,
        references: {
          model: "Users",
          key: "id"
        }
      },
      CourseId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "Courses",
          key: "id"
        }
      },
      title: {
        type: Sequelize.STRING
      },
      overview: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Modules");
  }
};
