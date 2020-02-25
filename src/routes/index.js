import express from 'express';
import questionRoute from '../modules/questions/question.route';
import commentRoute from '../modules/comments/comments.route';

const routes = express.Router();

routes.use(questionRoute);
routes.use(commentRoute);

export default routes;
