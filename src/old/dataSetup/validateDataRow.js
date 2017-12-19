const dataRowLength = 4;
const minTrait = 0;

/**
 * Validates xml data row. Checks if length of row is correct, if traits are >= 0,
 * if each input is a number. Row is rejected if any
 *
 * @param  {Array} dataRow Data row Array
 * @return {bool}         True - valid, False - invalid
 */
module.exports = function validateDataRow(dataRow) {
  if (dataRow.length === dataRowLength) {
    for (let index = 0; index < dataRow.length; index++) {
      dataRow[index] = dataRow[index].replace(/ /g, '').replace(/\t/g, '');
      if (isNaN(dataRow[index]) || dataRow[index] === '') {
        return false;
      }
    }

    if (dataRow[1] < minTrait || !Number.isInteger(Number(dataRow[1]))) {
      return false;
    }

    if (!Number.isInteger(Number(dataRow[0]))) {
      return false;
    }

    return true;
  }

  return false;
};
