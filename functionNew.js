const hello= ()=>{
    console.log("hey how are you . I am fine yaar")
    return "hi"
}
function onePlusAvg(x,y){
    console.log("Done")
    return 1+(x+y)/2
}
    let a =1;
let b=2;
let c=3;
let v= hello();
console.log(v)
console.log("one plus Average of a and b is", onePlusAvg (a,b))
console.log("one plus Average of b and c is", onePlusAvg(b,c))
console.log("one plus Average of a and c is", onePlusAvg(a,c))
