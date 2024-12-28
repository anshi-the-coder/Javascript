const add= (a,b)=>{
    return a+b
}
const sub=(a,b)=>{
   return a-b
}
const mul=(a,b)=>{
    return a*b
}
const div=(a,b)=>{
    return a/b
}


const calculator=(c,d,task)=>{
    switch(task){
        case "add":
            return add(c,d)
        case "sub":
            return sub(c,d)
        case "mul":
            return mul(c,d)
        case "div":
            return div(c,d)
        default:
            return `The task ${task} is not defined.`

    }
}
let c=10
let d=5
let value=calculator(c,d,"sub")
console.log(value)
value=calculator(c,d,"mul")
console.log(value)
value=calculator(c,d,"div")
console.log(value)