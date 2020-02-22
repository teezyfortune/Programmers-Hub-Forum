import { expect } from 'chai';
import { describe, it } from 'mocha';
import supertest from 'supertest';
import app from '../../app';
import { QUESTION_SUCCESS, UPDATE_QUESTION, DELETE_QUESTION } from '../../utils/constant';

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
      .send(mocks.updateQyuestion)
      .end((err, response) => {
        if (err) done(err);
        expect(response.statusCode).to.equals(200);
        expect(response.body.message).to.equals(UPDATE_QUESTION);
        done();
      });
  });
  it('should be able TO DELETE', (done) => {
    request.delete(mocks.baseDelete).end((err, response) => {
      if (err) done(err);
      expect(response.statusCode).to.equals(200);
      expect(response.body.message).to.equals(DELETE_QUESTION);
      done();
    });
  });
  // it('should be able create a new question', (done) => {
  //   request.post(mocks.baseDelete).end((err, response) => {
  //     if (err) done(err);
  //     expect(response.statusCode).to.equals(422);
  //     expect(response.body.err).to.equals('question is not allowed to be empty');
  //     done();
  //   });
  // });
});
