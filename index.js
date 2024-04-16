
const fs = require("fs")

const idris = fs.readFileSync("./files/idris.txt", "utf-8")
console.log(idris)


const dav = fs.readFileSync("./files/dav.txt", "utf-8")
console.log(dav)


const mama = fs.readFileSync("./files/mama.txt", "utf-8")
console.log(mama)

const Speed = "GOOD SPEED"
fs.writeFileSync("./files/speed.txt", Speed)
console.log(Speed)

const Baby = "Baby"
fs.writeFileSync("./files/baby.txt", Baby)
console.log(Baby)


fs.readFile("./files/nonBlocking.txt", "utf-8", (error, data) => {
    if (error){
        console.log(error)
    } else {
    console.log(data)
    }
})

fs.readFile("./files/nonBlockingtwo.txt", "utf-8", (err, data) => {
    if (err){
        console.log(err)
    } else {
    console.log(data)
    }
})
fs.readFile("./files/nonBlockingthree.txt", "utf-8", (err, data) => {
    if (err){
        console.log(err)
    } else {
    console.log(data)
    }
})

