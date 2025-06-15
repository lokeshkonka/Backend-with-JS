import  express from 'express'

const app = express()
const port = 3000;
app.get( '/',(request,response)=>{
    response.send(`Hello from loki using postman, at port${port}`)
})
app.get( '/icetea',(request,response)=>{
    response.send(`Hello from loki using postman,  got ice-Tea at  port:${port}`)
})
app.listen(port,()=>{
    console.log("Express is Listening, bro");
})