const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    let date = new Date();
    let my_url = url.parse(req.url, true);

    const log = `${date.getTime()} : "${my_url.pathname}" : User Logged\n`;

    fs.appendFile("./http_logs.txt", log, (err, data) => {
      switch (my_url.pathname) {
        case "/":
          console.log("Welcome Home!\n");
          res.end("HomePage");
          break;
        case "/about":
          const user = my_url.query.user;
          console.log(
            `Hello this is about page and I'm ${user.toString()}\n`
          );
          res.end(`Hey! Hi I am ${user.toString()}`);
          break;
        case "/search":
          console.log("Hello this is about page\n");
          res.end("Hey! Hi I am Chander Parkash");
          break;
        default:
          console.log("NOT FOUND\n");
          res.end("NOT FOUND - 404");
          break;
      }
    });
  })
  .listen(8000, () => {
    console.log("Server started");
  });
