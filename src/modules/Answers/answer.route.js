import express from 'express';
import {
  saveAnswer,
  editAnswer,
  destroyAnswer,
fetASpecifAnswerAndComments} from './answer.controller';
import { answerSchema, editAnswwerSchema, deleteAnswwerSchema } from '../middleware/schema/answer';
import { validateInput } from '../middleware/validation';

const answerRoute = express.Router();

/**
 * @swagger
 *
 * /:questionId/answer/:
 * post:
 *  tags:
 *    - Answer
 *  description: User can answer to another user question
 *  produces:
 *    - application/json
 *  parameters:
 *    - name: image_url
 *      description: any image that can describe the answer
 *      required: false
 *      type: string
 *      in: formData
 *    - name: answer
 *      description: response to a question
 *      required: true
 *      type: text
 *      in: formData
 *    - name: userId
 *      description: UserId
 *      required: true
 *      type: integer
 *      in: requestBody
 *    - name: questionId
 *      description: question id
 *      required: true
 *      type: uuid
 *      in: requestBody
 *  responses:
 *      201:
 *        description: successfully created
 *      500:
 *        description: Internal server error
 */
answerRoute.post('/:questionId/answer', validateInput(answerSchema), saveAnswer);

/**
 * @swagger
 *
 * /:questionId/editAnswer/:
 * patch:
 *  tags:
 *    - Answer
 *  description: User can answer to another user question
 *  produces:
 *    - application/json
 *  parameters:
 *    - name: image_url
 *      description: any image that can describe the answer
 *      required: false
 *      type: string
 *      in: formData
 *    - name: answer
 *      description: response to a question
 *      required: true
 *      type: text
 *      in: formData
 *    - name: userId
 *      description: UserId
 *      required: true
 *      type: integer
 *      in: requestBody
 *    - name: questionId
 *      description: question id
 *      required: true
 *      type: uuid
 *      in: requestBody
 *    - name: userId
 *      description: UserId
 *      required: true
 *      type: integer
 *      in: requestBody
 *    - name: type
 *      description: User type
 *      required: true
 *      type: string
 *      in: requestBody
 *  responses:
 *      201:
 *        description: successfully created
 *      500:
 *        description: Internal server error
 */
answerRoute.patch('/:answerId/editAnswer', validateInput(editAnswwerSchema), editAnswer);

/**
 * @swagger
 *
 * /:answerId/editAnswer/:
 * patch:
 *  tags:
 *    - Answer
 *  description: User can answer to another user question
 *  produces:
 *    - application/json
 *  parameters:
 *    - name: userId
 *      description: UserId
 *      required: true
 *      type: integer
 *      in: requestBody
 *    - name: type
 *      description: User type
 *      required: true
 *      type: string
 *      in: requestBody
 *  responses:
 *      201:
 *        description: successfully created
 *      500:
 *        description: Internal server error
 */
answerRoute.delete('/:answerId/deleteAnswer', validateInput(deleteAnswwerSchema), destroyAnswer);

/**
 * @swagger
 *
 * /:answerId/fetch-answer:
 *  get:
 *    tags:
 *      - Specific Question
 *    description: User should be able to get a question and all comments attached to it
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: answerId
 *        description: answerId
 *        required: true
 *        type: uuid
 *    responses:
 *      200:
 *        description: Successfully created a question
 *      500:
 *        description: Server error message
 */
answerRoute.get('/:answerId/fetch-answer', fetASpecifAnswerAndComments);
export default answerRoute;
