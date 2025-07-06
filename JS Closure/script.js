function outerFunction() {
    let counter = 0;
    return function innerFunction() {
        counter = counter + 1;
        console.log("Counter value: " + counter);
    } 
}
const incrementCounter = outerFunction();

incrementCounter(); // Counter value: 1

incrementCounter(); // Counter value: 2

incrementCounter(); // Counter value: 3

incrementCounter(); // Counter value: 4
           
