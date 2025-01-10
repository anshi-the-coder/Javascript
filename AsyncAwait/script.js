async function anshika (){
let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("27 deg")
        }, 2000)
})

let bangaloreWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("21 deg")
        }, 6000)
    })
    // delhiWeather.then(alert)
    // bangloreWeather.then(alert)
    console.log("Fetching Delhi weather please  wait...")
    let delhiW = await delhiWeather
    console.log("Fetched delhi weather is" + delhiW)
    console.log("Fetching bangalore weather please  wait...")
    let bangaloreW = await bangaloreWeather
    console.log("Fetched Bangalore weather is" + bangaloreW)
    return[delhiW, bangaloreW]
    }

const vanshika = async()=>{
    console.log("Hey I am vanshika and I am  waiting")
}

const main1 = async() =>{
        console.log("Welcome to weather control room")
        let a = await anshika() 
        let b = await vanshika() 
}
main1()

