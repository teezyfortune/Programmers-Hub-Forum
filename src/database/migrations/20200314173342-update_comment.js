module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('comments', 'answerId', {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Answers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    ]);
  },
  down: (queryInterface) => {
    return Promise.all([queryInterface.removeColumn('comments', 'answerId')]);
  },
};
