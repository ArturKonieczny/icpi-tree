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
  const traitCount = {};
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
      locationX,
      locationY
    });

    if (traitCount.hasOwnProperty(`${trait}`)) {
      traitCount[trait]++;
    } else {
      traitCount[trait] = 1;
    }
  }

  return {
    traitCount,
    points
  };
};
