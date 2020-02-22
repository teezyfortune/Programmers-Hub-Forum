import Joi from '@hapi/joi';

export const questionSchema = Joi.object({
  id: Joi.number(),
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
});
