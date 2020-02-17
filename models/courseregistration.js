"use strict";
module.exports = (sequelize, DataTypes) => {
  const CourseRegistration = sequelize.define("CourseRegistration", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    status: DataTypes.BOOLEAN
  });
  CourseRegistration.associate = function(models) {
    // associations here
    CourseRegistration.belongsTo(models.User, { foreignKey: "UserId" });
    CourseRegistration.belongsTo(models.Course, { foreignKey: "CourseId" });
  };
  return CourseRegistration;
};
