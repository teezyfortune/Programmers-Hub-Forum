import Response from '../../utils/index';
import {
  createQuestion,
  upadateQuestion,
  deleteQuestion,
  findOneQuestion,
} from '../../services/question/question.services';
import {
  QUESTION_SUCCESS,
  SERVER_ERROR,
  NOT_FOUND,
  UPDATE_QUESTION,
  DELETE_QUESTION,
} from '../../utils/constant';

export const saveQuestion = async (req, res) => {
  try {
    const questionDetails = {
      userId: req.body.id || 1,
      title: req.body.title,
      question: req.body.question,
      image: req.body.image,
      tags: req.body.tags,
    };
    const question = await createQuestion(questionDetails);
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
    const questionId = req.params.id;
    const findOne = await findOneQuestion(questionId);
    if (findOne.length === 0) {
      return Response(res, { status: 404, message: NOT_FOUND });
    }
    const edit = await upadateQuestion(req.body, questionId);

    return Response(res, { status: 200, message: UPDATE_QUESTION, data: edit });
  } catch (error) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
};

export const destroytQuestion = async (req, res) => {
  try {
    const questionId = req.params.id;
    const findOne = await findOneQuestion(questionId);
    if (findOne.length === 0) {
      return Response(res, { status: 404, message: NOT_FOUND });
    }
    await deleteQuestion(questionId);
    return Response(res, { status: 200, message: DELETE_QUESTION });
  } catch (error) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
};
export const fetchOneQuestion = async () => {};
