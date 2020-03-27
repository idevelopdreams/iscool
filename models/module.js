"use strict";
module.exports = (sequelize, DataTypes) => {
  const Module = sequelize.define("Module", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    CourseId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "Courses",
        key: "id"
      }
    },
    title: DataTypes.STRING,
    overview: DataTypes.TEXT
  });
  Module.associate = function(models) {
    // associations can be defined here
    Module.belongsTo(models.User, {
      foreignKey: "UserId",
      as: "creator",
      onDelete: "CASCADE"
    });

    Module.hasMany(models.Lesson, {
      as: "Lessons",
      onDelete: "CASCADE"
    });
  };
  return Module;
};
