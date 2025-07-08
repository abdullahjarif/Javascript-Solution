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
    