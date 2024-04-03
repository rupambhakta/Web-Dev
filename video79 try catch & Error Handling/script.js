let a = prompt("Enter first number")

let b = prompt("Enter second number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not a number")
}

let sum = parseInt(a) + parseInt(b)

console.log('The sun is ', sum);

try {
    console.log('The sun is ', sum * x);
} catch (error) {
    console.log('Error:aa gya');
}
finally{
    console.log('Files are being closed and db connection is being closed');
}