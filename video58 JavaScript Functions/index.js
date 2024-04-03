function nice(name) {
    console.log("Hay "+name+" your are nice");
    console.log("Hay "+name+" your are good");
    console.log("Hay "+name+" your are very good");
    console.log("Hay "+name+" your are so so good");
}
nice("Rupam");
nice("Harry");

function sum(a,b,c=3) {
    return a+b+c;
}
result1 = sum(3,5);
result2 = sum(32,5);
result3 = sum(3,15,14);
console.log("The result1 is ",result1)
console.log("The result1 is ",result2)
console.log("The result1 is ",result3)

const func1 = (x)=>{
    console.log("I am a arrow function",x);
}
func1(34);