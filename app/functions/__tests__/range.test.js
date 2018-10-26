
const assert = require('assert');
const range = require('../range.js');

module.exports = {

  ['Gives the correct range between low and (not inluded) high number']() {
    assert.deepEqual(range(3, 7), [ 3, 4, 5, 6 ]);
  },

  ['Returns empty array when high is lower than low']() {
    assert.deepEqual(range(7, 3), []);
  },

};
