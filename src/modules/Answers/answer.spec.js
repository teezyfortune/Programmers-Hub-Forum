import { expect } from 'chai';
import { describe, it } from 'mocha';
import supertest from 'supertest';
import app from '../../app';
import {
  ANSWER_SUCCESS,
  ANSWER_UPDATED,
  CANNOT_EDIT_ANSWSER,
  CANNOT_DELETE_ANSWER,
  ANSWER_DELETED,
} from '../../utils/constant';

import * as mocks from './__mocks__/index';

const request = supertest(app);

describe('ANSWER API', () => {
  it('should be able answer question', (done) => {
    request
      .post(mocks.baseUrl)
      .send(mocks.newAnswer)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(201);
        expect(response.body.message).to.equals(ANSWER_SUCCESS);
        done();
      });
  });
  it('should return validation error ', (done) => {
    request
      .post(mocks.baseUrl)
      .send(mocks.emptyAnswer)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(422);
        expect(response.body.err).to.equals('answer is not allowed to be empty');
        done();
      });
  });
  it('should be able to update an answer', (done) => {
    request
      .patch(mocks.baseUpdate)
      .send(mocks.updateAnswer)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(200);
        expect(response.body.message).to.equals(ANSWER_UPDATED);
        done();
      });
  });
  it('Moderator should be able to updatre answer', (done) => {
    request
      .patch(mocks.baseUpdate)
      .send(mocks.moderatorUpdateAnswer)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(200);
        expect(response.body.message).to.equals(ANSWER_UPDATED);
        done();
      });
  });

  it('should return cannot update answer', (done) => {
    request
      .patch(mocks.baseInvalidUpdate)
      .send(mocks.invalidUpdateAnswer)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(401);
        expect(response.body.message).to.equals(CANNOT_EDIT_ANSWSER);
        done();
      });
  });
  it('should return cannot delete another person answer', (done) => {
    request
      .delete(mocks.baseInValidDelete)
      .send(mocks.ivaliddel)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(401);
        expect(response.body.message).to.equals(CANNOT_DELETE_ANSWER);
        done();
      });
  });
  it('should delete an answer', (done) => {
    request
      .delete(mocks.baseValidDelete)
      .send(mocks.del)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(200);
        expect(response.body.message).to.equals(ANSWER_DELETED);
        done();
      });
  });
  it('Moderator  be able to  delete an answer', (done) => {
    request
      .delete(mocks.moderatorDeleteAnswrr)
      .send(mocks.moderatorDel)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(200);
        expect(response.body.message).to.equals(ANSWER_DELETED);
        done();
      });
  });
});
