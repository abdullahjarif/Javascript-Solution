// JavaScript Object Constructor
// using this keyword
function person(fname, lname, age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.nationality = "Bangladeshi";
    this.fullName = function(){
        return this.fname + " " +this.lname + " " + this.age +" years old"; 
    }
}

const y = new person("Abdullah", "Jarif", 30);
console.log(y);
// Displaying the full name in the HTML element with id "details"
document.getElementById("details").innerHTML = y.fullName();

