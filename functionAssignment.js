// function printName(name){
//     console.log(name)
// }

// const printName=(name)=>{   //arrow function
//     console.log(name)
// }                

// //yaha pe humne variable hi nahi, function(printName) pass kara diya hai 
// function temp(printName){//printName pass karaya hai as a parameter
//     let name="Anshika"
//     printName(name)//uppar(parameter) se jo function aya hai usko execute kardiya hai 
// }

// temp(printName)// yaha pe main printName naam ka function pass kar rahi hu
// printName("Anshika")//yaha pe maine directly "Anshika" hi pass kara diya hai

const printAge =(age)=>{
   console.log(age)
}

// function temp1(printAge){
//     let age = 21
//     printAge(age)
// }
// temp1(printAge)

let ages=[20,21,12,3,45]
for(let i=0;i<ages.length;i++){
    printAge(ages[i])
}