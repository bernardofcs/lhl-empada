'use strict';
module.exports = function(sequelize, DataTypes) {
  var assigned_user = sequelize.define('assigned_user', {
    user_id: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return assigned_user;
};