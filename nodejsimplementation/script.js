// const fs = require('fs');

// //--------------------------writeFileSync----------------------------
// fs.writeFileSync("college/notes.txt","nodegvfbjs");
// console.log("File created successfully");



// //--------------------------readFileSync----------------------------

// const data = fs.readFileSync("notes.txt","utf-8");
// console.log(data);

// //--------------------------appendFileSync----------------------------
// fs.appendFileSync("notes.txt","\n karanataka satet");
// console.log('appended');

// //--------------------------unlinkSync----------------------------
// fs.writeFileSync("notes.txt","ffjjfijf");
// fs.unlinkSync("notes.txt");
// console.log("notess   .txt file deleted successfully");

// //--------------------------existsSync----------------------------
// if(fs.existsSync("notes.txt")){
//     console.log("File exists");
// }else{
//     console.log("File  doesnt exists"); 
// }

// if(fs.existsSync("yuhu.txt")){
//     console.log("File exists");
// }

// const http = require('http');
// const server = http.createServer((req,res)=>{
//     res.end("hello world");
// });
// server.listen(3000,()=>console.log("Server is running on port 3000"));

// const server = http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end("ji");
//     }else if(req.url=="/about"){
//         res.end("<h1>about</h1>  <p>this is about page</p>");
//     }
//     else{
//         res.end("404");
//     }
// });
// server.listen(3001,()=>console.log("Server is running on port 3001"));


// const http = require("http");

// const server = http.createServer((req, res) => {

//     res.writeHead(200, {
//         "Content-Type": "text/html"
//     });

//     res.write("<h1>Welcome</h1>");

//     res.end();

// });

// server.listen(3000);


//const http = require("http");

// const server = http.createServer((req, res) => {

//     if (req.url === "/") {

//         res.write("Home Page");

//     } else if (req.url === "/about") {

//         res.write("About Page");

//     } else if (req.url === "/contact") {

//         res.write("Contact Page");

//     } else {

//         res.write("404 Page Not Found");
//     }

//     res.end();

// });

// server.listen(3000, () => {
//     console.log("Server Started");
// });



// const server = http.createServer((req, res) => {

//     res.writeHead(200, {
//         "Content-Type": "application/json"
//     });

//     const student = {
//         id: 101,
//         name: "Gnana Siri",
//         course: "Node.js"
//     };

//     res.end(JSON.stringify(student));

// });

// server.listen(3000);


// const http = require("http");


// const fs = require("fs");

// const server = http.createServer((req, res) => {

//     const data = fs.readFileSync("index.html","utf-8")

//     res.writeHead(200, {
//         "Content-Type": "text/html"
//     });

//     res.write(data);

//     res.end();

// });

// server.listen(3000, () => {
//     console.log("Server running...");
// });

// const http = require("http");

// const server = http.createServer((req, res) => {

//     if (req.url === "/") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("<h1>Home Page</h1>");
//     } 
//     else if (req.url === "/about") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("<h1>About Page</h1>");
//     } 
//     else if (req.url === "/contact") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("<h1>Contact Page</h1>");
//     } 
//     else {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         res.end("<h1>404 Page Not Found</h1>");
//     }

// });

// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000");
// });



// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//     res.send("<h1>Home Page</h1><p>Welcome to Express Server</p>");
// });

// app.get("/about", (req, res) => {
//     res.send("<h1>About Page</h1><p>This is about page</p>");
// });

// app.get("/contact", (req, res) => {
//     res.send("<h1>Contact Page</h1><p>Email: test@example.com</p>");
// });

// app.use((req, res) => {
//     res.status(404).send("<h1>404 Page Not Found</h1>");
// });

// app.listen(3000, () => {
//     console.log("Express server running at http://localhost:3000");
// });


// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//     res.send("Welcome to Express");
// });

// app.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// });


// // const http = require("http");
// const express = require("express");

// const app = express();

// app.get("/",(req,res)=>{
//     res.send("Home pangfee");

// app.("/",(req,res)=>{

// })


// })


const express = require("express");

const app = express();

app.get("/student", (req, res) => {

    const student = {
        id: 101,
        name: "Gnana Siri",
        branch: "CSE"
    };

    res.json(student);

});

app.listen(3000);



