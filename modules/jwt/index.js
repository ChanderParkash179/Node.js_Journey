const express = require("express");
const path = require("path");
const cookie_parser = require("cookie-parser");
const mongo = require("./data/connection");
const static_router = require("./routers/static_router");
const user_router = require("./routers/user_router");
const auth_middleware = require("./middlewares/auth_mid");

const app = express();
const port = 8000;

// connect mongodb
mongo
  .mongoConnect("mongodb://localhost:27017/jwtDB")
  .then(() => console.log("mongodb bhi nahin wara...!"));

// middlewares
app.set("view engine", "ejs");
app.set("views", path.resolve("./modules/jwt/views"));

// for json body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie_parser());
app.use(auth_middleware.checkForAuthenticationWithCookies);

// middleware for declaring base router
app.use("/user", user_router);
app.use("/base", static_router);

app.listen(port, () => console.log(`porgram started at PORT : ${port}`));
