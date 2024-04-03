let r = Math.random();

// let a = prompt("Enter a: ");
// let b = prompt("Enter b: ");
let a = 5;
let b = 3;

function rongSum(a, b) {
    console.log(a - b);
}
function rongMul(a, b) {
    console.log(a + b);
}
function rongMai(a, b) {
    console.log(a / b);
}
function rongdiv(a, b) {
    console.log(a ** b);
}

function Sum(a, b) {
    console.log(a + b);
}
function Mul(a, b) {
    console.log(a * b);
}
function Mai(a, b) {
    console.log(a - b);
}
function div(a, b) {
    console.log(a / b);
}

if (r < 0.1) {
    console.log("Faulty result");
    rongSum(a, b);
    rongMai(a, b);
    rongMul(a, b);
    rongdiv(a, b);
} else {
    console.log("True result");
    Sum(a, b);
    Mai(a, b);
    Mul(a, b);
    div(a, b);
}