const express = require("express");
const fs = require("fs");
const data = require("./../../users.json");

const app = express();
const port = 8000;

// workspace - start

// middleware 1

// app.use((req, res, next) => {
//   console.log(`comming from : ${req.name}`);
//   req.name = "md-01";
//   console.log("md-01");
//   next();
// });

// app.use((req, res, next) => {
//   console.log(`comming from : ${req.name}`);
//   req.name = "md-02";
//   console.log("md-02");
//   next();
// });

// app.get("/", (req, res) => {
//   console.log(`comming from : ${req.name}`);
//   req.name = "get-req";
//   console.log("get-req");
//   res.send(`content => ${req.username}`);
// });

// Task-01: log date, method name, endpoint and middleware no in log.txt file

// md-01

app.use((req, res, next) => {
  const log = `\n${Date.now()} - ${req.method} - ${req.path} - md-01`;
  fs.appendFile("./modules/middleware/md-log.txt", log, (err, data) => {
    next();
    console.log(log);
  });
});

// md-02
app.use((req, res, next) => {
  const log = `\n${Date.now()} - ${req.method} - ${req.path} - md-02`;
  fs.appendFile("./modules/middleware/md-log.txt", log, (err, data) => {
    next();
    console.log(log);
  });
});

// task
app.get("/", (req, res) => {
  const log = `\n${Date.now()} - ${req.method} - ${req.path} - request`;
  fs.appendFile("./modules/middleware/md-log.txt", log, (err, data) => {
    res.send(log);
    console.log(log);
  });
});

// workspace - end

const portMsg = function (port) {
  console.log(`server started on port : ${port}`);
};

app.listen(port, () => portMsg(port));
