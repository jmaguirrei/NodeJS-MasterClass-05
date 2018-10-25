

const { Notes, Scales } = require('../constants');

module.exports = function getNotePitch({ tonicPitch, scale, noteIndex }) {

  const findNote = Notes.range.find(item => item.index === noteIndex);
  const findScale = Scales.list.find(item => item.names.includes(scale));
  const useFlatPitches = Scales.accidents[findScale.superset].flat.includes(tonicPitch);
  const noPitchChoice = findNote.pitch.length === 1;
  const selectedPitchIndex = (useFlatPitches || noPitchChoice) ? 0 : 1;

  const pitch = findNote.pitch[selectedPitchIndex];
  const octave = findNote.octave;
  return `${pitch}${octave}`;

};
