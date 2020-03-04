"use strict";
module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define("Lesson", {
    name: DataTypes.STRING,
    concepts: DataTypes.STRING,
    video: DataTypes.STRING,
    cover: DataTypes.STRING
  });
  Lesson.associate = function(models) {
    // associations can be defined here
    Lesson.belongsTo(models.User, {
      foreignKey: "UserId",
      as: "creator",
      onDelete: "CASCADE"
    });
    Lesson.belongsTo(models.Module, {
      foreignKey: "ModuleID",
      as: "module",
      onDelete: "CASCADE"
    });
  };
  return Lesson;
};
