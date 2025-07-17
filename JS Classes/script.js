class car{
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }   
}

let car1 = new car("Toyota", "Corolla", 2020);
let car2 = new car("Honda", "Civic", 2021);
console.log(car1);
console.log(car2);

console.log(car1.model);
console.log(car2.model);