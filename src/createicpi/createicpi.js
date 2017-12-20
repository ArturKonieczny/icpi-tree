const calculateDistance2D = require('./calculateDistance2D');

/**
 * Creates iCPI-tree using PlainSweep algorithm.
 * @param  {Array} pointData  Array of point Objects ({id, trait, locationX, locationY})
 * @param  {Number} maxDist   Maximum distance for points to be considered neighbours.
 * @return {Object}           iCPI-tree in the form of hashmap. Key: 'pointID:trait', value: Array of neighbours ids.
 */
module.exports = function createIcpi(pointData, maxDist) {
  const icpiTree = {};
  const sortedData = pointData.sort((one, two) => one.locationX - two.locationX);

  sortedData.forEach((point1) => {
    for (const point2 of sortedData) {
      if (point2.trait <= point1.trait) {
        continue;
      }

      if (point2.locationX - point1.locationX < -maxDist) {
        continue;
      }

      if (point2.locationX - point1.locationX > maxDist) {
        break;
      }

      if (calculateDistance2D(point1, point2) <= maxDist) {
        const index = `${point1.id}:${point2.trait}`;

        if (!icpiTree.hasOwnProperty(index)) {
          icpiTree[index] = [];
        }

        icpiTree[index].push(point2.id);
      }
    }
  });

  return icpiTree;
};
