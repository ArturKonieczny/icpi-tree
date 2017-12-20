const minTrait = 0;
const requiredProperties = ['id', 'trait', 'locationX', 'locationY'];

/**
 * Check if user provided single point data is correct.
 * @param  {Object} pointData User provided single point data object.
 * @return {Boolean}          True if correct.
 */
module.exports = function validatePointData(pointData) {
  for (const property in requiredProperties) {
    if (!pointData.hasOwnProperty(property)) {
      return false;
    }

    if (isNaN(pointData[property])) {
      return false;
    }
  }

  if (!Number.isInteger(Number(pointData.id))) {
    return false;
  }

  if (pointData.trait < minTrait || !Number.isInteger(Number(pointData.trait))) {
    return false;
  }

  return true;
};
