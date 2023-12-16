const user = require("../model/user");
const url = require("../model/url");
const { v4: uuidv4 } = require("uuid");
const auth = require("../service/auth");

// signup
async function signupData(req, res) {
  const { name, email, password } = req.body;

  await user.create({
    name,
    email,
    password,
  });

  // const entries = await url.find({});

  // return res.status(200).render("home", { urls: entries });
  return res.status(200).render("login");
}

// get view of data
async function signupView(req, res) {
  return res.status(200).render("signup");
}

// signup
async function loginData(req, res) {
  const { email, password } = req.body;

  const founded_user = await user.findOne({ email, password });

  if (!founded_user)
    return res
      .status(400)
      .render("login", { error: "invalid username or password" });

  const sessionId = uuidv4();
  auth.setUser(sessionId, founded_user);

  res.cookie("uid", sessionId);

  return res.status(200).redirect("/");
}

// get view of data
async function loginView(req, res) {
  return res.status(200).render("login");
}

module.exports = {
  signupData,
  signupView,
  loginData,
  loginView,
};
