/* 📝 Context:
Even numbers when divided by 2 have a remainder of 0
Odd numbers have a remainder > 0
*/

const number = -2131312311;

/** Determines whether a positive or negative number is even or odd via modulus logic within simple conditional logic
 * @param {integer} The number being checked
 * @returns {string} whether the number is even or odd
 */
const evenOrOdd = (number) => {
  const modulus = number % 2;
  if (number > 0) {
    if (modulus > 0) {
      return "Odd";
    } else {
      return "Even";
    }
  } else {
    if (modulus <= -1) {
      return "Odd";
    } else {
      return "Even";
    }
  }
};

const checkNumbers = evenOrOdd(number);
console.log(checkNumbers);



/** Determines whether a positive or negative number is even or odd via simplified modulus logic using ternary operator
 * @param {integer} The number being checked
 * @returns {string} whether the number is even or odd
 */
const evenOrOdd2 = (number) => {
    return number % 2 === 0 ? 'Even' : 'Odd'
}

const checkNumbers2 = evenOrOdd2(number);
console.log(checkNumbers2);

