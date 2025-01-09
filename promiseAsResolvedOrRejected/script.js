let p1= new Promise((resolve)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and I am fullfilled")
        resolve(true)
    },5000)
 })
let p2= new Promise((reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
       // console.log("I am a promise and I am rejected")
        reject(new Error("I am an error"))
    },5000)
})
// to get the value
p1.then((value)=>{
    console.log(value)
})
// to catch the error 
// p2.catch((error)=>{
//     console.log("some error occured in p2")
// })
p2.then((value)=>{
   
},(error)=>{
    console.log(error)
})
