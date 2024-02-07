// Destructuring assignment for animal sounds
const animalSounds = ['moo', 'neigh', 'baa', 'oink', 'cluck'];
const [moo, neigh, baa, oink, cluck] = animalSounds;

// Destructuring assignment for traditional animal names
const traditionalAnimalNames = 'cow, horse, sheep, pig';
const [bessie, horse, dolly, pig] = traditionalAnimalNames.split(', ');

// Destructuring assignment for traditional animal colors
const traditionalAnimalColors = 'brown, black, white';
const [brown, black, white] = traditionalAnimalColors.split(', ');

// Destructuring assignment for rainbow colors using color names
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// Destructuring assignment for rainbow colors using initials
const [r, o, y, g, b, i, v] = rainbowColors;

// Destructuring assignment for single rainbow color using indg
const [, , , , , indg] = rainbowColors;

// Destructuring assignment for muppet object variables
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const { muppetName, color, song, job, partner } = muppet;

// Destructuring assignment for nested muppet object variables
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;

module.exports = {
  moo,
  neigh,
  baa,
  oink,
  cluck,
  bessie,
  horse,
  dolly,
  pig,
  brown,
  black,
  white,
  red,
  orange,
  yellow,
  green,
  blue,
  indigo,
  violet,
  r,
  o,
  y,
  g,
  b,
  i,
  v,
  indg,
  muppetName,
  color,
  song,
  job,
  partner,
  song2,
  song4,
  nestedJob,
  nestedPartner
};