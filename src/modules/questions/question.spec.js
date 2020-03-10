import { expect } from 'chai';
import { describe, it } from 'mocha';
import supertest from 'supertest';
import app from '../../app';
import {
  QUESTION_SUCCESS,
  UPDATE_QUESTION,
  CANNOT_EDIT_QUESTION,
  CANNOT_DELETE_QUESTION,
  DELETE_QUESTION,
  NO_COMMENTS,
  QUESTION_RETRIEVED,
} from '../../utils/constant';

import * as mocks from './__mocks__/index';

const request = supertest(app);

describe('CREATE QUESTION API', () => {
  it('should be able create a new question', (done) => {
    request
      .post(mocks.baseUrl)
      .send(mocks.newQuestion)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(201);
        expect(response.body.message).to.equals(QUESTION_SUCCESS);
        done();
      });
  });
  it('should return validation error ', (done) => {
    request
      .post(mocks.baseUrl)
      .send(mocks.emptyQuestion)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(422);
        expect(response.body.err).to.equals('question is not allowed to be empty');
        done();
      });
  });
  it('should be able to update a question', (done) => {
    request
      .patch(mocks.baseUpdate)
      .send(mocks.updateQuestion)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(200);
        expect(response.body.message).to.equals(UPDATE_QUESTION);
        done();
      });
  });

  it('should be able to update a question', (done) => {
    request
      .patch(mocks.baseInvalidUpdate)
      .send(mocks.invalidUpdateQuestion)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(401);
        expect(response.body.err).to.equals(CANNOT_EDIT_QUESTION);
        done();
      });
  });
  it('should return cannot delete another person question', (done) => {
    request
      .delete(mocks.baseInValidDelete)
      .send(mocks.ivaliddel)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(401);
        expect(response.body.err).to.equals(CANNOT_DELETE_QUESTION);
        done();
      });
  });
  it('should delete a question', (done) => {
    request
      .delete(mocks.baseValidDelete)
      .send(mocks.del)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(200);
        expect(response.body.message).to.equals(DELETE_QUESTION);
        done();
      });
  });
  it('should be a get a single question and comment associated to it', (done) => {
    request.get(mocks.baseGetSpecfic).end((err, response) => {
      if (err) done(err);
      const { data } = response.body;
      if (data) {
        expect(response.statusCode).to.equals(200);
        expect(response.body.message).to.equals(QUESTION_RETRIEVED);
      } else {
        expect(response.statusCode).to.equals(200);
        expect(response.body.message).to.equals(NO_COMMENTS);
      }
      done();
    });
  });
});
