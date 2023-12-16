const express = require("express");
const user_router = require("./routes/user");
const url_router = require("./routes/url");
const static_router = require("./routes/static_router");
const { mongoConnect } = require("./data/connection");
const path = require("path");
const auth_middleware = require("./middlewares/auth");
const cookie_parser = require("cookie-parser");

const app = express();
const port = 8004;

// connect mongodb
mongoConnect("mongodb://localhost:27017/nodedb").then(() =>
  console.log("mongodb bhi nahin wara...!")
);

// middlewares
app.set("view engine", "ejs");
app.set("views", path.resolve("./modules/security/views"));

// for json body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie_parser());

// middleware for declaring base router
app.use("/url", auth_middleware.restrictToLoggedIn, url_router);
app.use("/user", user_router);
app.use("/", static_router);

// workspace - start

// workspace - end

app.listen(port, () => console.log(`server started on port : ${port}`));
