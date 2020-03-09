// import faker from 'faker';

export const newComment = {
  userId: 2,
  comment: 'You can create an helper functuon to help you solve that',
  // questionId: '4959fa68-5955-11ea-8e2d-0242ac130003',
};

export const emptyComment = {
  userId: 3,
  // questionId: '6036d53c-6079-11ea-bc55-0242ac130003',
  comment: '',
};

export const invalidUpdateComment = {
  userId: 3,
  // commentId: '6036d53c-6079-11ea-bc55-0242ac130003',
  comment: 'jdjdjdjd',
};

export const updateComment = {
  userId: 4,
  // commentId: '6036d53c-6079-11ea-bc55-0242ac130003',
  comment: 'fnffjfjfnjfnffjfnjfjfnf',
};

export const moderatorUpdateComment = {
  userId: 3,
  type: 'moderator',
  comment: 'when you are mine',
};

export const del = {
  userId: 4,
};

export const moderatorDel = {
  userId: 3,
  type: 'moderator',
};

export const ivaliddel = {
  userId: 3,
};

export const baseUrl = '/api/v1/4959fa68-5955-11ea-8e2d-0242ac130003/createComment/';

export const baseInvalidUpdate = '/api/v1/4959fa68-5955-11ea-8e2d-0242ac130003/updateComment';

export const baseUpdate = '/api/v1/6036d53c-6079-11ea-bc55-0242ac130003/updateComment/';

export const baseInValidDelete = '/api/v1/4959fa68-5955-11ea-8e2d-0242ac130003/deleteComment/';

export const baseValidDelete = '/api/v1/6036d53c-6079-11ea-bc55-0242ac130003/deleteComment/';

export const moderatorDeleteComment = '/api/v1/ef23a99a-622d-11ea-bc55-0242ac130003/deleteComment/';
