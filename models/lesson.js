"use strict";
module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define("Lesson", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    concepts: DataTypes.TEXT,
    video: DataTypes.STRING,
    cover: DataTypes.STRING,
    file: DataTypes.STRING,
  });
  Lesson.associate = function (models) {
    // associations can be defined here
    Lesson.belongsTo(models.User, {
      foreignKey: "UserId",
      as: "creator",
      onDelete: "CASCADE",
    });
    Lesson.belongsTo(models.Module, {
      foreignKey: "ModuleId",
      as: "module",
      onDelete: "CASCADE",
    });
  };
  return Lesson;
};
