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

// Authentication throw Headers
function checkForAuthenticationWithHeaders(req, res, next) {
  const authorizationValue = req.headers["authorization"];
  req.user = null;

  if (!authorizationValue || !authorizationValue.startsWith("Bearer"))
    return next();

  const token = authorizationValue.split("Bearer ")[1];
  req.user = auth.getUser(token);

  return next();
}

// Authentication throw Cookies
function checkForAuthenticationWithCookies(req, res, next) {
  const tokenCookie = req.cookies?.token;
  req.user = null;

  if (!tokenCookie) return next();

  const token = tokenCookie;
  req.user = auth.getUser(token);

  return next();
}

// Authorization
function restrictTo(roles = []) {
  return function (req, res, next) {
    if (!req.user) return res.redirect("/login");

    if (!roles.includes(req.user.role)) return res.end("UnAuthorized User!");

    return next();
  };
}

module.exports = {
  cookieBased,
  headerBased,
  checkForAuthenticationWithHeaders,
  checkForAuthenticationWithCookies,
  restrictTo,
};
