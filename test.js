const express = require('express')
const app = express()
const PORT=3000;
app.get("/",()=>{
    res.send("Hello world !")
})
app.listen(3000,console.log("server started !"))