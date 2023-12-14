const express = require("express");
const router = require("./routes/user_routes");
const { mongoConnect } = require("./data/connection");
const { log } = require("./middlewares");

const app = express();
const port = 8000;

// starting...!
console.log("program nahin wara...!");

// connect mongodb
mongoConnect("mongodb://localhost:27017/nodedb").then(() =>
  console.log("mongodb bhi nahin wara...!")
);

// middleware for declaring base router
app.use("/api/users", router);

// middleware for saving logs
app.use(log("log.txt"));

// workspace - start

// workspace - end

const portMsg = function (port) {
  console.log(`server started on port : ${port}`);
};

app.listen(port, () => portMsg(port));
