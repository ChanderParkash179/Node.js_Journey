const express = require("express");

const app = express();
const port = 8000;

// main-route & home
app.get("/", (req, res) => {
  console.log("This is Home Page");
  res.end("This is Home Page");
});

// about
app.get("/about", (req, res) => {
  console.log(
    "This is About Page, I'm " +
      req.query.name +
      ", and my age is " +
      req.query.age
  );
  res.end(
    "This is About Page, I'm " +
      req.query.name +
      ", and my age is " +
      req.query.age
  );
});

// login
app.get("/login", (req, res) => {
  console.log("This is Login Page");
  res.end("This is Login Page");
});

// signup
app.get("/signup", (req, res) => {
  console.log("This is Signup Page");
  res.end("This is Signup Page");
});

app.listen(port, () => console.log("server started...!"));
