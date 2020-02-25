import express from 'express';
import { saveQuestion, editQuestion, destroytQuestion } from './question.controller';
import { validateInput } from '../middleware/validation';
import { questionSchema, editQuestionSchema } from '../middleware/schema';
import imageUpload from '../middleware/image_upload/upload';

const questionRoutes = express.Router();

/**
 * @swagger
 *
 * /createQuestion:
 *  post:
 *    tags:
 *      - question
 *    description: User should be able to ask a question in the forum
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: userId 
 *        description: The id of the user who asked the question (please use the userId to get their username from your database  when consuming the endpoint)
 *        in: request session
 *        required: true
 *        type: integer
 *      - name: title
 *        description: The title of the question
 *        in: formData
 *        required: true
 *        type: string
 *      - name: question
 *        description: The content or body of the question
 *        in: formData
 *        required: true
 *        type: string
 *      - name: image
 *        description: Image related to the post if any
 *        in: formData
 *        required: required
 *        type: string
 *      - name: tags
 *        description: The programming language or any aspect of technology
 *        in: formData
 *        required: true
 *        type: string

 *    responses:
 *      201:
 *        description: Successfully created a question
 *      500:
 *        description: Server error message
 */
questionRoutes.post('/createQuestion', validateInput(questionSchema), imageUpload, saveQuestion);

/**
 * @swagger
 *
 * /updateQuestion/:id:
 *  patch:
 *    tags:
 *      - question
 *    description: User should be able to ask a question in the forum
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: question id 
 *        description: Question id
 *        in: request session
 *        required: false
 *        type: integer
 *      - name: title
 *        description: The title of the question
 *        in: formData
 *        required: true
 *        type: string
 *      - name: question
 *        description: The content or body of the question
 *        in: formData
 *        required: false
 *        type: string
 *      - name: image
 *        description: Image related to the post if any
 *        in: formData
 *        required: false
 *        type: string
 *      - name: tags
 *        description: The programming language or any aspect of technology
 *        in: formData
 *        required: false
 *        type: string

 *    responses:
 *      201:
 *        description: Successfully created a question
 *      500:
 *        description: Server error message
 */
questionRoutes.patch(
  '/updateQuestion/:id',
  validateInput(editQuestionSchema),
  imageUpload,
  editQuestion
);

/**
 * @swagger
 *
 * /deleteQuestion/:id:
 *  delete:
 *    tags:
 *      - question
 *    description: User should be able to ask a question in the forum
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: id
 *        description: Questionid
 *        required: false
 *        type: integer
 *    responses:
 *      200:
 *        description: Successfully created a question
 *      404:
 *        description: Question not found
 *      500:
 *        description: Server error message
 */
questionRoutes.delete('/deleteQuestion/:id', destroytQuestion);

/**
 * @swagger
 *
 * /updateQuestion/:id:
 *  get:
 *    tags:
 *      - question
 *    description: User should be able to ask a question in the forum
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: id
 *        description: Questionid
 *        required: false
 *        type: integer
 *    responses:
 *      201:
 *        description: Successfully created a question
 *      500:
 *        description: Server error message
 */
// questionRoutes.get('/fetcOneQuestion/:id');
export default questionRoutes;
