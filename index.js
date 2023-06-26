// console.log("Hello World");
// console.log("Hello World1");
// console.log(200/2);
// console.log(200/1);


//const http = require("http")
// import http from "http"
//const xyz = require("./features")
//import xyz from "./features.js";
// import path from "path";

// import { generateLovePercent } from "./features.js";

// import fs from 'fs'
// const home = fs.readFile("./index.html",(err,home)=>{
//     console.log("File read");
// })
//  console.log(generateLovePercent());
// console.log(path.extname("/home/random/index.html"));
// const server = http.createServer((req,res)=>{
//    if(req.url === "/about"){
//     res.end(`<h1>About page is ${generateLovePercent()}</h1>`);
//    } else if(req.url === "/"){
//     res.end("<h1>home page</h1>");
//    } else {
//     res.end("<h1>page not</h1>");
//    }
// });

// server.listen(5000,()=>{
//     console.log("server run")
// })

import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(path.resolve(),"public")));

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    // res.json({
    //     "success":true,
    //     "pro":[]
    // }); 
    // res.status(400).send("marzi meri");
    res.render("index.ejs" , {name:"Singh"});
});
app.post("/",(req,res)=>{
    // res.json({
    //     "success":true,
    //     "pro":[]
    // }); 
    // res.status(400).send("marzi meri");
    console.log(req.body);
});

app.listen(5000,()=>{
console.log("working");
});