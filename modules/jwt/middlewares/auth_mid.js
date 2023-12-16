const auth = require("../service/auth");

async function cookieBased(req, res, next) {
  const token = req.cookies.uid;

  if (!token) return res.redirect("/login");

  const user = auth.getUser(token);

  if (!user) return res.redirect("/login");

  req.user = user;
  next();
}

async function headerBased(req, res, next) {
  const auths = req.headers["authorization"];

  const token = auths.split("Bearer ")[1];

  if (!token) return res.redirect("/login");

  const user = auth.getUser(token);

  if (!user) return res.redirect("/login");

  req.user = user;
  next();
}

module.exports = {
  cookieBased,
  headerBased,
};
