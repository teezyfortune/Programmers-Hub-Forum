module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'Answers',
      [
        {
          id: 'e60f3d36-64eb-11ea-bc55-0242ac130003',
          userId: 9,
          image_url: 'https://google.image.jpeg',
          questionId: '4959fa68-5955-11ea-8e2d-0242ac130003',
          answer: 'It is well oooo',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'e60f3f7a-64eb-11ea-bc55-0242ac130003',
          userId: 8,
          image_url: 'https://google.image.jpeg',
          questionId: '4959fa68-5955-11ea-8e2d-0242ac130003',
          answer: 'I am comming through',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Answers', null, {});
  },
};
