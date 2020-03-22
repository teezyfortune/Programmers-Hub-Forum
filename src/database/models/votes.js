module.exports = (sequelize, DataTypes) => {
  const Votes = sequelize.define(
    'Votes',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      questionId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Questions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      vote_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {}
  );
  Votes.associate = (models) => {
    const { Questions } = models;
    Votes.belongsTo(Questions, { foreignKey: 'questionId' });
  };
  return Votes;
};
