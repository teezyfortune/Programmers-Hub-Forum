module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'comments',
      [
        {
          id: '6036d53c-6079-11ea-bc55-0242ac130003',
          questionId: '4959fa68-5955-11ea-8e2d-0242ac130003',
          userId: 4,
          comment: 'please help me out on this sequelize error',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'ef23a99a-622d-11ea-bc55-0242ac130003',
          questionId: '4959fa68-5955-11ea-8e2d-0242ac130003',
          userId: 5,
          comment: 'please help me out on this sequelize error',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('comments', null, {});
  },
};
