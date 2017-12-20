const { expect } = require('chai');
const icpi = require('../../index');
const testCases = require('./testCases');

describe('icpiTree results', () => {
  testCases.forEach((testCase) => {
    const { traitCount } = icpi(testCase.input).pointData;

    for (const key of Object.keys(traitCount)) {
      it(`Should have proporty ${key}`, () => {
        expect(traitCount).to.have.property(key);
      });

      it(`property ${key} should equal ${traitCount[key]}`, () => {
        expect(traitCount[key]).to.equal(testCase.output.pointData.traitCount[key]);
      });
    }
  });
});
