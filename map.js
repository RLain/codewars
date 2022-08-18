
/////______BASIC USAGE OF .map():_____ /////

//1️⃣ Concatenating information 

const surnames = ['Ackerman', 'Barnard', 'Chasi', 'Delfino', 'Earling']


/** Adds the title of "Miss" to each surname 
 * @returns {array} An array with the title added to each element e.g. 'Miss Ackerman'
 */
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


//2️⃣ Applying mathemetics

const numbers = [1, 2, 3, 5, 8, 13]

/** Multiples each element within the array by 2.
 * @returns {array} An array with initial values doubled
 */

 const multiplyValues = numbers.map(number => number * 2)
 
 console.log(multiplyValues);
 /* Output
[ 2, 4, 6, 10, 16, 26 ]
 */



//3️⃣ Updating objects


const users = [
    {
        name: "Bruce",
        surname: "Wayne",
        id: "82508d38-0a8d-40a0-b059-f5efa720fbe3",
        favourite_hobby: "martial_arts"
    },
    {
        name: "Gandalf",
        surname: "the White",
        id: "fafac5c9-d6d7-4edb-93b5-4687f56abbe3",
        favourite_hobby: "horseback_riding"
    },
    {
        name: "Harry",
        surname: "Potter",
        id: "6a40d60a-0061-4200-a7e8-4a0e8e97bdbe",
        favourite_hobby: "beating_voldemort"
    }
]

const addColourToUsers = users.map( user => {
    return {
        ...user,
        favourite_colour: 'yellow'
    }
})
console.log(addColourToUsers)


//💡 Tip: This can also be achieved using the forEach function. The key difference between .map() and .forEach() is that the former
// doesn't mutate the array. The latter does. Note how we console.log the array's name 'users'.
users.forEach(user => { user.favourite_color = "red" })
console.log(users)


//___________________________________________________

/////______MORE ADVANCED USAGE OF .map()_____ /////




