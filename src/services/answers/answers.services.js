import models from '../../database/models';

const { Answers, Questions, comments } = models;

export const answerQuestion = async (item, questionId) => {
  try {
    return await Answers.create({ ...item, questionId });
  } catch (error) {
    return error;
  }
};

export const updateAnswer = async (item, id) => {
  try {
    const parameters = item;
    const where = {
      where: {
        id,
      },
      returning: true,
    };
    return Answers.update(parameters, where);
  } catch (error) {
    return error;
  }
};

export const deleteAnswer = async (id) => {
  try {
    const where = {
      where: {
        id,
      },
    };
    return Answers.destroy(where);
  } catch (error) {
    return error;
  }
};

export const getOneAnswer = async (id, userId) => {
  try {
    const where = {
      where: {
        id,
        userId,
      },
    };
    return await Answers.findOne(where);
  } catch (err) {
    return err;
  }
};

export const getAspecificAnswer = async (id) => {
  try {
    const where = {
      where: {
        id,
      },
      order: [['createdAt', 'DESC']],
    };
    return await Answers.findOne(where);
  } catch (err) {
    return err;
  }
};

export const getAllAnswerToAQuestion = async (questionId) => {
  try {
    const where = {
      where: {
        questionId,
      },
      order: [['createdAt', 'DESC']],
    };
    return await Answers.findAll(where);
  } catch (err) {
    return err;
  }
};

/** get all question answered by a  user */
export const getAllUserAnswer = async (userId) => {
  try {
    const where = {
      where: {
        userId,
      },
    };
    const answers = await Answers.findAndCountAll(where);
    return answers.count;
  } catch (err) {
    return err;
  }
};
