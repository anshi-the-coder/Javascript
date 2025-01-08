function loadScript(src, callback){
    var script = document.createElement("script")
        script.src= src;
        script.onload = function(){
            console.log("Loaded script with SRC:" +src);
            callback(null,src);
        }
        script.onerror = function(){
            console.log("Error loading script with src:" +src)
            callback(new Error("Src got soome error"))
        }
        document.body.appendChild(script)   
        }
    if(error){
        console.log(error)
        return
    }

    alert('Hello World!' + src);

    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" ,function goodmorning(error,src){ 
    if(error){
    console.log(error)
    sendEmergencyMessageToCeo()
    return
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" ,function goodmorning(error,src){ 
               
                 loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" ,function goodmorning(error,src){ 
                    if(error){
                        console.log(error)
                        sendEmergencyMessageToCeo()
                        return
                               loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" ,function goodmorning(error,src){ 
                            })
                        }
                    })
                })
            }
        })    
