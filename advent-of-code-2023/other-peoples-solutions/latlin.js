import { rawData } from '../raw-data.js';

const inputs = rawData.trim().split('\n');

const digits = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
};
const digit_entries = Object.entries(digits);

let sum = 0;

inputs.forEach((line) => {
  let first = false,
    last = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (digits[char]) {
      if (!first) {
        first = char;
      }
      last = char;
    } else if (true) {
      // part 2
      for (const [digit, word] of digit_entries) {
        const sub = line.substr(i, word.length);
        if (sub == word) {
          if (!first) {
            first = digit;
          }
          last = digit;

          break;
        }
      }
    }
  }

  const n = Number(first + last);
  sum += n;

  // console.log(line, first, last, n);
});

console.log(sum);
