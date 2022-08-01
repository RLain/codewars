

const digitalRoot = (n) => {
    if (n < 10) return n; //Checks if the number is less than 10
    console.log('n',n);
   
   return digitalRoot(
     n // The value entered into the function
     .toString() //Converts n into a string e.g. '16'
     .split('') //Splits the string into an array of substrings and returns the array e.g. ['1', '6']
     .reduce((previousValue, currentValue) => { return previousValue + +currentValue; },0)); //returns the sum of all the elements in the array = 1 + 7;
 }

 const num = 256;
 const calculateDigRoot = digitalRoot(num)
 console.log('calculateDigRoot: ', calculateDigRoot);


//  function digitalRoot2(n) {
//     return (n - 1) % 9 + 1;
//   }


//   function digitalRoot3(n){
//     let result = 0;
//     String(n).split('').map(num => {
//       result += Number(num);
//     });
//     return result > 10 ? digital_root(result) : result;
//   }