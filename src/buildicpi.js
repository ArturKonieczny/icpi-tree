const processInputData = require('./processinputdata');
const createIcpi = require('./createicpi');

module.exports = function buildIcpi(inputData, maxDist) {
  const pointData = processInputData(inputData);

  if (typeof(pointData) === 'string') {
    return pointData;
  }
  
  return createIcpi(pointData);
}
