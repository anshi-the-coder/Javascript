let ages=[15,18,25,30,45,50,55]
for(let age of ages){
  if(age<18){
    console.log("child")
  }else if(age>=18 && age<30){
    console.log("young")
  }else if(age>=30 && age<50){
    console.log("Mature")
  }else{
    console.log("old")
  } 
}

