const { expect } = require('chai');
const icpi = require('../../index');
const testCases = require('./testCases');

describe('pointData results', () => {
  testCases.forEach((testCase) => {
    it(`Should have proporty points`, () => {
      const result = icpi(testCase.input).pointData;

      expect(result).to.have.property('points');
    });

    it(`Property points should be an Array`, () => {
      const result = icpi(testCase.input).pointData;

      expect(result.points).to.be.an('Array');
    });

    it(`Property points should have ${testCase.output.pointData.points.length} elements`, () => {
      const result = icpi(testCase.input).pointData;

      expect(result.points.length).to.equal(testCase.output.pointData.points.length);
    });

    it(`Should have proporty traitCount`, () => {
      const result = icpi(testCase.input).pointData;

      expect(result).to.have.property('traitCount');
    });

    it(`Property traitCount should be an Object`, () => {
      const result = icpi(testCase.input).pointData;

      expect(result.traitCount).to.be.an('Object');
    });

    it(`Property traitCount should have ${Object.keys(testCase.output.pointData.traitCount).length} properties`, () => {
      const result = icpi(testCase.input).pointData;

      expect(Object.keys(result.traitCount).length).to.equal(Object.keys(testCase.output.pointData.traitCount).length);
    });
  });
});
