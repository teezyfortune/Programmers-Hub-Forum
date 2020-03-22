import {
  saveVoteHistory,
  saveVote,
  findOneVoter,
  downVote,
} from '../../services/votes/votes.services';
import { DOWNVOTE, SERVER_ERROR } from '../../utils/constant';
import Response from '../../utils/index';

export const saveUpvote = async (req, res) => {
  try {
    const { questionId } = req.params;
    const { userId } = req.body;
    const type = 'upvote';

    const find = await findOneVoter(questionId, userId, type);
    console.log('====>>>>hist>', find);

    if (find) {
      return res.status(200).json({
        message: 'Vote already taken',
      });
    }

    if (!find) {
      const counts = await saveVote(questionId);
      console.log('====>>>>co>unt', counts);

      // const { {{votes}} 1} = counts;

      await saveVoteHistory(userId, questionId, type);

      return res.status(201).json({
        message: 'thanks for voting this question',
        data: counts,
      });
    }
  } catch (err) {
    console.log('====>>>>hist>', err);
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
  return false;
};

export const saveDownVote = async (req, res) => {
  try {
    const { questionId } = req.params;
    const { userId } = req.body;
    const type = 'downvote';

    const find = await findOneVoter(questionId, userId, type);

    if (find) {
      return res.status(200).json({
        message: 'Vote already taken',
      });
    }

    if (!find) {
      const counts = await downVote(questionId);
      console.log('====>>>>co>unt', counts);
      await saveVoteHistory(userId, questionId, type);

      return res.status(201).json({
        message: 'thanks for voting this question',
        data: counts,
      });
    }
  } catch (err) {
    console.log('====>>>>hist>', err);
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
  return false;
};
