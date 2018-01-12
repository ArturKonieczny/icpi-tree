const validateDataRow = require('./validatedatarow');
const csvLineEnd = /\r\n|\n/;
const fieldSeparator = ';';

/**
 * Process CSV input.
 * @param  {String} csvData CSV content.
 * @return {Object}         {traitCount, points}
 */
module.exports = function processCsv(csvData) {
  const fileData = csvData.split(csvLineEnd);
  const points = [];

  for (const csvLine of fileData) {
    const pointData = csvLine.split(fieldSeparator);

    if (!validateDataRow(pointData)) {
      // console.log(`Skipped invalid line ${csvLine}.`);
      continue;
    }

    const [id, trait, locationX, locationY] = pointData;

    points.push({
      id,
      trait,
      locationX: Number(locationX),
      locationY: Number(locationY)
    });
  }

  return points;
};
