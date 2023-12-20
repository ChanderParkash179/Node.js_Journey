const User = require("../models/user_model");
const { validateToken } = require("../services/auth");

async function signinView(req, res) {
  return res.render("signin");
}

async function signupView(req, res) {
  return res.render("signup");
}

async function signin(req, res) {
  const { email, password } = req.body;

  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);

    const valToken = validateToken(token);

    if (!valToken) return res.render("signup");

    return res.cookie("token", token).redirect("/home");
  } catch (error) {
    return res.render("signin", {
      error: "Incorrect Email or Password",
    });
  }
}

async function signup(req, res) {
  const { fullName, email, password } = req.body;

  await User.create({ fullName, email, password });

  return res.render("signin");
}

async function signout(req, res) {
  return res.clearCookie("token").redirect("/home");
}

module.exports = {
  signinView,
  signupView,
  signin,
  signup,
  signout,
};
