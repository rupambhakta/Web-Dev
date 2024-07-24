import fs from "fs/promises"

let a = await fs.readFile("rupam.txt")
let b = await fs.appendFile("rupam.txt","\n\n\n\nThis is amazing prommice")
console.log(a.toString(),b.toString())