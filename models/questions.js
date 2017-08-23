module.exports = function(sequelize, DataTypes) {
  var Ngrams = sequelize.define("ngrams", {
    word: { type: DataTypes.STRING(90), notEmpty: true, allowNull: false},
    weight: { type: DataTypes.INTEGER, notEmpty: true, allowNull: false},
    trigger: { type: DataTypes.STRING(90), notEmpty: true, allowNull: false}
  });

  return Ngrams;
};