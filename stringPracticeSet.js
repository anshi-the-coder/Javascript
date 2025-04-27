const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox2';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word)? 'is': 'is not'} in the sentence`)

// problem 3
console.log(word.toLowerCase())
console.log(word.toUpperCase())

// problem 4
let str2 = "Please give Rs 1000"
let amount = Number.parseInt(str2.slice(15))
console.log(amount)
console.log(typeof amount)

// //  problem 5
let friend= "Deepika"   
console.log(friend) 

