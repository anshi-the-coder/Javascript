// change the card title to red

// let ctitle = document.getElementById("firstcardtitle")
// ctitle.style.color="yellow"

let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color="blue"
ctitles[1].style.color="red"
ctitles[2].style.color="green"
console.log(ctitles)

document.querySelector(".this").style.color="cyan"
document.querySelector(".this").style.background="red"

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log(document.getElementsByName("search"))