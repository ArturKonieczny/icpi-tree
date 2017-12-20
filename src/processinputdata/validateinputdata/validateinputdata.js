const validatePointData = require('./validatepointdata');

module.exports = function validateInputData(inputData) {
  if (!(inputData instanceof Array)) {
    return `Error, input data should be an Array!`;
  }

  const traitCount = {};
  const points = [];

  for (const pointData of inputData) {
    if (validatePointData(pointData)) {
      const { trait } = pointData;

      points.push(pointData);

      if (traitCount.hasOwnProperty(`${trait}`)) {
        traitCount[trait]++;
      } else {
        traitCount[trait] = 1;
      }
    }
  }

  return {
    points,
    traitCount
  };
};
