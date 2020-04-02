import { saveVoteHistory, saveVote, findOneVoter } from '../../services/votes/votes.services';
import { DOWNVOTE, UPVOTE, SERVER_ERROR } from '../../utils/constant';
import Response from '../../utils/index';

export const saveUpvote = async (req, res) => {
  try {
    const { questionId } = req.params;
    const { userId } = req.body;

    const find = await findOneVoter(questionId, userId, UPVOTE);

    if (find) {
      return res.status(409).json({
        message: 'Vote already taken',
      });
    }

    if (!find) {
      const counts = await saveVote(questionId);

      await saveVoteHistory(userId, questionId, UPVOTE);

      return res.status(201).json({
        message: 'thanks for voting this question',
        data: counts,
      });
    }
  } catch (err) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
  return false;
};

export const saveDownVote = async (req, res) => {
  try {
    const { questionId } = req.params;
    const { userId } = req.body;

    const find = await findOneVoter(questionId, userId, DOWNVOTE);

    if (find) {
      return res.status(409).json({
        message: 'Vote already taken',
      });
    }

    if (!find) {
      const counts = await saveVote(questionId);
      await saveVoteHistory(userId, questionId, UPVOTE);

      return res.status(201).json({
        message: 'thanks for voting this question',
        data: counts,
      });
    }
  } catch (err) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
  return false;
};
