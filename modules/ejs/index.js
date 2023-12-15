const express = require("express");
const { mongoConnect } = require("./data/connection");
const path = require("path");
const router = require("./router/url");

const app = express();

const PORT = 8004;

// connect mongodb
mongoConnect("mongodb://localhost:27017/ejs").then(() =>
  console.log("mongodb bhi nahin wara...!")
);

// middlewares
app.set("view engine", "ejs");
app.set("views", path.resolve("./modules/ejs/views"));

// for json body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`program to war gaya port number ${PORT} pe!`);
});
