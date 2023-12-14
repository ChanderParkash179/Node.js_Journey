const express = require("express");
const data = require("../../users.json");
const fs = require("fs");
const port = 8000;

const app = express();

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));

// get users - html
app.get("/users", (req, res) => {
  const html = `
  <ul>${data.map((user) => `<li>${user.id} : ${user.first_name}</li>`).join("")}
  </ul>
  `;

  return res.send(html);
});

// get users - api
app.get("/api/users", (req, res) => {
  return res.json(data);
});

// get user
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = data.find((user) => user.id === id);
  return res.json(user);
});

// create user
app.post("/api/users", (req, res) => {
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

  data.push({ ...body, id: data.length + 1 });
  fs.writeFile("./../../users.json", JSON.stringify(data), (err) => {
    return res.status(201).json({ status: "success", id: data.length });
  });
});

// update user
app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = data.find((user) => user.id === id);
  const body = req.body;

  user.id = id;
  user.first_name = body.first_name;
  user.last_name = body.last_name;
  user.email = body.email;
  user.gender = body.gender;
  user.job_title = body.job_title;

  data.push({ ...user });
  fs.writeFile("./../../users.json", JSON.stringify(data), (err) => {
    return res.json({ status: "updated!", response: user });
  });
});

// delete user
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = data.find((user) => user.id === id);
  data.pop(user.id);
  return res.json({ status: "deleted!" });
});

// post & patch & delete if route is common
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = data.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    // TODO : edit new user
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const user = data.find((user) => user.id === id);
    data.pop(user.id);
    return res.json({ status: "deleted!" });
  });
app.listen(port, () => console.log("server started!"));
