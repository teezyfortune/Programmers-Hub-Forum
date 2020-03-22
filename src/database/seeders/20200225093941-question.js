module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'Questions',
      [
        {
          id: '4959fa68-5955-11ea-8e2d-0242ac130003',
          userId: 1,
          title: 'sequeslizeError',
          question: 'how to create a model in sequelize',
          image: 'https://cloudnary.com/imagetesting.jpeg/wq12c675',
          tags: 'sequlize, nodejs, postgres',
          vote: 0,
          createdAt: '2020-02-26 22:58:21.102+00',
          updatedAt: '2020-02-26 22:58:21.102+00',
        },
        {
          id: '4959fcde-5955-11ea-8e2d-0242ac130003',
          userId: 2,
          title: 'sequeslizor',
          question: 'how to create a model in sequelize',
          image: 'https://cloudnary.com/imagetesting.jpeg/wq12c675',
          tags: 'sequlize, nodejs, postgres',
          vote: 20,
          createdAt: '2020-02-25 22:58:21.102+00',
          updatedAt: '2020-02-25 22:58:21.102+00',
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Questions', null, {});
  },
};
