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
      answerId: DataTypes.INTEGER,

      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { tableName: 'comments' }
  );
  comments.associate = (models) => {
    const { Answers } = models;
    comments.belongsTo(Answers);
  };
  return comments;
};
