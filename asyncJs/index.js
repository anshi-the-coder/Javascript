let arr = [2,3,1,4,5]
let sortedArray=arr.sort((a,b)=>b-a)
console.log(sortedArray)

let evenArray = arr.filter((value)=>value%2==0)
console.log(evenArray)

let oddArray = arr.filter((value)=>value%2!=0)
console.log(oddArray)

let sortedSquareArray= arr.sort((a,b)=>a-b).map((value)=>value*value)
console.log(sortedSquareArray)

let sumOfArray= arr.reduce((a,b)=>a+b,5) // second parameter of the reduce fun. is the intial value of a.
console.log(sumOfArray)