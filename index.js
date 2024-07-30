const express=require("express")
require('dotenv').config()
const app=express()

app.get("/",(request,response)=>{
    response.send("hello world from get request")
})

app.get("/anirban",(request,response)=>{
    response.send("hello world from get Anirban")
})
app.get("/sonam_bajwa",(request,response)=>{
    response.send("hello world from Sonam ❤")
})
app.listen(process.env.PORT,()=>{
    console.log('====================================');
    console.log(`App is running in port ${process.env.PORT}`);
    console.log('====================================');
})