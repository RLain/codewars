/*📚 Additional Reading
 * https://www.w3schools.com/jsref/jsref_replace.asp
 * https://stackoverflow.com/questions/27916055/whats-the-meaning-of-gi-in-a-regex
 */


const string = "This website is for losers LOL!"

/** Removes all vowels from a string
 * @param {string} The comment being updated
 * @returns {string} The string with the vowels removed
 */
const disemvowel = (string) => {
    const removeVowels = string.replace(/a|e|i|o|u/gi, ""); //Find the vowels and replace will nothing
    return removeVowels;
  }

  const removeVowels = disemvowel(string);
  console.log('removeVowels:', removeVowels);
