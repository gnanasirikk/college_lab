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

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
