const express = require ('express');
const http = require ('http');
const dbconnection = require('./Src/Connection/DB')
const routes = require ('./Src/Routes/routes')
const cors = require('cors');
const app=express();
const PORT=8001;

const server=http.createServer(app);
dbconnection();
app.use(express.json());
app.use(cors());

app.use(routes);

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
app.get("/",(req,res)=>{
    res.send("Hello World");
})
