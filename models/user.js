"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 50],
          msg:
            "Your to-do item name must be between 3 and 50 characters.  Please try again."
        }
      }
    },
    DOB: {
      type: DataTypes.STRING
    },
    organization: {
      type: DataTypes.STRING
    },
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
