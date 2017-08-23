module.exports = function(sequelize, DataTypes) {
  var Responses = sequelize.define("responses", {
    text: { type: DataTypes.STRING, allowNull: false }
  });

 /* Responses.associate = function(models) {
    Responses.belongsTo(models.questions,  {
      foreignKey: {
        name: 'question_id',
        allowNull: false
      }
    });
  };*/

  return Responses;
};