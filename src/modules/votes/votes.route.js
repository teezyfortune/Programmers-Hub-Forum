import express from 'express';
import { saveUpvote, saveDownVote } from './votes.controller';

const voteRoute = express.Router();

/**
 * @sagger
 *
 * /question/:questionId/upvote:
 *	post:
 *			tags:
 *				- Upvote
 *			description: User can upvote a question
 *			produces
 *			 - application/json
 *			parameters:
 *			 - name: questionId
 *			 - description: question id
 *			 - in: url params
 *			 - required: true
 *		 	responses:
 *			 200:
 *
 *
 *
 *
 *
 *
 */
voteRoute.post('/question/:questionId/upvote', saveUpvote);

/**
 * @sagger
 *
 * /question/:questionId/downvote:
 *	post:
 *			tags:
 *				- Upvote
 *			description: User can upvote a question
 *			produces
 *			 - application/json
 *			parameters:
 *			 - name: questionId
 *			 - description: question id
 *			 - in: url params
 *			 - required: true
 *			Response
 *			 200:
 * 			 		description: Ok
 *  		 500:
 * 			 		description: Internal Server Error
 *
 *
 *
 */
voteRoute.post('/question/:questionId/downvote', saveDownVote);

export default voteRoute;
