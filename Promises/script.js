let promise = new Promise(function(resolve,reject){
    alert("Hello")
    resolve(56)
})
console.log("Hello One")
setTimeout(function(){
    console.log("Hello Two in 2 seconds")
}, 2000)
console.log("My name is "  +  "Hello Three")
console.log(promise)

// fetch google.com homepage  ==>console.log("google.com homepage done")
// fetch data from the data API
// fetch picture from the server
// print the downloading
// rest of the script 
