let marks_class_12 =[91,82,63,84,false,"Not Present"]
marks_class_12[6] = 89
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) // will be undefined because index 6 does not exist 
console.log("The length of marks_class_12 is",marks_class_12.length)
marks_class_12[6] = 89 // Adding a new value to the array
marks_class_12[0] = 96 // changing the  value of an array
console.log(typeof marks_class_12)

// let numbers=[2,1,3,4,8,9]
// for(let i=0;i<=numbers.length;i++){
// console.log(numbers[i])
// }
