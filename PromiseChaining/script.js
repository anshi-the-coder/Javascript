//  let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Resolve after 2 seconds")
//     }, 2000)
//        resolve("Promise1")
//  })
// p1.then((value)=>{
//     console.log(value)
//    return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//      resolve("Promise 2")
//      },2000)  
//     })
//     return p2
// }).then((value)=>{
//         //console.log(value)
//     console.log("We are done")
//     return 2
// }).then((value)=>{
//     console.log("Now we are definetely done")
// })

const loadScript =(src)=>{
    return new Promise((resolve,reject )=> {
        let script = document.createElement("script")
            script.type = "text/javascript"
            script.src = src
            document.body.appendChild(script)
            script.onload = ()=>{
                resolve(1)
                     script.onerror = ()=>{
                        reject(0)
               }
        }
   })

}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" )
p1.then((value)=>{
    console.log(value)
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" )

}).then((value)=>{
    console.log("Second script ready")
}).catch((error)=> {
    console.log("we are sorry but we are having problems loading this script ")
})
