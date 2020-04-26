import Response from '../../utils/index';
import {
  createQuestion,
  upadateQuestion,
  deleteQuestion,
  findOneQuestion,
  getAllQuestion,
  getSpecificQuestion,
  getAllvoteType,
  getAllUserQuestions,
  getRelatedQuestion,
} from '../../services/question/question.services';

import { getAllAnswerToAQuestion } from '../../services/answers/answers.services';
import {
  QUESTION_SUCCESS,
  SERVER_ERROR,
  UPDATE_QUESTION,
  DELETE_QUESTION,
  CANNOT_EDIT_QUESTION,
  CANNOT_DELETE_QUESTION,
  QUESTION_RETRIEVED,
  NO_RELATED,
  AUTHORISED,
  ALL_QUESTION,
  NO_QUESTION,
  UPVOTE,
  NO_COUNT,
  DOWNVOTE,
  DOWNVOTE_COUNT,
  UPVOTE_COUNT,
  NO_ANSWERS,
  MATCH_FOUND,
} from '../../utils/constant';

export const saveQuestion = async (req, res) => {
  try {
    const question = await createQuestion(req.body);
    return Response(res, {
      status: 201,
      message: QUESTION_SUCCESS,
      data: question,
    });
  } catch (err) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
};

export const editQuestion = async (req, res) => {
  try {
    const { id: questionId, userId, type, title, question, image, tags } = req.body;

    const findOne = await findOneQuestion(questionId, userId);

    if (!findOne && type === AUTHORISED) {
      const edit = await upadateQuestion({ title, question, image, tags }, questionId);
      return Response(res, { status: 200, message: UPDATE_QUESTION, data: edit });
    }

    if (!findOne) {
      return Response(res, { status: 401, message: CANNOT_EDIT_QUESTION });
    }

    const edit = await upadateQuestion({ title, question, image, tags }, questionId);

    return Response(res, { status: 200, message: UPDATE_QUESTION, data: edit });
  } catch (error) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
};

export const destroyQuestion = async (req, res) => {
  try {
    const { id: questionId } = req.params;
    const { userId, type } = req.body;
    const findOne = await findOneQuestion(questionId, userId);

    if (!findOne && type === AUTHORISED) {
      await deleteQuestion(questionId);
      return Response(res, { status: 200, message: DELETE_QUESTION });
    }

    if (!findOne) {
      return Response(res, { status: 401, message: CANNOT_DELETE_QUESTION });
    }

    await deleteQuestion(questionId);
    return Response(res, { status: 200, message: DELETE_QUESTION });
  } catch (error) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
};

export const fetchAllQuestion = async (req, res) => {
  try {
    const questionId = req.params.id;
    const questions = await getAllQuestion(questionId);

    if (questions.length === 0) {
      return res.status(200).json({ status: 200, message: NO_QUESTION });
    }
    return res.status(200).json({ status: 200, message: ALL_QUESTION, data: questions });
  } catch (error) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
};

export const fetchOneSpeciicfQuestionWithAnswer = async (req, res) => {
  try {
    const { id: questionId } = req.params;

    const question = await getSpecificQuestion(questionId);
    const answers = await getAllAnswerToAQuestion(questionId);

    if (answers.length === 0) {
      return res.status(200).json({
        status: 200,
        message: QUESTION_RETRIEVED,
        data: question,
        comments: {
          message: NO_ANSWERS,
        },
      });
    }

    return res.status(200).json({
      status: 200,
      message: QUESTION_RETRIEVED,
      data: { question, answers },
    });
  } catch (error) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
};

export const fetchAllUpvote = async (req, res) => {
  try {
    const questionId = req.params.id;

    const vote = await getAllvoteType(questionId, UPVOTE);
    if (vote.length === 0) {
      return res.status(200).json({ status: 200, message: NO_COUNT });
    }
    return res.status(200).json({ status: 200, message: UPVOTE_COUNT, data: vote.count });
  } catch (error) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
};

export const fetchAllDownVote = async (req, res) => {
  try {
    const questionId = req.params.id;

    const vote = await getAllvoteType(questionId, DOWNVOTE);
    if (vote.length === 0) {
      return res.status(200).json({ status: 200, message: NO_COUNT });
    }
    return res.status(200).json({ status: 200, message: DOWNVOTE_COUNT, data: vote.count });
  } catch (error) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
};

/** returns the count of question asked by user,  */
export const fetchCountoFuserQuestion = async (req, res) => {
  try {
    const { userId } = req.params;

    const total = await getAllUserQuestions(userId);
    if (total === 0) {
      return res.status(200).json({
        status: 200,
        message: `You have ${total} question`,
      });
    }
    if (total) {
      return res.status(200).json({
        status: 200,
        message: 'Total number of question asked by you retrieved successfully',
        data: total,
      });
    }
  } catch (err) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
  return false;
};

export const fetchRelatedQuestion = async (req, res) => {
  try {
    const { question } = req.body;
    const related = await getRelatedQuestion(question);
    if (!related) {
      return res.status(404).json({ status: 404, message: NO_RELATED });
    }
    return res.status(200).json({ status: 200, message: MATCH_FOUND, data: related });
  } catch (err) {
    return err;
  }
};
