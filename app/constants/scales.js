

// Add acumSemitones calculated field
function acumulateSemitones(item) {
  return {
    ...item,
    acumSemitones: item.semitones.reduce((acum, value, index) => {
      if (index === 0) return [ ...acum, value ];
      return [ ...acum, value + acum[index - 1] ];
    }, []),
  };
}

// Object init
const Scales = {};

Scales.list = [
  {
    superset: 'major',
    names: [ 'major', 'diatonic', 'ionian' ],
    semitones: [ 2, 2, 1, 2, 2, 2, 1 ],
  },
  {
    superset: 'minor',
    names: [ 'dorian' ],
    semitones: [ 2, 1, 2, 2, 2, 1, 2 ],
  },
  {
    superset: 'minor',
    names: [ 'phrygian' ],
    semitones: [ 1, 2, 2, 2, 1, 2, 2 ],
  },
  {
    superset: 'major',
    names: [ 'lidian' ],
    semitones: [ 2, 2, 2, 1, 2, 2, 1 ],
  },
  {
    superset: 'major',
    names: [ 'mixolidian' ],
    semitones: [ 2, 2, 1, 2, 2, 1, 2 ],
  },
  {
    superset: 'minor',
    names: [ 'minor', 'aeolian' ],
    semitones: [ 2, 1, 2, 2, 1, 2, 2 ],
  },
  {
    superset: 'minor',
    names: [ 'locrian' ],
    semitones: [ 1, 2, 2, 1, 2, 2, 2 ],
  },
  {
    superset: 'minor',
    names: [ 'minor_pentatonic' ],
    semitones: [ 3, 2, 2, 3, 2 ],
  },
  {
    superset: 'major',
    names: [ 'whole_tone' ],
    semitones: [ 2, 2, 2, 2, 2, 2 ],
  },
  {
    superset: 'major',
    names: [ 'octatonic', 'diminished' ],
    semitones: [ 2, 1, 2, 1, 2, 1, 2, 1 ],
  },
].map(acumulateSemitones);


// Use the proper note denomination related to the key of the music
Scales.accidents = {
  major: {
    sharp: [ 'C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#' ],
    flat: [ 'F', 'Bb', 'Eb', 'Ab' ],
  },
  minor: {
    sharp: [ 'A', 'E', 'B', 'F#', 'C#', 'G#' ],
    flat: [ 'D', 'G', 'C', 'F', 'Bb', 'Eb' ],
  },
};

module.exports = Scales;
