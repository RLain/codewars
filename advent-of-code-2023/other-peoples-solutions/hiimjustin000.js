// https://github.com/hiimjustin000/advent-of-code/blob/master/2023/day1/part2.js
import { rawData } from '../raw-data.js';

const input = rawData.trim().split('\n');

const numbersMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

let result = 0;
for (const line of input) {
  const numbers = [];
  for (const [key, value] of Object.entries(numbersMap)) {
    // Example: 425nine
    numbers.push(
      ...line.matchAll(new RegExp(key, 'g')),
      ...line.matchAll(new RegExp(value, 'g'))
    );
  }
  console.log('log 1:', numbers);
  // Example output
  //   log 1: [
  //     [ '2', index: 1, input: '425nine', groups: undefined ],
  //     [ '4', index: 0, input: '425nine', groups: undefined ],
  //     [ '5', index: 2, input: '425nine', groups: undefined ],
  //     [ 'nine', index: 3, input: '425nine', groups: undefined ]
  //   ]
  numbers.sort((a, b) => a.index - b.index);
  console.log('log 2:', numbers);
  // Example output
  //   log 2: [
  //     [ '4', index: 0, input: '425nine', groups: undefined ],
  //     [ '2', index: 1, input: '425nine', groups: undefined ],
  //     [ '5', index: 2, input: '425nine', groups: undefined ],
  //     [ 'nine', index: 3, input: '425nine', groups: undefined ]
  //   ]

  result += parseInt(
    `${
      numbers[0][0].length > 1
        ? numbersMap[numbers[0][0]]
        : parseInt(numbers[0][0])
    }${
      numbers[numbers.length - 1][0].length > 1
        ? numbersMap[numbers[numbers.length - 1][0]]
        : parseInt(numbers[numbers.length - 1][0])
    }`
  );
}

console.log(result);
