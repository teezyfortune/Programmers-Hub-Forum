// import faker from 'faker';

export const newQuestion = {
  id: 2,
  title: 'security',
  question: 'How can security measure be taken to avoid intruders into the system',
  image: 'https://cloudinary/test.jpeg/2weq34dfy5h7',
  tags: 'nodesjs, flutter, mysql',
};

export const emptyQuestion = {
  userId: 3,
  title: 'security',
  question: '',
  images: 'https://cloudinarry.jpeg',
  tags: 'nodejs, php',
};

export const invalidUpdateQuestion = {
  userId: 3,
  question: 'How can security measure be taken to avoid intruders into the system',
  tags: 'php, flutter, mysql',
};

export const updateQuestion = {
  userId: 1,
  question: 'How can security measure be taken to avoid intruders into the system',
  tags: 'php, flutter, mysql',
};

export const del = {
  userId: 1,
};

export const ivaliddel = {
  userId: 4,
};

export const baseUrl = '/api/v1/createQuestion';

export const baseInvalidUpdate = '/api/v1/updateQuestion/87618e38-b6be-46c4-9317-782eaa05a16a';

export const baseUpdate = '/api/v1/updateQuestion/4959fa68-5955-11ea-8e2d-0242ac130003';

export const baseInValidDelete = '/api/v1/deleteQuestion/4959fa68-5955-11ea-8e2d-0242ac130003';


export const baseValidDelete = '/api/v1/deleteQuestion/4959fa68-5955-11ea-8e2d-0242ac130003';

export const baseGetSpecfic = '/api/v1/4959fa68-5955-11ea-8e2d-0242ac130003/fetch-question';
