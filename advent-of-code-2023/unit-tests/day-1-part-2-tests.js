import chai from 'chai';
const expect = chai.expect;
import { executeLogic } from '../day-1-part-2.js';
import {
  singleSimpleValue,
  singleMixedValueWithSingleNumber,
  combinedSimpleAndMixedValues,
  singleMixedValueWithNestedNumber,
  multipleMixedValues,
} from './test-data.js';

describe('Day 1 Part 2 Tests', () => {
  it('singleSimpleValue must return 54', () => {
    expect(executeLogic(singleSimpleValue)).to.equal(54);
  });
  it('singleMixedValueWithSingleNumber must return 49', () => {
    expect(executeLogic(singleMixedValueWithSingleNumber)).to.equal(49);
  });

  it('singleSimpleValue + singleMixedValueWithSingleNumber must return 103', () => {
    expect(executeLogic(combinedSimpleAndMixedValues)).to.equal(103);
  });

  it.only('singleMixedValueWithNestedNumber must return 81', () => {
    expect(executeLogic(singleMixedValueWithNestedNumber)).to.equal(103);
  });

  it('multipleMixedValues must return 103', () => {
    expect(executeLogic(multipleMixedValues)).to.equal(103);
  });
});
