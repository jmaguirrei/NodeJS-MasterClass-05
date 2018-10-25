

module.exports = function flatMap(array, fn = (x => x)) {

  return [].concat(...array.map(fn));

};
