const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    console.log(req.url)

    res.setHeader("Content-Type", "text/html")
    let path = "./routes/"
    switch(req.url){
        case "/":
            path += "index.html";
            break;
        case "/about":
            path += "about.html";
            break;
        case "/contact":
            path += "contact.html";
            break;
        default :
            path+="404.html";
            break;

    }

    fs.readFile(path, (err, data) =>{
        if (err){
            console.log(err)
        } else {
            res.write(data)
            res.end()
        }
    })

    

})

server.listen(8080, 'localhost', () =>{
    console.log("The server is listening on localhost port 8080")
})