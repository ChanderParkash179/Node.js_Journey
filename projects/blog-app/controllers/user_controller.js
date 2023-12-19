const User = require("../models/user_model");

async function signinView(req, res) {
  return res.render("signin");
}

async function signupView(req, res) {
  return res.render("signup");
}

async function signin(req, res) {
  const { email, password } = req.body;

  const user = await User.matchPassword(email, password);

  if (!user) return res.render("signup");

  return res.render("home");
}

async function signup(req, res) {
  const { fullName, email, password } = req.body;

  await User.create({ fullName, email, password });

  return res.render("home");
}

module.exports = {
  signinView,
  signupView,
  signin,
  signup,
};
