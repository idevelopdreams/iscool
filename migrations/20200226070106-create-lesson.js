"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Lessons", {
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
      ModuleId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Modules",
          key: "id"
        }
      },
      name: {
        type: Sequelize.STRING
      },
      concepts: {
        type: Sequelize.STRING
      },
      video: {
        type: Sequelize.STRING
      },
      cover: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable("Lessons");
  }
};
