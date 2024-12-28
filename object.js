let anshikaBioData = {
    "name":"Anshika Gangwar",
    "age":
    21,
    "likes":["mango","noodels","pizza"],
    "parent":{
        "mummy":{
            "name":"Raajo",
            "age":43
        },
        "papa":{
            "name":"Umesh",
            "age":41
        }
    }
} // key->value pair.....copy ki name chit

// console.log(anshikaBioData.parent.papa.age)


for(let key in anshikaBioData){
    console.log(key)
}

let ages=[20,12,34]

for(let value of ages ){
    console.log(value)
}
