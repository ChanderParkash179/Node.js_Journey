const auth = require("../service/auth");

async function restriction(req, res, next) {
  const token = req.cookies.uid;

  if (!token) return res.redirect("/login");

  const user = auth.getUser(token);

  if (!user) return res.redirect("/login");

  req.user = user;
  next();
}

module.exports = {
  restriction,
};
