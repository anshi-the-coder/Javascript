// synchronous programming
// let a= prompt("What is your name?");
// let b= prompt("what is your age? ");
// let c= prompt("what is your favorite color?");
// console.log(a+ " is " + b + "years old and has" + c + "favorite color.");

// Asynchronous Programming
// console.log("Start")
// setTimeout(function(){
//     console.log("Hey I am well")
// }, 3000)
// console.log("End")

// Callbacks
function loadScript(src, callback){
    var script = document.createElement("script")
        script.src= src;
        script.onload = function(){
            console.log("Loaded script with SRC:" +src);
            callback(src);
        }
        document.body.appendChild(script)   
}
function hello(src){
    alert('Hello World!' + src);
}
function goodmorning(src){
    alert('goodmorning' + src);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" , hello)