


/** Returns ALL elements that meet the .filter() requirements
 * @returns {array} An array of elements that meets the filter
 */


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
    },
    {
        name: "Aragorn",
        surname: "Elessar",
        id: "0b383b5e-5a69-4a50-895f-556611c503aa",
        favourite_hobby: "horseback_riding"
    }
]

const findHorseFans = users.filter((user) => user.favourite_hobby === 'horseback_riding')
console.log(findHorseFans)

/* Output
[
  {
    name: 'Gandalf',
    surname: 'the White',
    id: 'fafac5c9-d6d7-4edb-93b5-4687f56abbe3',
    favourite_hobby: 'horseback_riding'
  },
  {
    name: 'Aragorn',
    surname: 'Elessar',
    id: '0b383b5e-5a69-4a50-895f-556611c503aa',
    favourite_hobby: 'horseback_riding'
  }
]
*/

//💡 Tip: This is different to .find() which only returns the first element it finds that meets the .find() criteria e.g.

const findFirstHorseFan = users.find((user) => user.favourite_hobby === 'horseback_riding')
console.log(findFirstHorseFan)

/* Output: Note this is not within an array!
{
  name: 'Gandalf',
  surname: 'the White',
  id: 'fafac5c9-d6d7-4edb-93b5-4687f56abbe3',
  favourite_hobby: 'horseback_riding'
}
*/