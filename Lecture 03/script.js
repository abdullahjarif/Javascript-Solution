// block scope
let b = 20
{
    // block scope
    let a = 10
    var c = 30 // because of global scope var
    console.log(a);
    
}

console.log(b);
console.log(c);

// var global variable or global scop
// let, const => block scope 

// functional scope
function scopeFun(){
    let d = 50
    let e = 10
    let sumFun = d+e
    console.log(sumFun);
}
scopeFun() //50
// console.log(sumFun); // Reference Error

// global scope
let p = 20
{
    p++ // p = p+1
    --p // p = p+1     
}
console.log(p); // 21 20


// lexical scope // check and result parent wise 
function lexFunc(){
    let lexVal = 20
    function lexInc(){
        lexVal += 10;
        function lexResult(){
            console.log(lexVal);
        }
        lexResult(); // 30
    }
    lexInc(); // 30
}
lexFunc() // 30

const person1 = {
    name: "jarif"   
}
console.log(name); // can not access cause console is out of the scope









