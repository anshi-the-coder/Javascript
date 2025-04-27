let arr =[1,2,3,4,5,6,7,8,9,10]
let a1 =arr.filter((value)=> {
    return value%2==0
})
console.log(a1)
let a2 =arr.filter((value)=>{
    return value%2!=0
})
console.log(a2)


let arr1 = ["Cat","Buffelo","Tiger","Elephant","Dog"]
let a3 = arr1.filter((value)=>{
    return value.length>=5
})
console.log(a3)

let arr2=["Anshika","Alok","Rajo","Umesh"]
let a = arr2.map((value)=>{
    return value+" "+"Gangwar"
})
console.log(a)