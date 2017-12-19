module.exports = function processInputData(inputData) {
  if (typeof(inputData) === 'string') {
    return processCsv(inputData);
  }

  return validateInputData(inputData);
}
