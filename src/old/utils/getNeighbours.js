const calculateDistance2D = require('./calculateDistance2D');

/**
 * Creates iCPI tree of neighbourhoods.
 *
 * @param  {Array} data    Array of point Objects ({id, trait, locationX, locationY})
 * @param  {Integer} maxDist Maximum distance between points to be considered "neighbours".
 * @return {Object}         Hashmap of point neighbourhoods. 'pointIDtraittraitID'
 */
module.exports = function getNeighbors(data, maxDist) {
  const neighbors = {};
  const sortedData = data.sort((one, two) => one.locationX - two.locationX);

  for (let i = 0; i < sortedData.length; i++) {
    for (let j = 0; j < sortedData.length; j++) {
      if (sortedData[j].trait > sortedData[i].trait) {
        if (sortedData[j].locationX - sortedData[i].locationX > maxDist) {
          break;
        }
        if (sortedData[j].locationX - sortedData[i].locationX < -maxDist) {
          continue;
        }

        const index = `${sortedData[i].id}trait${sortedData[j].trait}`;

        if (calculateDistance2D(sortedData[i], sortedData[j]) <= maxDist) {
          if (!neighbors[index]) {
            neighbors[index] = [];
          }
          neighbors[index].push(sortedData[j].id);
        }
      }
    }
  }

  return neighbors;
};
