module.exports = function(sequelize, DataTypes) {
  var Questions = sequelize.define("questions", {
    text: { type: DataTypes.STRING, allowNull: false, unique: true }
  });

  Questions.associate = function(models) {
    Questions.hasMany(models.responses,  {
      foreignKey: {
        name: 'question_id',
        allowNull: false
      }
    });
  };

  return Questions;
};