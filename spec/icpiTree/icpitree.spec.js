const { expect } = require('chai');
const icpi = require('../../index');
const testCases = require('./testCases');

describe('icpiTree results', () => {
  testCases.forEach((testCase) => {
    const { icpiTree } = icpi(testCase.input);

    for (const key of Object.keys(icpiTree)) {
      it(`Should have proporty ${key}`, () => {
        expect(icpiTree).to.have.property(key);
      });

      it(`property ${key} should be an Array`, () => {
        expect(icpiTree[key]).to.be.an('Array');
      });

      it(`Property ${key} should have ${testCase.output.icpiTree[key].length} elements`, () => {
        expect(icpiTree[key].length).to.equal(testCase.output.icpiTree[key].length);
      });
    }
  });
});
