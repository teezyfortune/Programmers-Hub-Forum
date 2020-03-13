import Joi from '@hapi/joi';

export const answerSchema = Joi.object({
  image_url: Joi.string().uri(),
  answer: Joi.string().required(),
  userId: Joi.number(),
  questionId: Joi.string().uuid(),
});

export const editAnswwerSchema = Joi.object({
  image_url: Joi.string().uri(),
  answer: Joi.string(),
  answerId: Joi.string()
    .uuid()
    .required(),
  userId: Joi.number().required(),
  type: Joi.string(),
});

export const deleteAnswwerSchema = Joi.object({
  answerId: Joi.string()
    .uuid()
    .required(),
  userId: Joi.number().required(),
  type: Joi.string(),
});
