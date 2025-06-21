// Premative value
// string 
// int
// bool

// Reference value
// array
// object

let myName = "Jarif" // premative value 
let myName2 = "Jarif"
console.log(myName);
console.log(myName == myName2);

let array1 = [1,2,3,4,5] // reference value 
let array2 = [1,2,3,4,5]
console.log(array1,array2);
console.log(array1 == array2); // reference value chech refer not value 

let array3 = [1,2,3,4,5]
// let array4 = array3
let array4 = [...array3] // spread array operator

array4.push(6,8,9)
console.log(array3)
console.log(array4)
console.log(array3 == array4) // both are reference different + value also different
