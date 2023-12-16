const auth = require("../service/auth");
const user = require("../models/user_model");

async function signup(req, res) {
  const { name, email, password } = req.body;

  await user.create({
    name,
    email,
    password,
  });

  return res.status(200).redirect("/user/view/login");
}

async function login(req, res) {
  const { email, password } = req.body;

  const founded_user = await user.findOne({ email, password });

  if (!founded_user)
    return res
      .status(400)
      .render("login", { error: "invalid username or password" });

  const token = auth.setUser(founded_user);

  res.cookie("uid", token);
  return res.status(200).redirect("/home");
}

// signup view
async function signupView(req, res) {
  return res.status(200).render("signup");
}

// login view
async function loginView(req, res) {
  return res.status(200).render("login");
}

module.exports = { signup, login, signupView, loginView };
