

const { Notes } = require('../constants');

module.exports = function getNoteIndex({ pitch, octave }) {

  return Notes.range.find(item => {
    return item.pitch.includes(pitch) && item.octave === octave;
  }).index;

};
