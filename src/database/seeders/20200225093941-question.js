module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'Questions',
      [
        {
          id: '712cda17-00e6-4d2d-b531-a463c01a1c0b',
          userId: 4,
          title: 'sequeslizeError',
          question: 'how to create a model in sequelize',
          image: 'https://cloudnary.com/imagetesting.jpeg/wq12c675',
          tags: 'sequlize, nodejs, postgres',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '87618e38-b6be-46c4-9317-782eaa05a16a',
          userId: 5,
          title: 'sequeslizeError',
          question: 'how to create a model in sequelize',
          image: 'https://cloudnary.com/imagetesting.jpeg/wq12c675',
          tags: 'sequlize, nodejs, postgres',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Questions', null, {});
  },
};
