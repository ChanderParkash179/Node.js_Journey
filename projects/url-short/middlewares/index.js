const fs = require("fs");

function log(fileName) {
  return (req, res, next) => {
    const log = `\n ${Date.now()} - ${req.method} - ${req.path}`;
    fs.appendFile(fileName, log, (err, data) => {
      next();
    });
  };
}

module.exports = { log };
