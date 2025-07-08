// student Object Declaration
const student = {
    fname: "Jarif",
    lname: "Abdullah",
    id: "22-46386-1",
    dob: "2000-01-01",
    address: "Dhaka",
    phone: "01700000000",
    age: 25,
    fullname: function(){
        return (this.fname + " " + this.lname).toUpperCase(); // fullname not a variable, it's a function
    }
};

    // student.age = 26; // for update age
    // student.email = "jarif@example.com";
    const x = student; // for copy object with declare x variable
    x.name = "Ariful"; // for update name
    console.log(x);

    console.log("His name is " + x.fullname() + " and he is " + x.age + " years old.");

    // delete object 
    delete x.phone;
    delete x.dob;
    
    // console.log(student);
    // student(); // for call object as function show error
    

    // create a new object
    const person = new Object();
    person.name = "Nadiya";
    person.id = "22-46386-2";
    person.age = 25;
    person.dob = "2000-01-01";
    person.email = "nadiya@example.com";
    // console.log(person);

    const y = person; // for copy object with declare y variable
    y.name = "Noor Nadiya"; // for update name
    console.log(y);
    delete y.id;

    const car = {
        type: "Sedan",
        model: "Toyota",
        year: 2020,
        ownerDetails: function() {
            console.log("Owner Details Here");
        },
        // nested object
        owner: {
            name: "John Doe",
            age: 45,
            address: "123 Main St"
        },
    };

    console.log(car.type); 
    console.log(car.model);
    console.log(car.year);
    car.ownerDetails(); // calling the ownerDetails function of car object

    // Accessing nested object property
    console.log(car.owner); 
    console.log(car.owner.name); 
    console.log(car.owner.age);
    console.log(car.owner.address);


    // document.getElementById("demo").innerHTML = y;
