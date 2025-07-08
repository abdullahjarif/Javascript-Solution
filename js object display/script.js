const person = {
    firstName: "John", 
    lastName: "Doe",
    age: 30,
    address: "New York",
    occupation: "Full stack developer"
};

// create an array
const details = Object.values(person);

document.getElementById("demo").innerHTML = details.join(", ");

function displayValues() {
  const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue",
    ownerDetails: function () {
      return {
        ownerName: "John",
        age: 30,
        city: "New York"
      };
    }
  };

  // Convert function to string or execute it to access inner object

// ...car syntax is called the spread operator in JavaScript.
  const values = Object.values({...car,
    ownerDetails: JSON.stringify(car.ownerDetails())
  });

  document.getElementById("function").innerHTML = values.join(", ");
}

// Call the function
displayValues();
