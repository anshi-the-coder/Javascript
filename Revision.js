let a =[2,1,5,3,4]
let arr1=a.filter((value)=>{
return value%2==0
})
console.log(arr1)

let arr2 = a.map((value,index)=>{
    return value*index
})
console.log(arr2)

let arr=a.reduce((h1,h2)=>{
    return h1+h2
})
console.log(arr)