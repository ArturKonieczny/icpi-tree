const defaultMaxDist = 3;
const defaultMinPrev = 0;
const minMinPrev = 0;
const maxMinPrev = 1;

const isBetween = require('./isBetween');

/**
 * Validated min prev. input.
 *
 * @param  {Float} value Min. prev. input.
 * @return {Float}       Returns input if its valid, or default value if its invalid.
 */
function validateMinPrev(value) {
  if (isNaN(value)) {
    return defaultMinPrev;
  }

  const numberValue = Number(value);

  return isBetween(numberValue, minMinPrev, maxMinPrev) ? numberValue : defaultMinPrev;
}

/**
 * Validates maximum distance input.
 *
 * @param  {Float} value Max. dist. input.
 * @return {Float}       Returns input if its valid, or default value if its invalid.
 */
function validateMaxDist(value) {
  if (isNaN(value)) {
    return defaultMaxDist;
  }

  const numberValue = Number(value);

  return numberValue < 0 ? defaultMaxDist : numberValue;
}

module.exports = {
  validateMinPrev,
  validateMaxDist
};
