/**
 * Retrieves data from file input as a Promise.
 *
 * @param  {HTMLnode} fileNode File input node.
 * @return {string}          Unprocessed file data. Data is returned as either resolve or reject of Promise.
 */
module.exports = function getData(fileNode) {
  return new Promise((resolve, reject) => {
    const freader = new FileReader();

    freader.onload = function(fileData) {
      resolve(fileData.target.result);
    };
    freader.onerror = reject;
    freader.readAsText(fileNode);
  });
};
