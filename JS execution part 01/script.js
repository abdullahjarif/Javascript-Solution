// // function hello(){
// //     console.log("Hello world!"); 
// // }
// // hello()

// // global execution context --> without function()
// var fullname = "Kazi Abdullah Jarif";
// function getFullname(){
//     console.log(this.fullname);}
// // getFullname() --> function invoked
// console.log(getFullname());



// part 03
console.log("Hello this is message from script.js");

var firstName = "Jarif"
function sayHello(){
    console.log("Hello" + " " + firstName);

    var lastName = "Abdullah"

    var users = {
        firstName: "Jarif",
        lastName: "Abdullah",
        country: "Bangladesh"
    };

    function getFullname(){
        console.log(users.firstName + " " + users.lastName);
        console.log(firstName + " " + lastName);   
    }
    getFullname();
    console.log("nice to meet you" + " " + users.firstName);
    
    
}

sayHello();
console.log("Wow! What a function");





