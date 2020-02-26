"use strict";
module.exports = (sequelize, DataTypes) => {
  const Module = sequelize.define("Module", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    title: DataTypes.STRING,
    overview: DataTypes.TEXT,
    CourseId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "Courses",
        key: "id"
      }
    }
  });
  Module.associate = function(models) {
    // associations can be defined here
    Module.belongsTo(models.User, {
      foreignKey: "UserId",
      as: "creator",
      onDelete: "CASCADE"
    });
  };
  return Module;
};
