import model from '../../database/models';

const { voteHistory, Questions } = model;

export const findOneVoter = async (questionId, userId, voteType) => {
  try {
    const where = {
      where: {
        questionId,
        userId,
        vote_type: voteType,
      },
    };

    return await voteHistory.findOne(where);
  } catch (err) {
    return err;
  }
};

export const saveVoteHistory = async (userId, questionId, voteType) => {
  try {
    return await voteHistory.create({ userId, questionId, vote_type: voteType });
  } catch (err) {
    return err;
  }
};

export const saveVote = async (questionId) => {
  try {
    const where = {
      where: {
        id: questionId,
      },
    };
    return await Questions.increment('votes', where);
  } catch (err) {
    return err;
  }
};

export const downVote = async (questionId) => {
  try {
    const where = {
      where: {
        id: questionId,
      },
    };
    return await Questions.decrement('votes', where);
  } catch (err) {
    return err;
  }
};
