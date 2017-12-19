const validateDataRow = require('./validatedatarow');
const csvLineEnd = /\r\n|\n/;
const fieldSeparator = ';';

module.exports = function processCsv(csvData) {
  const fileData = rawData.split(csvLineEnd);
  const traits = {};
  const points = [];

  for (let csvLine of fileData) {
    const pointData = csvLine.split(fieldSeparator);

    if (!validateDataRow(pointData)) {
      console.log(`Skipped invalid line ${csvLine}.`);
      continue;
    }

    const [id , trait, locationX, locationY] = pointData;

    points.push({
      id,
      trait,
      locationX,
      locationY
    });

    if (traits.hasOwnProperty(`${trait}`)) {
      traits[trait].push(id);
    } else {
      traits[trait] = [id];
    }
  }

  for (const traitName in traits) {
    traits[traitName].sort((one, two) => one - two);
  }

  return {
    traits,
    points
  };
}
