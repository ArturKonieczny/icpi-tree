const { expect } = require('chai');
const icpi = require('../../index');
const testCases = require('./testCases');

describe('points results', () => {
  testCases.forEach((testCase) => {
    const { pointData } = icpi(testCase.input);

    for (const point of pointData) {
      it(`point should be an Object`, () => {
        expect(point).to.be.an('Object');
      });

      it(`point should have 4 properties`, () => {
        expect(Object.keys(point).length).to.equal(4);
      });

      it('should have id property', () => {
        expect(point).to.have.property('id');
      });

      it('should have trait property', () => {
        expect(point).to.have.property('trait');
      });

      it('should have locationX property', () => {
        expect(point).to.have.property('locationX');
      });

      it('should have locationY property', () => {
        expect(point).to.have.property('locationY');
      });
    }
  });
});
