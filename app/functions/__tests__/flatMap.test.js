
const assert = require('assert');
const flatMap = require('../flatMap.js');

module.exports = {

  ['A simple array with no nest elements is returned as is'](done) {
    assert.deepEqual(
      flatMap([ 3, 7, 2, 3 ], x => x),
      // Result
      [ 3, 7, 2, 3 ]
    );
    done(); // Call done() when the test has async operation
  },

  ['No function provided, just flatten one level nested array']() {
    assert.deepEqual(
      flatMap([ 3, [ 7, 2 ], 3 ]),
      // Result
      [ 3, 7, 2, 3 ]
    );
  },

  ['Regular array is mapped and flattened']() {
    assert.deepEqual(
      flatMap([ [ 1, 2 ], [ 2, 4 ], [ 2, 3 ] ], x => [ x[0] + x[1] ]),
      // Result
      [ 3, 6, 5 ]
    );
  },

  ['Irregular array cannot be mapped']() {
    assert.ok(
      flatMap([ 3, [ 7, 2 ], 3 ], x => x * 2),
      // Result
      false
    );
  },

};

