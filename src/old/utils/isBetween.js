/**
 * Checks if value is between min value and max value.
 *
 * @param  {Float} number Value to be checked.
 * @param  {Float} min    Minimum value.
 * @param  {Float} max    Maximum value.
 * @return {Bool}        True if value is between min and max.
 */
module.exports = function isBetween(number, min, max) {
  if (number < min || number > max) {
    return false;
  }

  return true;
};
