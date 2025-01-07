document.write("Hello")
 
const sum= (a,b,c) =>{
  console.log("Yes I am runing" +(a+b+c))
  a+b+c
} 
setTimeout(sum,1000,1,2,7)
// setInterval(function(){
//   alert("setInterval")
// },3000)
// let a = setTimeout(function(){
//   alert("I am inside of setTimeout")  
// },5000)  // 2000 is a milisecond
// let b = prompt("Do you want to run settimeout ?")
// if("n"==b){
//     clearTimeout(a)
// }                 
// clearTimeout(a)
// console.log(a)
