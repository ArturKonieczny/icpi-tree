const minTrait = 0;
const requiredProperties = ['id', 'trait', 'locationX', 'locationY'];

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
