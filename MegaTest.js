//switch case 4 
//addition, subtraction, multiplication , division
//make four function for above task
const add=(a,b)=>{
    return a+b
}
const sub=(a,b)=>{
    return a-b
}
const mul=(a,b)=>{
    return a*b
}
const div=(a,b)=>{
    return a/b;
}

function calculator(task,c,d){
    switch(task){
        case "add":
            console.log(add(c,d));
            break;
        case "sub":
            console.log(sub(c,d));
            break;
        case "div":
            console.log(div(c,d));
            break;
        case "mul":
            console.log(mul(c,d));
            break;
        default:
            console.log(`The task ${task} is not defined.`)
        
    }
}
let g=4
let h=2

calculator("add",g,h)
calculator("sub",g,h)
calculator("mul",g,h)
calculator("div",g,h)
calculator("addition",g,h)