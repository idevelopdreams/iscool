"use strict";
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "Course",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      rating: DataTypes.STRING,
      video: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {}
  );
  Course.associate = function(models) {
    // associations can be defined here
  };
  return Course;
};
