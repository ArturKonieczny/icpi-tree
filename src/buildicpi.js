const processInputData = require('./processinputdata');
const createIcpi = require('./createicpi');
const defaultMaxDist = 3;

module.exports = function buildIcpi(inputData, maxDist = defaultMaxDist) {
  const pointData = processInputData(inputData);

  if (typeof pointData === 'string') {
    return pointData;
  }

  return {
    icpi: createIcpi(pointData.points, maxDist),
    pointData
  };
};
