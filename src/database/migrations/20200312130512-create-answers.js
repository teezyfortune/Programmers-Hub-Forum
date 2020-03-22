module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        DefaultValue: Sequelize.UUIDV4,
      },
      image_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      answer: {
        type: Sequelize.TEXT,
      },
      questionId: {
        type: Sequelize.UUID,
        allowNull: false,
        // references: {
        //   model: 'Questions',
        //   key: 'id',
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE',
      },
      userId: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('Answers');
  },
};
