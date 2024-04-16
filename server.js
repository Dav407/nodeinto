const http = require("http")
const port = 9999
const fs = require("fs")


const homepage = fs.readFileSync("./pages/home.html")
const productpage = fs.readFileSync("./pages/product.html")
const servicepage = fs.readFileSync("./pages/services.html")
const errorpage = fs.readFileSync("./pages/error.html")
const contactpage = fs.readFileSync("./pages/contact.html")

const server = http.createServer((req, res) => {
    let path = req.url
    if (path === "/" || path === "/home"){
        res.end(homepage)
    } else if ( path === "/product"){
        res.end(productpage)
    } else if ( path === "/services"){
        res.end(servicepage)
    } else if ( path === "/contact"){
        res.end(contactpage)
    } else {
        res.end(errorpage)
    }
})

server.listen(port, () => {
    console.log("server starting")
})