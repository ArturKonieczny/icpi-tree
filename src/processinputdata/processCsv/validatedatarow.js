const dataRowLength = 4;
const minTrait = 0;

/**
 * Check if single CSV row is correct.
 * @param  {String} pointDataRow Single row of csv file.
 * @return {Boolean}             True if correct.
 */
module.exports = function validateDataRow(pointDataRow) {
  if (pointDataRow.length !== dataRowLength) {
    return false;
  }

  for (let pointData of pointDataRow) {
    pointData = pointData.replace(/ /g, '').replace(/\t/g, '');
    if (isNaN(pointData) || pointData === '') {
      return false;
    }
  }

  if (!Number.isInteger(Number(pointDataRow[0]))) {
    return false;
  }

  if (Number(pointDataRow[1]) < minTrait || !Number.isInteger(Number(pointDataRow[1]))) {
    return false;
  }

  return true;
};
