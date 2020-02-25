module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define(
    'Questions',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      question: DataTypes.STRING,
      image: DataTypes.STRING,
      tags: DataTypes.STRING,
    },
    {}
  );
  // Questions.associate = function(models) {
  //   // associations can be defined here
  // };
  return Questions;
};
