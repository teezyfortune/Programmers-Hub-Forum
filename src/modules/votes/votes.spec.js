import { expect } from 'chai';
import { describe, it } from 'mocha';
import supertest from 'supertest';
import app from '../../app';
import * as mocks from './___mocks__/index';

const request = supertest(app);

describe('VOTE API', () => {
  it('Should be able to upvote a question', (done) => {
    request
      .post(mocks.upvoteUrl)
      .send(mocks.upvote)
      .end((err, response) => {
        if (err) done(err);
        const { data } = response.body;
        if (data) {
          expect(response.statusCode).to.equals(201);
        } else {
          expect(response.statusCode).to.equals(409);
        }
        done();
      });
  });
  it('Should be able to downvote a question', (done) => {
    request
      .post(mocks.downvoteUrl)
      .send(mocks.downvote)
      .end((err, response) => {
        if (err) done(err);
        const { data } = response.body;
        if (data) {
          expect(response.statusCode).to.equals(201);
        } else {
          expect(response.statusCode).to.equals(409);
        }
        done();
      });
  });
});
