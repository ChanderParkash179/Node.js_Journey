const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    let date = new Date();
    const log = `${date.getHours().toString()}:${date.getMinutes().toString()}:${date.getSeconds().toString()}:${date.getMilliseconds().toString()} : User Logged In\n`;

    fs.appendFile("./http_logs.txt", log, (err, data) => {
      console.log("Comeback again! Thanks for using it\n");
      res.end("Comeback again! Thanks for using it");
    });
  })
  .listen(8000, () => {
    console.log("Server started");
  });
