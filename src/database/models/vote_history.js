module.exports = (sequelize, DataTypes) => {
  const voteHistory = sequelize.define(
    'voteHistory',
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
      vote_type: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      tableName: 'vote_histories',
    }
  );
  voteHistory.associate = (models) => {
    const { Questions } = models;
    voteHistory.belongsTo(Questions, { foreignKey: 'questionId' });
  };
  return voteHistory;
};
