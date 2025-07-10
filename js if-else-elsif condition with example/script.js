let btn = document.querySelector("#btn");
let ageInput = document.querySelector(".age");
let result = document.querySelector(".result");

document.addEventListener("click", function() {

    // console.log(ageInput);
    // console.log(ageInput.value);
    console.log(ageInput.value);
    
    if (ageInput.value >= 18) {
        result.innerHTML = "You are eligible to vote.";
    } 
    else if (ageInput.value < 18 && ageInput.value > 0) {
        result.innerHTML = "You are not eligible to vote.";
    }  
     else {
        result.innerHTML = "Please enter a valid age.";
    }
    
});