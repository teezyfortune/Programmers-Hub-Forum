module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define(
    'comments',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      userId: DataTypes.INTEGER,
      answerId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Answers',
          key: 'id',
        },
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { tableName: 'comments' }
  );
  comments.associate = (models) => {
    const { Answers } = models;
    comments.belongsTo(Answers, { foreignKey: 'answerId' });
  };
  return comments;
};
