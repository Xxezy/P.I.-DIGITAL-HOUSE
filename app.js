const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.listen(3333, ()=>{
    console.log("server rodando na porta 3333")
});