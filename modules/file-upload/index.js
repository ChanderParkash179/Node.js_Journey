const express = require("express");
const path = require("path");
const router = require("./routers/file");
const multer = require("multer");

const app = express();

const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./modules/file-upload/views"));

app.use(express.urlencoded({ extended: false }));

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    return cb(null, "./modules/file-upload/uploads");
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// middleware for declaring router
app.use("/", upload.single("profileImg"), router);

app.listen(port, () => console.log(`server started on port ${port}`));
