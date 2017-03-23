'use strict';
module.exports = function(sequelize, DataTypes) {
  var manager_user = sequelize.define('manager_user', {
    user_id: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return manager_user;
};