"use strict";
const bcrypt = require("bcryptjs");

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
    User.hasMany(models.Course, {
      as: "courses",
      onDelete: "CASCADE"
    });
    // associations can be defined here
    User.hasMany(models.Module, {
      as: "Modules",
      onDelete: "CASCADE"
    });

    User.belongsToMany(models.Course, {
      as: "classes",
      through: "CourseRegistration",
      onDelete: "CASCADE"
    });
  };

  // Creating a custom method for our User model.

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  //This will check if an unhashed password entered by the
  //user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  return User;
};
