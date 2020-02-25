import express from 'express';
import questionRoute from '../modules/questions/question.route';

const routes = express.Router();

routes.use(questionRoute);

export default routes;
