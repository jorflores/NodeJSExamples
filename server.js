const http = require("http");  // Importando libreria de node para http

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(function(req,res){

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World!");
});

server.listen(port,hostname,function(){
    console.log("Server running...!!");
})