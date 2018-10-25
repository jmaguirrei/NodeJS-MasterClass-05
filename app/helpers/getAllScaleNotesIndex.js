

const _ = require('../functions');
const { Notes, Scales } = require('../constants');

module.exports = function getAllScaleNotesIndex({ tonicIndex, scale }) {

  const findScale = Scales.list.find(item => item.names.includes(scale));
  const noteIndexes = findScale.acumSemitones.map(interval => tonicIndex + interval);
  const expandedNoteIndexes = _.flatMap(_.range(-20, 20), factor => {
    return noteIndexes.map(index => {
      return index + Notes.pitches.length * factor;
    });
  });

  return expandedNoteIndexes.filter(index => {
    return index >= Notes.lowerIndex && index <= Notes.higherIndex;
  });


};
