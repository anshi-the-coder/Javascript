let a = [3,2,1,34,5,7]
for(let i =0;i<a.length;i++){
console.log(a[i])
}

a.forEach((element)=>{
console.log(element*element)
})

// Array.From

let name="Anshika"
let arr= Array.from(name)
console.log(arr)