const express = require("express")

const app = express()

app.use("/home",(req, res)=>{
    res.send("Home page of server .")

})

app.use("/hello",(req, res)=>{
    res.send("Hello form the server.")

})

app.use("/test",(req, res)=>{
    res.send("Hello From Test... 📡")
})


app.listen(3000, ()=>{
    console.log("server is runnning http://localhost:3000/")
})