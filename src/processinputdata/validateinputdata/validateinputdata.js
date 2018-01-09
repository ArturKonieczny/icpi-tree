const validatePointData = require('./validatepointdata');

/**
 * Check if user provided data is correct. Ignore invalid single point data.
 * Calculate point count for each trait.
 * @param  {Array} inputData  Array of point Objects {id, trait, locationX, locationY}
 * @return {Object}          {points, traitCount}
 */
module.exports = function validateInputData(inputData) {
  if (!(inputData instanceof Array)) {
    return `Error, input data should be an Array!`;
  }

  const points = [];

  for (const pointData of inputData) {
    if (validatePointData(pointData)) {
      points.push(pointData);
    }
  }

  return points;
};
