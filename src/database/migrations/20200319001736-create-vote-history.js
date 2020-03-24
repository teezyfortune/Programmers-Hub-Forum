module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vote_histories', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        DefaultValue: Sequelize.UUIDV4,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      questionId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Questions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      vote_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('vote_histories');
  },
};
