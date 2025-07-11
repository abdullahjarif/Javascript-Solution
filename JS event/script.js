let btn = document.querySelector("#btn"); // querySelector by id

// querySelector by class
// let btn = document.querySelector(".btn");
// console.log(btn);

// btn.addEventListener("click",myFunction); // addEventListener is a keyword

// function myFunction(){
//     document.getElementById("demo").innerHTML = "JavaScript First Class Event";
// }


// code optimize
btn.addEventListener("click", function(){ // can function call directly
// btn.addEventListener("mouseenter", function(){ 
    console.log("Button Clicked"); // log to console
    

    document.getElementById("demo").innerHTML = "JavaScript First Class Event";

}); // addEventListener is a keyword
