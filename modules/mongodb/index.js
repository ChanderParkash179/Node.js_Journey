const express = require("express");
const mongoose = require("mongoose");
const port = 8000;

const app = express();

// middleware - plugin
app.use(express.urlencoded({ extended: false }));

// mongodb connection
mongoose
  .connect("mongodb://localhost:27017/nodedb")
  .then(() => console.log("mongo connected!"))
  .catch((err) => console.log(`Error Occured : ${err}`));

// schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  jogTitle: {
    type: String,
  },
});

const user = mongoose.model("user", userSchema);

// workspace - start

// get all users
app.get("/api/get-users", async (req, res) => {
  const users = await user.find({});
  return res.status(200).json(users);
});

// get user by firstName
app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const founded_user = await user.findById(req.params.id);
    if (!founded_user) res.status(400).json("no user available!");
    return res.status(200).json(founded_user);
  })
  .patch(async (req, res) => {
    await user.findByIdAndUpdate(req.params.id, {
      lastName: "Changed",
    });
    const updateUser = await user.findById(req.params.id);
    return res.status(201).json(updateUser);
  })
  .delete(async (req, res) => {
    await user.findByIdAndDelete(req.params.id);
    return res.status(200).json({ response: "deleted" });
  });

// save user
app.post("/api/create-user", async (req, res) => {
  const body = req.body;

  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All Fields are compulsory!" });
  }

  const result = await user.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  return res.status(201).json({ msg: "success", response: result });
});

// workspace - end

const portMsg = function (port) {
  console.log(`server started on port : ${port}`);
};

app.listen(port, () => portMsg(port));
