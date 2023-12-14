const express = require("express");
const { log } = require("./middlewares");
const router = require("./router/url");
const { mongoConnect } = require("./data/connection");

const app = express();

const PORT = 8001;

// connect mongodb
mongoConnect("mongodb://localhost:27017/short-url").then(() =>
  console.log("mongodb bhi nahin wara...!")
);

// for json body
app.use(express.json());

// middleware for saving logs
app.use(log("./projects/url-short/utils/url-log.txt"));

// middleware for declaring base router
app.use("/api/url", router);

app.listen(PORT, () => {
  console.log(`program to war gaya port number ${PORT} pe!`);
});
