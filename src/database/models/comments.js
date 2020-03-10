module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define(
    'comments',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: DataTypes.INTEGER,
      questionId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Questions',
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
  return comments;
};
