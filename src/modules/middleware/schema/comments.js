import Joi from '@hapi/joi';

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
