const loadScript = (src)=>{
    return new Promise((resolve, reject)=>{
    let script = document.createElement("script")
    script.src= src
    script.onload = ()=>{
            resolve(src)
        }
    })
}
let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.css")