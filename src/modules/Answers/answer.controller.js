import {
  answerQuestion,
  updateAnswer,
  getOneAnswer,
  deleteAnswer,
  getAspecificAnswer,
} from '../../services/answers/answers.services';
import {
  ANSWER_SUCCESS,
  SERVER_ERROR,
  AUTHORISED,
  ANSWER_UPDATED,
  CANNOT_EDIT_ANSWSER,
  CANNOT_DELETE_ANSWER,
  ANSWER_DELETED,
  SPECIFIC_ANSWER,
  ANSWER_COMMENT,
} from '../../utils/constant';

import { findAllComment } from '../../services/comments/comments.services';
import Response from '../../utils/index';
import { fetchAllQuestion } from '../questions/question.controller';

export const saveAnswer = async (req, res) => {
  try {
    const { questionId } = req.params;

    const answer = await answerQuestion(req.body, questionId);
    return res.status(201).json({
      message: ANSWER_SUCCESS,
      status: 201,
      data: answer,
    });
  } catch (err) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
};

export const editAnswer = async (req, res) => {
  try {
    const { answerId } = req.params;

    const { image_url: imageUrl, answer, userId, type } = req.body;
    const find = await getOneAnswer(answerId, userId);

    if (!find && type === AUTHORISED) {
      const edit = await updateAnswer({ imageUrl, answer }, answerId);
      return res.status(200).json({
        status: 200,
        message: ANSWER_UPDATED,
        data: edit,
      });
    }
    if (!find) {
      return res.status(401).json({ status: 401, message: CANNOT_EDIT_ANSWSER });
    }
    const edit = await updateAnswer({ imageUrl, answer }, answerId);
    return res.status(200).json({
      status: 200,
      message: ANSWER_UPDATED,
      data: edit,
    });
  } catch (error) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
};

export const destroyAnswer = async (req, res) => {
  try {
    const { answerId } = req.params;
    const { userId, type } = req.body;

    const find = await getOneAnswer(answerId, userId);

    if (!find && type === AUTHORISED) {
      await deleteAnswer(answerId);
      return res.status(200).json({
        status: 200,
        message: ANSWER_DELETED,
      });
    }
    if (!find) {
      return res.status(401).json({ status: 401, message: CANNOT_DELETE_ANSWER });
    }
    const remove = await deleteAnswer(answerId);
    if (remove) {
      return Response(res, { status: 200, message: ANSWER_DELETED });
    }
  } catch (error) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
};

export const fetASpecifAnswerAndComments = async (req, res) => {
  try {
    const { answerId } = req.params;
    const answer = await getAspecificAnswer(answerId);
    const comments = await findAllComment(answerId);
    if (comments.length === 0) {
      return res.status(200).json({ status: 200, data: answer, message: ANSWER_COMMENT });
    }
    return res
      .status(200)
      .json({ status: 200, message: SPECIFIC_ANSWER, data: { answer, comments } });
  } catch (error) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
};
