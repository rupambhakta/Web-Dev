console.log('Files: fs and path Modules');
const fs = require("fs")
// console.log(fs);

console.log('Starting');
// fs.writeFileSync("rupam.txt","Rupam is a good boy.")
fs.writeFile("rupam2.txt","Rupam is a good boy!",()=>{
    console.log("Done");
    fs.readFile("rupam2.txt",(error,data)=>{
        console.log(error,data.toString());
    })
    
})
console.log('Ending');

