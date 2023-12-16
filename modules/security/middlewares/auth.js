const auth = require("../service/auth");

async function restrictToLoggedIn(req, res, next) {
  const userId = req.cookies.uid;
  console.log(userId);

  if (!userId) return res.redirect("/login");

  const user = auth.getUser(userId);

  if (!user) return res.redirect("/login");

  req.user = user;
  next();
}

module.exports = {
  restrictToLoggedIn,
};
