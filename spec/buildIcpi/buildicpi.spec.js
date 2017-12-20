const { expect } = require('chai');
const icpi = require('../../index');
const testCases = require('./testCases');

describe('icpi results', () => {
  testCases.forEach((testCase) => {
    it('should be an Object', () => {
      const result = icpi(testCase.input);

      expect(result).to.be.an('Object');
    });

    it(`Object returned should have ${Object.keys(testCase.output).length} properties`, () => {
      const result = icpi(testCase.input);

      expect(Object.keys(result).length).to.equal(Object.keys(testCase.output).length);
    });

    it('should have "icpiTree" property', () => {
      const result = icpi(testCase.input);

      expect(result).to.have.property('icpiTree');
    });

    it('should have "pointData" property', () => {
      const result = icpi(testCase.input);

      expect(result).to.have.property('pointData');
    });

    it('property "icpiTree" should be an Object', () => {
      const result = icpi(testCase.input);

      expect(result.icpiTree).to.be.an('Object');
    });

    it(`Property "icpiTree" should have ${Object.keys(testCase.output.icpiTree).length} properties`, () => {
      const result = icpi(testCase.input);

      expect(Object.keys(result.icpiTree).length).to.equal(Object.keys(testCase.output.icpiTree).length);
    });
  });
});
