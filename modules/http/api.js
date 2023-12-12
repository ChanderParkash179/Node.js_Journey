const http = require("http");
const fs = require("fs");
const url = require("url");

/*
==> HTTP METHODS <==

==> GET     : it's used to get the data from server 
==> POST    : it's used to send data to server
==> PUT     : it's used to update data on server
==> DELETE  : it's used to delete the data from server
==> PATCH   : it's used to update a particular field of object on server
*/

http
  .createServer((req, res) => {
    let date = new Date();
    let my_url = url.parse(req.url, true);

    const log = `${date.getTime()} : ${req.method} : "${
      my_url.pathname
    }" : User Logged\n`;

    fs.appendFile("./http_logs.txt", log, (err, data) => {
      switch (my_url.pathname) {
        case "/":
          if (req.method === "GET") res.end("HomePage");
          break;
        case "/about":
          const user = my_url.query.user;
          res.end(`Hey! Hi I am ${user.toString()}`);
          break;
        case "/search":
          const search = my_url.query.search_query;
          res.end("Here are your results for => " + search);
          break;
        case "/signup":
          if (req.method === "GET") res.end("This is signup form!");
          break;
        default:
          res.end("NOT FOUND - 404");
          break;
      }
    });
  })
  .listen(8000, () => {
    console.log("Server started");
  });
