const processCsv = require('./processCsv');
const validateInputData = require('./validateinputdata');

/**
 * Process input data from CSV content or check if user input is correct.
 * @param  {String} inputData   CSV file content OR Array of Objects with properties:
 *                              id, trait, locationX, locationY
 * @return {Object}             {traitCount, points}
 */
module.exports = function processInputData(inputData) {
  if (typeof inputData === 'string') {
    return processCsv(inputData);
  }

  return validateInputData(inputData);
};
