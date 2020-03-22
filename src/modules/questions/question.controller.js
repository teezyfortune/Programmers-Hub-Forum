import Response from '../../utils/index';
import {
  createQuestion,
  upadateQuestion,
  deleteQuestion,
  findOneQuestion,
  getAllQuestion,
  getSpecificQuestion,
  getAllvoteType,
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
  NO_COMMENTS,
  AUTHORISED,
  ALL_QUESTION,
  NO_QUESTION,
  UPVOTE,
  NO_COUNT,
  DOWNVOTE,
  DOWNVOTE_COUNT,
  UPVOTE_COUNT,
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
          message: NO_COMMENTS,
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
