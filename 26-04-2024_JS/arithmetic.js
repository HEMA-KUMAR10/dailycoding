var a = 10;
var b = 5;
function addition(x,y){
    let add = x+y;
    console.log("Additon: " + add);
}
function subtraction(x,y){
    let sub = x-y;
    console.log("Subtraction: " + sub);
}

function multiplication(x,y){
    let mul = x*y;
    console.log("Multiplication: " + mul);
}

function division(x,y){
    let div = x/y;
    console.log("Division: " + div);
}

console.log("The entered numbers are " + a +" and " + b);
addition(a,b);
subtraction(a,b);
multiplication(a,b);
division(a,b);