// import faker from 'faker';

export const newAnswer = {
  image_url: 'https://web.image_urls/test.png',
  userId: 2,
  answer: 'You can create an helper functuon to help you solve that',
};

export const emptyAnswer = {
  image_url: 'https://web.image_urls/test.png',
  userId: 2,
  answer: '',
};

export const invalidUpdateAnswer = {
  image_url: 'https://web.image_urls/test.png',
  userId: 2,
  answer: 'You can create an helper functuon to help you solve that',
};

export const updateAnswer = {
  image_url: 'https://web.image_urls/test.png',
  userId: 8,
  answer: 'You can create an helper functuon to help you solve that',
};

export const moderatorUpdateAnswer = {
  userId: 9,
  type: 'moderator',
  image_url: 'https://web.image_urls/test.png',
  answer: 'You can create an helper functuon to help you solve that',
};

export const del = {
  userId: 9,
};

export const moderatorDel = {
  userId: 8,
  type: 'moderator',
};

export const ivaliddel = {
  userId: 3,
};

export const baseUrl = '/api/v1/4959fa68-5955-11ea-8e2d-0242ac130003/answer/';

export const baseInvalidUpdate = '/api/v1/4959fa68-5955-11ea-8e2d-0242ac130003/editAnswer';

export const baseUpdate = '/api/v1/e60f3f7a-64eb-11ea-bc55-0242ac130003/editAnswer/';

export const baseInValidDelete = '/api/v1/6036d53c-6079-11ea-bc55-0242ac130003/deleteAnswer/';

export const baseValidDelete = '/api/v1/e60f3d36-64eb-11ea-bc55-0242ac130003/deleteAnswer/';

export const moderatorDeleteAnswrr = '/api/v1/e60f3d36-64eb-11ea-bc55-0242ac130003/deleteAnswer/';
