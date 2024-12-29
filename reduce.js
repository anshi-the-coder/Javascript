// let arr = [1,2,3,4,3,2,5]
// let number= arr.reduce((h1,h2)=>{
//  return h1+h2
// })
// console.log(number)

let words=["This", "is", "Anshika", "."]

let number = words.reduce((h1,h2)=>{
    return h1+" "+h2
})

console.log(number.slice(0,number.length-2)+'.')