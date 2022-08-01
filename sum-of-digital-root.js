/*📚 Additional Reading
 * https://www.omnicalculator.com/math/digital-root
 * https://brilliant.org/wiki/digital-root/
 */
const num = 4567;

/** Calculates the digital root of a number using javascript functions
 * @param {integer} The number being used to calculatre
 * @returns {integer} the digital root of the number
 */
const digitalRoot = (n) => {
  if (n < 10) return n; //Checks if the number is less than 10
  return digitalRoot(
    n // The value entered into the function
      .toString() //Converts n into a string e.g. '16'
      .split("") //Splits the string into an array of substrings and returns the array e.g. ['1', '6']
      .reduce((previousValue, currentValue) => {
        return previousValue + +currentValue;
      }, 0)
  ); //returns the sum of all the elements in the array = 1 + 7;
};

const calculateDigRoot = digitalRoot(num);
console.log("calculateDigRoot: ", calculateDigRoot);

/** Calculates the digital root of a number using modulus math
 * @param {integer} The number being used to calculatre
 * @returns {integer} the digital root of the number
 */
const digitalRoot2 = (n) => {
  return ((n - 1) % 9) + 1; // 4567-1 = 4566 -> 4566 % 9 = 3 -> 3 +1 = 4
};

const calculateDigRoot2 = digitalRoot2(num);
console.log("calculateDigRoot2: ", calculateDigRoot2);

/** Calculates the digital root of a number using array functions
 * @param {integer} The number being used to calculatre
 * @returns {integer} the digital root of the number
 */
const digitalRoot3 = (n) => {
  let result = 0;
  String(n) //Allows manipulation and formatting of text strings and determination and location of substrings within strings.
    .split("") //Splits the string into an array of substrings and returns the array e.g. ['1', '6']
    .map((num) => { //Map function that takes in the number and adds it to the result looping through the process. E.g. 0 + 1 = 1 -> 1 + 6 = 7 etc.
      result += Number(num);
    });
  return result >= 10 ? digitalRoot3(result) : result; //Tenerary operator - if the result over or equal to 10 to run the function else return the number.
};

const calculateDigRoot3 = digitalRoot3(num);
console.log("calculateDigRoot3: ", calculateDigRoot3);