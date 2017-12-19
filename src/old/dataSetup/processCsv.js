const validateDataRow = require('./validateDataRow');

/**
 * Processes raw csv data into point data Object.
 * Invalid rows are omitted
 *
 * @param  {string} rawData Raw csv file data.
 * @return {Object}         Point data Object {
 *                           traits,
 *                           points,
 *                           traitCounter}
 *                          {traits} hashmap "trait:<traitNo>" of all points according to trait.
 *                          Lists are sorted ascending.
 *                          {points} table with all points.
 *                          Every point on list is an Object with {id, trait, locationX, locationY}
 *                          {traitCounter} integer
 */
module.exports = function processCsv(rawData) {
  const fileData = rawData.split(/\r\n|\n/);

  const pointData = {
    traits: {},
    points: [],
    traitCounter: 0
  };

  for (let i = 0; i < fileData.length; i++) {
    const point = fileData[i].split(';');

    if (!validateDataRow(point)) {
      continue;
    }

    pointData.points.push({
      id: point[0],
      trait: point[1],
      locationX: point[2],
      locationY: point[3]
    });

    if (pointData.traits[`trait:${point[1]}`]) {
      pointData.traits[`trait:${point[1]}`].push(point[0]);
    } else {
      pointData.traits[`trait:${point[1]}`] = [point[0]];
    }
  }

  pointData.traitCounter = Object.keys(pointData.traits).length;

  for (const traitName in pointData.traits) {
    pointData.traits[traitName].sort((one, two) => one - two);
  }

  return pointData;
};
