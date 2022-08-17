const arrayToMatrix = (array, columns) =>
  Array(Math.ceil(array.length / columns))
    .fill('')
    .reduce((acc, cur, index) => {
      return [...acc, [...array].splice(index * columns, columns)];
    }, []);

// randomise an array
const randomise = (array) => {
  array
    .map((x) => [Math.random(), x])
    .sort(([a], [b]) => a - b)
    .map(([_, x]) => x);
};

// return an array consisting the full alphabet
const fullAlphabetArray = () => {
  const alphabet = Array.from(Array(26))
    .map((e, i) => i + 65)
    .map((x) => String.fromCharCode(x));

  return alphabet;
};

// return the total sum of a given array
const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

// create an array of numbers between min and max (edges included)
const range = (min, max) =>
  Array.from({ length: max - min + 1 }, (_, i) => min + i);

// pick a random number between min and max (edges included)
const random = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

const randomArrayToMatrix = () => {
  const matrixAttr = Math.random() < 0.5 ? [4, 2] : [9, 3];

  return arrayToMatrix(
    Array.from({ length: matrixAttr[0] - 1 + 1 }, (_, i) => 1 + i),
    matrixAttr[1]
  );
};

// Given an array of numbers and a max...
// Pick a random sum (< max) from the set of all available sums in arr
const randomSumIn = (arr, max) => {
  const sets = [[]];
  const sums = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, len = sets.length; j < len; j++) {
      const candidateSet = sets[j].concat(arr[i]);
      const candidateSum = sum(candidateSet);
      if (candidateSum <= max) {
        sets.push(candidateSet);
        sums.push(candidateSum);
      }
    }
  }
  return sums[random(0, sums.length - 1)];
};

export {
  randomSumIn,
  arrayToMatrix,
  randomise,
  fullAlphabetArray,
  sum,
  range,
  random,
  randomArrayToMatrix,
};