/** Adds the title of "Miss" to each surname 
 * @returns {array} An array with the title added to each element e.g. 'Miss Ackerman'
 */

const surnames = ['Ackerman', 'Barnard', 'Chasi', 'Delfino', 'Earling']
const addTitle = surnames.map((surname) => "Miss " + surname)
console.log(addTitle);
/* Output
[
  'Miss Ackerman',
  'Miss Barnard',
  'Miss Chasi',
  'Miss Delfino',
  'Miss Earling'
]
*/

/** Adds the title of "Miss" to each surname with simplified syntax. No need to wrap the value in brackets e.g. (surname) vs surname
 * @returns {array} An array with the key formalNames where the title has been added to each element e.g. 'Miss Ackerman'
 */

const addTitleSimplified = surnames.map(surname => "Miss " + surname)
console.log('formalNames', addTitleSimplified);
/* Output
formalNames [
  'Miss Ackerman',
  'Miss Barnard',
  'Miss Chasi',
  'Miss Delfino',
  'Miss Earling'
]
*/




