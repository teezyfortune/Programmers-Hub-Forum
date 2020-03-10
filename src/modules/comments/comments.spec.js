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
} from '../../utils/constant';

import * as mocks from './__mocks__/index';

const request = supertest(app);

describe('COMMENT API', () => {
  it('should be able comment on a question', (done) => {
    request
      .post(mocks.baseUrl)
      .send(mocks.newComment)
      .end((err, response) => {
        if (err) done(err);
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
      .patch(mocks.baseUpdate)
      .send(mocks.updateComment)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(200);
        expect(response.body.message).to.equals(COMMENT_UPDATED);
        done();
      });
  });
  it('Moderator should be able to updatre comment', (done) => {
    request
      .patch(mocks.baseUpdate)
      .send(mocks.moderatorUpdateComment)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(200);
        expect(response.body.message).to.equals(COMMENT_UPDATED);
        done();
      });
  });

  it('should return cannot update comment', (done) => {
    request
      .patch(mocks.baseInvalidUpdate)
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
      .delete(mocks.baseValidDelete)
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
