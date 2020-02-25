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
  UPDATE_QUESTION,
  DELETE_QUESTION,
  CANNOT_EDIT_QUESTION,
  CANNOT_DELETE_QUESTION,
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
    const { id: questionId, userId } = req.body;

    const findOne = await findOneQuestion(questionId, userId);

    if (!findOne) {
      return Response(res, { status: 401, message: CANNOT_EDIT_QUESTION });
    }
    const edit = await upadateQuestion(req.body, questionId);

    return Response(res, { status: 200, message: UPDATE_QUESTION, data: edit });
  } catch (error) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
};

export const destroyQuestion = async (req, res) => {
  try {
    const { id: questionId } = req.params;
    const { userId } = req.body;
    const findOne = await findOneQuestion(questionId, userId);

    if (!findOne) {
      return Response(res, { status: 401, message: CANNOT_DELETE_QUESTION });
    }

    await deleteQuestion(questionId);
    return Response(res, { status: 200, message: DELETE_QUESTION });
  } catch (error) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
};
export const fetchOneQuestion = async () => {};
