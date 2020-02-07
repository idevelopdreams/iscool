"use strict";
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "Course",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.STRING,
      rating: DataTypes.STRING,
      video: DataTypes.STRING,
      image: DataTypes.STRING,
      UserId: DataTypes.UUID,
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      }
    },
    {}
  );
  Course.associate = function(models) {
    // associations can be defined here
    Course.belongsTo(models.User, {
      foreignKey: "UserId",
      as: "creator",
      onDelete: "CASCADE"
    });
  };
  return Course;
};
