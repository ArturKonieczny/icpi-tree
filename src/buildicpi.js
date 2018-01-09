const processInputData = require('./processinputdata');
const createIcpi = require('./createicpi');
const defaultMaxDist = 3;

/**
 * Processes input data and returns iCPI-tree in the form of hashmap.
 * Key: 'pointID:trait', value: Array of neighbours ids.
 * @param  {String} inputData                CSV file content OR Array of Objects with properties:
 *                                           id, trait, locationX, locationY
 * @param  {Number} [maxDist=3]              Maximum distance for points to be considered neighbours.
 * @return {Object}                          {icpiTree, pointData}, pointData = {traitCount, points}
 */
module.exports = function buildIcpi(inputData, maxDist = defaultMaxDist) {
  const pointData = processInputData(inputData);

  if (typeof pointData === 'string') {
    return pointData;
  }

  return {
    icpiTree: createIcpi(pointData, maxDist),
    pointData
  };
};
