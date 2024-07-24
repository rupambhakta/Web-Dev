import fs from "fs/promises"
import fsn from "fs"
import path from "path";

const basepath = "D:\\programming\\Web Development\\Harry\\video93 Exercise 15 - Solution & Shoutouts"

let files = await fs.readdir(basepath)

for (const item of files) {
    let ext = item.split(".")[item.split(".").length - 1]
    console.log(ext)

    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        if (fsn.existsSync(path.join(basepath, ext))) {
            //Move the file to this directory if its not a js ot json file
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        } else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }
}