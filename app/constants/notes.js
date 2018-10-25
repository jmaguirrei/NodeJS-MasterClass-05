

const _ = require('../functions');

// http://newt.phys.unsw.edu.au/jw/notes.html
const Notes = {};

Notes.pitches = [
  [ 'C' ],
  [ 'Db', 'C#' ],
  [ 'D' ],
  [ 'Eb', 'D#' ],
  [ 'E' ],
  [ 'F' ],
  [ 'Gb', 'F#' ],
  [ 'G' ],
  [ 'Ab', 'G#' ],
  [ 'A' ],
  [ 'Bb', 'A#' ],
  [ 'B' ],
];

// From A0 (21 in MIDI standard) to C8 (108)
Notes.lowerIndex = 21;
Notes.higherIndex = 108;

Notes.range = _.range(Notes.lowerIndex, Notes.higherIndex + 1).map(index => {
  const zeroBasedIndex = index - 21;
  return {
    index,
    pitch: Notes.pitches[(9 + zeroBasedIndex) % Notes.pitches.length],
    octave: Math.floor((index - 24) / Notes.pitches.length) + 1,
  };
});


module.exports = Notes;
