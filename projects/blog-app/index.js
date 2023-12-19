const express = require("express");
const path = require("path");
const mongo = require("./data/connection");
const static_router = require("./routers/static_router");
const user_router = require("./routers/user_router");

const app = express();
const port = 8000;

// connect mongodb
mongo
  .mongoConnect("mongodb://localhost:27017/blogApp")
  .then(() => console.log("mongodb bhi nahin wara...!"));

// middlewares
app.set("view engine", "ejs");
app.set("views", path.resolve("./projects/blog-app/views"));

// for json body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// middleware for declaring base router
app.use("/", user_router);
app.use("/", static_router);

app.listen(port, () => console.log(`porgram started at PORT : ${port}`));
