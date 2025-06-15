const http = require('http');
const hostname ='127.0.0.1'
const port = 3000;
const server = http.createServer((request, response)=>{
    if (request.url === '/') {
        response.statusCode = 200;
        response.setHeader('Content-Type','text/plain');
        response.end("Hello LOki")
    }else if (request.url === '/icetea') {
        response.statusCode = 200;
        response.setHeader('Content-Type','text/plain');
        response.end("Hello LOki, its really hot")
    }else{
        response.statusCode = 404;
        response.setHeader('Content-Type','text/plain');
        response.end("Bro , Thats not a url ")
    }
})
server.listen(port,hostname,()=>{
    console.log(`Server sunn raha hai http://${hostname}:${port}`);
    
})