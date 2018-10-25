

const assert = require('assert');
const getNotePitch = require('../getNotePitch');

module.exports = {

  ['C major scale note index 64 should be E4'](done) {
    assert.equal(
      getNotePitch({ tonicPitch: 'C', scale: 'major', noteIndex: 64 }),
      // Result
      'E4'
    );
    done();
  },

  ['C minor scale note index 63 should be Eb4'](done) {
    assert.equal(
      getNotePitch({ tonicPitch: 'C', scale: 'minor', noteIndex: 63 }),
      // Result
      'Eb4'
    );
    done();
  },

  ['Same index than before must be D# in the scale of D#'](done) {
    assert.equal(
      getNotePitch({ tonicPitch: 'D#', scale: 'major', noteIndex: 63 }),
      // Result
      'D#4'
    );
    done();
  },


};

