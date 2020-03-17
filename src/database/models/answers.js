module.exports = (sequelize, DataTypes) => {
  const Answers = sequelize.define(
    'Answers',
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      questionId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Questions',
          key: 'id',
        },
      },
      image_url: DataTypes.STRING,
      answer: DataTypes.TEXT,
    },
    {
      tableName: 'Answers',
    }
  );
  Answers.associate = (models) => {
    const { comments, Questions } = models;
    comments.hasMany(comments);
    comments.belongsTo(Questions);
  };
  return Answers;
};
