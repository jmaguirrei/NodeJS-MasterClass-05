

const assert = require('assert');
const getAllScaleNotesIndex = require('../getAllScaleNotesIndex');

module.exports = {

  ['C major scale complete'](done) {
    assert.deepEqual(
      getAllScaleNotesIndex({ tonicIndex: 60, scale: 'major' }),
      // Result
      [
        21,
        23,
        24,
        26,
        28,
        29,
        31,
        33,
        35,
        36,
        38,
        40,
        41,
        43,
        45,
        47,
        48,
        50,
        52,
        53,
        55,
        57,
        59,
        60,
        62,
        64,
        65,
        67,
        69,
        71,
        72,
        74,
        76,
        77,
        79,
        81,
        83,
        84,
        86,
        88,
        89,
        91,
        93,
        95,
        96,
        98,
        100,
        101,
        103,
        105,
        107,
        108,
      ]
    );
    done();
  },



};

