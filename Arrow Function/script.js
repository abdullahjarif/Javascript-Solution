// syntex of arrow function
// let arrowFunction = () => {
//     console.log("Hello function");
    
// }



const person = {
    name: "Jarif",
    greet: greetings,
}
function greetings(){
    console.log(`Hello, my name is ${this.name}`); 
}

person.greet();