const express = require("express");
const path = require("path");
const mongo = require("./data/connection");
const static_router = require("./routers/static_router");
const user_router = require("./routers/user_router");
const blog_router = require("./routers/blog_router");
const cookie_parser = require("cookie-parser");
const multer = require("multer");

const {
  checkForAuthenticationWithCookies,
} = require("./middlewares/auth_middleware");

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

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    return cb(null, path.resolve(`./projects/blog-app/public/imgs/cover`));
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.use(cookie_parser());
app.use(checkForAuthenticationWithCookies("token"));

app.use(express.static(path.resolve("./projects/blog-app/public")));

// middleware for declaring base router
app.use("/blog", upload.single("coverImg"), blog_router);
app.use("/user", user_router);
app.use("/", static_router);

app.listen(port, () => console.log(`porgram started at PORT : ${port}`));
