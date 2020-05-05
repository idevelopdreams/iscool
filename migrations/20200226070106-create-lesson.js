"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Lessons", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      UserId: {
        type: Sequelize.UUID,
        references: {
          model: "Users",
          key: "id",
        },
      },
      ModuleId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Modules",
          key: "id",
        },
      },
      name: {
        type: Sequelize.STRING,
      },
      concepts: {
        type: Sequelize.TEXT,
      },
      video: {
        type: Sequelize.STRING,
      },
      cover: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      file: { type: Sequelize.STRING },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Lessons");
  },
};
