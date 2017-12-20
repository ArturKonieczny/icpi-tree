const dataRowLength = 4;
const minTrait = 0;

module.exports = function validateDataRow(pointDataRow) {
  if (pointDataRow.length !== dataRowLength) {
    return false;
  }

  for (let pointData of pointDataRow) {
    pointData = pointData.replace(/ /g, '').replace(/\t/g, '');
    if (isNaN(pointData) || pointDataRow === '') {
      return false;
    }
  }

  if (!Number.isInteger(Number(pointDataRow[0]))) {
    return false;
  }

  if (pointDataRow[1] < minTrait || !Number.isInteger(Number(pointDataRow[1]))) {
    return false;
  }

  return true;
};
