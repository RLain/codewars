const word1 = "nameless";
const word2 = "salesman";

const checkIfAnagram = (word1, word2) => {
    if (word1.length === word2.length){

        const sortWord1 = word1.split('').sort().join('')
        const sortWord2 = word2.split('').sort().join('')

        console.log(sortWord1);
        console.log(sortWord2);

        sortWord1 === sortWord2 ? console.log("Yay! Anagram") : console.log("Not an anagram hey")

    }
    else {
        console.log("Not an anagram")
    }
}

checkIfAnagram(word1, word2);