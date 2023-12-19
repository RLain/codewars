import chai from 'chai';
const expect = chai.expect;
import { executeLogic } from '../day-1-part-2.js';
import { singleSimpleValue, singleComplexValueWithMixed } from './test-data.js';

describe('Day 1 Part 2 Tests', () => {
  it('singleSimpleValue must return 54', () => {
    expect(executeLogic(singleSimpleValue)).to.equal(54);
  });
  it('singleComplexValueWithMixed must return 49', () => {
    expect(executeLogic(singleComplexValueWithMixed)).to.equal(49);
  });
});
