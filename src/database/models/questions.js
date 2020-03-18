module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define(
    'Questions',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      question: DataTypes.STRING,
      image: DataTypes.STRING,
      tags: DataTypes.STRING,
    },
    {}
  );
  Questions.associate = (models) => {
    const { Answers } = models;
    Questions.hasMany(Answers, { foreignKey: 'id' });
  };
  return Questions;
};
