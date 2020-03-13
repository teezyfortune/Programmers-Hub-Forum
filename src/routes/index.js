import express from 'express';
import questionRoute from '../modules/questions/question.route';
import commentRoute from '../modules/comments/comments.route';
import answerRoute from '../modules/Answers/answer.route';

const routes = express.Router();

routes.use(questionRoute);
routes.use(commentRoute);
routes.use(answerRoute);

export default routes;
