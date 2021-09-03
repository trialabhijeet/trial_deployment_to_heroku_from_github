require("dotenv").config()
const express = require("express");

const app = express()
app.set("view engine","ejs")

app.get("/",function (req,res) {
    res.render("index",{Inv:process.env.IMP,con:process.env.COUNTRY})
})


app.listen(process.env.PORT || 3000,function () {
    console.log("Server Started");
})