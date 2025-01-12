// let arr= [45,23,21]
// let a= arr.map((value,index,array)=>{
//     console.log(value,index,array)
//     return value+index
// })
// //console.log(a)

// //Array filter 
// let arr2 =[45,23,21,0,3,5]
// let a2= arr2.filter((value)=>{
//     return value<10
// })
// //console.log(a2)

// Array reduce method
let arr3 = [1,2,3,5,2,1]
//let newarr3= arr3.reduce((h1,h2)=>{
    const reduce_fun = (h1,h2)=>{
        return h1+h2
    }
let newarr3 = arr3.reduce(reduce_fun)
console.log(newarr3)


