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
      question: DataTypes.TEXT,
      image: DataTypes.STRING,
      tags: DataTypes.STRING,
      votes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
    },
    {}
  );
  Questions.associate = (models) => {
    const { Answers, Votes, voteHistory } = models;
    Questions.hasMany(Answers, { foreignKey: 'id' });
    Questions.hasMany(Votes, { foreignKey: 'id' });
    Questions.hasMany(voteHistory, { foreignKey: 'id' });
  };
  return Questions;
};
