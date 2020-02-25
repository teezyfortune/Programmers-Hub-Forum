import express from 'express';
import { saveComment, editComment, destroyComment } from './comments.controller';
import { validateInput } from '../middleware/validation';
import { commentSchema, editCommentSchema } from '../middleware/schema';

const commentRoutes = express.Router();

/**
 * @swagger
 *
 * /createComment/:questionId:
 *  post:
 *    tags:
 *      - Create Comments
 *    description: User should be able to comment on a question in the forum
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: userId
 *        description: The id of the user who made a comment (please use the userId to get their username from your database  when consuming the endpoint)
 *        in: request session
 *        required: true
 *        type: integer
 *      - name: questionId
 *        description: The id of of the question to be commented on
 *        in: request parameter
 *        required: true
 *        type: string
 *      - name: comment
 *        description: The content or body of the comment
 *        in: formData
 *        required: true
 *        type: string
 *    responses:
 *      201:
 *        description: Successfully created a question
 *      500:
 *        description: Server error message
 */
commentRoutes.post('/:questionId/createComment', validateInput(commentSchema), saveComment);

/**
 * @swagger
 *
 * /:questionId/updateComment:
 *  patch:
 *    tags:
 *      - Update Comment
 *    description: User should be able to update their comment
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: userId
 *        description: The id of the user who made comment (please use the userId to get their username from your database  when consuming the endpoint)
 *        in: request session
 *        required: false
 *        type: integer
 *      - name: comment
 *        description: The content or body of the comment
 *        in: formData
 *        required: false
 *        type: string
 *    responses:
 *      201:
 *        description: Successfully created a comment
 *      500:
 *        description: Server error message
 */
commentRoutes.patch('/:commentId/updateComment', validateInput(editCommentSchema), editComment);

/**
 * @swagger
 *
 * /:questionId/deleteComment:
 *  delete:
 *    tags:
 *      - Delete Comment
 *    description: User should be able to delete comment of their own
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: questionId
 *        description: Question id
 *        required: false
 *        type: integer
 *    responses:
 *      200:
 *        description: Successfully deleted
 *      404:
 *        description: Question not found
 *      500:
 *        description: Server error message
 */
commentRoutes.delete('/:commentId/deleteComment', destroyComment);

/**
 * @swagger
 *
 * /:questionId/updateQuestion:
 *  get:
 *    tags:
 *      - question
 *    description: User should be able to update a comment
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
// commentRoutes.get('/fetcOneQuestion/:id');
export default commentRoutes;
