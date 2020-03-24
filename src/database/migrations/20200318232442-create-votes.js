module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Votes', {
      //     id: {
      //       allowNull: false,
      //       primaryKey: true,
      //       type: Sequelize.UUID,
      //       defaultValue: Sequelize.UUIDV4,
      //     },
      //     questionId: {
      //       type: Sequelize.UUID,
      //       allowNull: false,
      //       references: {
      //         model: 'Questions',
      //         key: 'id',
      //       },
      //     },
      //     vote_count: {
      //       type: Sequelize.INTEGER,
      //       defaultValue: 0,
      //     },
      //     createdAt: {
      //       allowNull: false,
      //       type: Sequelize.DATE,
      //     },
      //     updatedAt: {
      //       allowNull: false,
      //       type: Sequelize.DATE,
      //     },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Votes');
  },
};
