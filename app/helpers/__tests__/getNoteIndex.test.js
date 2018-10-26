

const assert = require('assert');
const getNoteIndex = require('../getNoteIndex');

module.exports = {

  ['E4 is note index 64']() {
    assert.equal(
      getNoteIndex({ pitch: 'E', octave: 4 }),
      // Result
      64
    );
  },

  ['Eb4 is note index 63']() {
    assert.equal(
      getNoteIndex({ pitch: 'Eb', octave: 4 }),
      // Result
      63
    );
  },

  ['D#4 is note index 63']() {
    assert.equal(
      getNoteIndex({ pitch: 'D#', octave: 4 }),
      // Result
      63
    );
  },


};

