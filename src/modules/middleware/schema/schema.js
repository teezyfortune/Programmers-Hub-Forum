import Joi from '@hapi/joi';

export const questionSchema = Joi.object({
  userId: Joi.number(),
  title: Joi.string().required(),
  question: Joi.string().required(),
  image: Joi.string().uri(),
  tags: Joi.string().required(),
});

export const editQuestionSchema = Joi.object({
  title: Joi.string(),
  question: Joi.string(),
  image: Joi.string().uri(),
  tags: Joi.string(),
  id: Joi.string()
    .uuid()
    .required(),
  userId: Joi.number().required(),
  type: Joi.string(),
});

// comment schema start
export const commentSchema = Joi.object({
  userId: Joi.number().required(),
  comment: Joi.string().required(),
  answerId: Joi.string()
    .uuid()
    .required(),
});

export const editCommentSchema = Joi.object({
  comment: Joi.string(),
  commentId: Joi.string()
    .uuid()
    .required(),
  userId: Joi.number().required(),
  type: Joi.string(),
});
