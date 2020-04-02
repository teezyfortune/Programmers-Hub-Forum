import { expect } from 'chai';
import { describe, it } from 'mocha';
import supertest from 'supertest';
import app from '../../app';

import {
  COMMENT_SUCCESS,
  COMMENT_UPDATED,
  CANNOT_EDIT_COMMENT,
  CANNOT_DELETE_COMMENT,
  COMMENT_DELETED,
  ANSWER_SUCCESS,
} from '../../utils/constant';

import * as mocks from './__mocks__/index';

const request = supertest(app);
let answer;
let comment;
describe('COMMENT API', () => {
  it('should be able comment on Answer', (done) => {
    request
      .post(mocks.baseUrlAnswer)
      .send(mocks.newAnswer)
      .end((err, response) => {
        answer = response.body.data;
        if (err) done(err);
        expect(response.statusCode).to.equals(201);
        expect(response.body.message).to.equals(ANSWER_SUCCESS);
        done();
      });
  });
  it('should be able comment on Answer', (done) => {
    request
      .post(`/api/v1/${answer.id}/createComment`)
      .send(mocks.newComment)
      .end((err, response) => {
        if (err) done(err);
        comment = response.body.data;
        expect(response.statusCode).to.equals(201);
        expect(response.body.message).to.equals(COMMENT_SUCCESS);
        done();
      });
  });
  it('should return validation error ', (done) => {
    request
      .post(mocks.baseUrl)
      .send(mocks.emptyComment)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(422);
        expect(response.body.err).to.equals('comment is not allowed to be empty');
        done();
      });
  });
  it('should be able to update a Comment', (done) => {
    request
      .patch(`/api/v1/${comment.id}/updateComment`)
      .send(mocks.updateComment)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(200);
        expect(response.body.message).to.equals(COMMENT_UPDATED);
        done();
      });
  });
  it('Moderator should be able to update comment', (done) => {
    request
      .patch(`/api/v1/${comment.id}/updateComment`)
      .send(mocks.updateComment)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(200);
        expect(response.body.message).to.equals(COMMENT_UPDATED);
        done();
      });
  });

  it('should return cannot update comment', (done) => {
    request
      .patch(`/api/v1/${comment.id}/updateComment`)
      .send(mocks.invalidUpdateComment)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(401);
        expect(response.body.err).to.equals(CANNOT_EDIT_COMMENT);
        done();
      });
  });
  it('should return cannot delete another person comment', (done) => {
    request
      .delete(mocks.baseInValidDelete)
      .send(mocks.ivaliddel)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(401);
        expect(response.body.err).to.equals(CANNOT_DELETE_COMMENT);
        done();
      });
  });
  it('should delete a comment', (done) => {
    request
      .delete(`/api/v1/${comment.id}/deleteComment`)
      .send(mocks.del)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(200);
        expect(response.body.message).to.equals(COMMENT_DELETED);
        done();
      });
  });
  it('Moderator  be able to  delete a comment', (done) => {
    request
      .delete(mocks.moderatorDeleteComment)
      .send(mocks.moderatorDel)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(200);
        expect(response.body.message).to.equals(COMMENT_DELETED);
        done();
      });
  });
});
