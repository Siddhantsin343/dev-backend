const express = require("express")

const app = express()

// // Lec- 17 
// app.get("/user",(req , res)=>{
//     res.send({name : "siddhant", surname : "singh"})
// })

// app.post("/user",(req, res)=>{
//     console.log("data is saved in DB");
//     res.send("data succesfully added to DB")
// })

// app.delete("/user",(req, res)=>{
//     console.log("data is saved in DB");
//     res.send("data delete to DB")
// })


// //this will match all the HTTP Method API calls to /hello
// app.use("/hello",(req, res)=>{
//     res.send("Hello form the server.")

// })


// Lec 18 middleware & errorHandling
 
app.use("/", (req , res, next)=>{
    res.send("handle / route")
    next()
})
app.use("/user", (req, res, next)=>{
    console.log("handle the route user 1");
    res.send("Response!!!")
    next()
},(req , res)=>{
    console.log("handle the route user 1");
    res.send("2nd Response")
})



app.listen(3000, ()=>{
    console.log("server is runnning http://localhost:3000/")
})