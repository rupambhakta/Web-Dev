for (let i = 0; i <= 100 ; i++) {
    console.log(i)   
}
let obj={
    name:"Rupam",
    role:"Programmer",
    company:"Rupam AI"
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element);
    }
}
for (const c of "Rupam") {
    console.log(c);
}
let i=1;
while (i<6) {
    console.log(i);
    i++;
    
}