const http = require("http");
const path = require("path");
const fs = require ("fs");

http.createServer((req, res) => {
    if(req.url == "/") {
        req.url = "/index.html/"
    }
    const myPath = path.join("../../lecture6", req.url);
    fs.readFile(myPath, (err, data) => {
        if (err) {
            res.writeHead(500, 'text/plain');
            res.end(err);
        } else {
            let type = "";
            switch(path.extname(myPath)) {
                case ".html": 
                    type = "text/html"
                    break;
                case ".js": 
                    type = "text/javascript"
                    break;
                case ".css":
                    type = "text/css"
                    break;
            }
            res.writeHead(200, type);
            res.end(data);
        }
    }) 
}).listen(3000, (err) => {
    if (err) {
        throw err;
    } 

    console.log('you on localhost:3000');
});