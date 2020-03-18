import Response from '../../utils/index';
import {
  upadateComment,
  deleteComment,
  findOneComment,
  createComment,
} from '../../services/comments/comments.services';
import {
  COMMENT_DELETED,
  SERVER_ERROR,
  COMMENT_SUCCESS,
  COMMENT_UPDATED,
  CANNOT_EDIT_COMMENT,
  CANNOT_DELETE_COMMENT,
  AUTHORISED,
  COMMENT_RETRIEVED,
} from '../../utils/constant';

export const saveComment = async (req, res) => {
  try {
    const { answerId } = req.params;
    const reply = await createComment(req.body, answerId);

    return Response(res, {
      status: 201,
      message: COMMENT_SUCCESS,
      data: reply,
    });
  } catch (err) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
};

export const editComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    console.log('>>>>>dddnd', commentId);

    const { userId, type, comment } = req.body;
    const find = await findOneComment(commentId, userId);

    if (!find && type === AUTHORISED) {
      const edit = await upadateComment({ comment }, commentId);

      return Response(res, { status: 200, message: COMMENT_UPDATED, data: edit });
    }

    if (!find) {
      return Response(res, { status: 401, message: CANNOT_EDIT_COMMENT });
    }

    const edit = await upadateComment({ comment }, commentId);
    return Response(res, { status: 200, message: COMMENT_UPDATED, data: edit });
  } catch (error) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
};

export const destroyComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { userId, type } = req.body;
    const findOne = await findOneComment(commentId, userId);

    if (!findOne && type === AUTHORISED) {
      await deleteComment(commentId);
      return Response(res, { status: 200, message: COMMENT_DELETED });
    }

    if (!findOne) {
      return Response(res, { status: 401, message: CANNOT_DELETE_COMMENT });
    }

    const remove = await deleteComment(commentId);
    if (remove) {
      return Response(res, { status: 200, message: COMMENT_DELETED });
    }
  } catch (error) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
};
export const fetchOneOmment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const find = await findOneComment(commentId);

    if (find.lenght === 0) {
      return Response(res, { status: 500, message: SERVER_ERROR });
    }
    return res.status(200).json({ status: 200, message: COMMENT_RETRIEVED });
  } catch (err) {
    return Response(res, { status: 500, message: SERVER_ERROR });
  }
};
