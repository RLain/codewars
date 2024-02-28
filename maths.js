/*Given the equation: 2(x^2) + 3y = 200
Find all pairs from the following numbers that can satisfy the equation for both values of x and y:
200, 21, -10, 11, 200, -56, 0, 10, -8, 24, -7, 7, 99, 34, 5, 50, 42, 56, 1, -1, 66, 1000, -4, 90
*/

// 💡 When doing an equation, move the formula into it's own function with the x & y inputs as params

const numbers = [
  200, 21, -10, 11, 200, -56, 0, 10, -8, 24, -7, 7, 99, 34, 5, 50, 42, 56, 1,
  -1, 66, 1000, -4, 90,
];

const equation = (x, y) => {
  return 2 * (x * x) + 3 * y;
};

const calculation = (numbersArray) => {
  let output = [];

  for (let i = 0; i < numbersArray.length; i++) {
    for (let j = 0; j < numbersArray.length; j++) {
      if (i !== j) {
        let x = numbersArray[i];
        let y = numbersArray[j];
        let result = equation(x, y);
        if (result === 200) {
          output.push([x, y]);
        }
      }
    }
  }
  return output;
};

console.log(calculation(numbers));
