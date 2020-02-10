'use strict';
module.exports = (sequelize, DataTypes) => {
  const Module = sequelize.define('Module', {
    title: DataTypes.STRING,
    overview: DataTypes.TEXT
  }, {});
  Module.associate = function(models) {
    // associations can be defined here
  };
  return Module;
};