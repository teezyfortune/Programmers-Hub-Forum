import express from 'express';
import { saveUpvote, saveDownVote } from './votes.controller';
import { downVote } from '../../services/votes/votes.services';

const voteRoute = express.Router();

voteRoute.post('/question/:questionId/upvote', saveUpvote);
voteRoute.post('/question/:questionId/downvote', saveDownVote);

export default voteRoute;
