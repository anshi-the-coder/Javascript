let words=["My", "name", "is", "Anshika", "."]
//My name is Anshika.
let sentence= ""
for(let i=0;i<words.length;i++){
    sentence=sentence.concat(words[i]+" ");
}
console.log(sentence.slice(0,sentence.length-1))