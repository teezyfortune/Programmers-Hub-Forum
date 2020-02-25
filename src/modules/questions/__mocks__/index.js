// import faker from 'faker';

export const newQuestion = {
  id: 2,
  title: 'security',
  question: 'How can security measure be taken to avoid intruders into the system',
  image: 'https://cloudinary/test.jpeg/2weq34dfy5h7',
  tags: 'nodesjs, flutter, mysql',
};

export const emptyQuestion = {
  id: 3,
  title: 'security',
  question: '',
  images: 'https://cloudinarry.jpeg',
  tags: 'nodejs, php',
};

export const updateQyuestion = {
  question: 'How can security measure be taken to avoid intruders into the system',
  tags: 'php, flutter, mysql',
};

export const baseUrl = '/api/v1/createQuestion';
export const baseUpdate = '/api/v1/updateQuestion/87618e38-b6be-46c4-9317-782eaa05a16a';
export const baseDelete = '/api/v1/deleteQuestion/87618e38-b6be-46c4-9317-782eaa05a16a';
