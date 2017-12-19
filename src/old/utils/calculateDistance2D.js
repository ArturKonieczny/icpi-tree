const SQUARE = 2;
const ROOT = 0.5;

/**
 * Calculats distance between two points on 2D plane.
 *
 * @param  {Object} pointA {locationX, locationY}
 * @param  {Object} pointB {locationX, locationY}
 * @return {Float}        Distance
 */
module.exports = function calculateDistance2D(pointA, pointB) {
  const xDiffSquared = Math.pow(pointA.locationX - pointB.locationX, SQUARE);
  const yDiffSquared = Math.pow(pointA.locationY - pointB.locationY, SQUARE);

  return Math.pow(xDiffSquared + yDiffSquared, ROOT);
};
