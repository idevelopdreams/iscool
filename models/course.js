"use strict";
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("Course", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    rating: DataTypes.STRING,
    video: DataTypes.STRING,
    image: DataTypes.STRING,
  });
  Course.associate = function (models) {
    // associations can be defined here
    Course.belongsTo(models.User, {
      foreignKey: "UserId",
      as: "creator",
      onDelete: "CASCADE",
    });
    Course.belongsToMany(models.User, {
      as: "students",
      through: "CourseRegistration",
      onDelete: "CASCADE",
    });
    Course.hasMany(models.Module, {
      as: "Modules",
    });
  };
  return Course;
};
