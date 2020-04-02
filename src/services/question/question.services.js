import { Op } from 'sequelize';
import models from '../../database/models';

const { Questions, voteHistory } = models;

export const createQuestion = async (items) => {
  try {
    return await Questions.create(items);
  } catch (error) {
    return error;
  }
};

export const upadateQuestion = async (items, id) => {
  try {
    const parameter = items;
    const where = {
      where: {
        id,
      },
      returning: true,
    };
    return await Questions.update(parameter, where);
  } catch (error) {
    return error;
  }
};

export const deleteQuestion = async (id) => {
  try {
    const where = {
      where: {
        id,
      },
    };
    const find = await Questions.findOne(where);
    if (find) {
      return await find.destroy();
    }
  } catch (error) {
    return error;
  }
  return false;
};

export const findOneQuestion = async (id, userId) => {
  try {
    const where = {
      where: {
        id,
        userId,
      },
    };
    return await Questions.findOne(where);
  } catch (error) {
    return error;
  }
};

export const getSpecificQuestion = async (id) => {
  try {
    const where = {
      where: {
        id,
      },
      order: [['createdAt', 'DESC']],
    };
    return await Questions.findOne(where);
  } catch (err) {
    return err;
  }
};

export const getAllQuestion = async () => {
  try {
    return await Questions.findAll({ order: [['createdAt', 'DESC']] });
  } catch (err) {
    return err;
  }
};

export const getAllvoteType = async (questionId, voteType) => {
  try {
    const where = {
      where: {
        [Op.and]: [{ questionId }, { vote_type: voteType }],
      },
    };
    return await voteHistory.findAndCountAll(where);
  } catch (err) {
    return err;
  }
};

/** retrieve all answer to a question and their count */
export const getAllUserQuestions = async (userId) => {
  try {
    const where = {
      where: {
        userId,
      },
    };
    const question = await Questions.findAndCountAll(where);
    return question.count;
  } catch (err) {
    return err;
  }
};

export const getRelatedQuestion = async (question) => {
  try {
    const where = {
      where: {
        question: { [Op.iLike]: `%${question}%` },
      },
    };
    return await Questions.findAndCountAll(where);
  } catch (err) {
    return err;
  }
};
