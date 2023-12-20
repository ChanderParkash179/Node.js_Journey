const { validateToken } = require("../services/auth");

// Authentication throw Cookies
function checkForAuthenticationWithCookies(cookieName) {
  return (req, res, next) => {
    const tokenCookie = req.cookies[cookieName];
    req.user = null;

    if (!tokenCookie) return next();

    try {
      const userpayload = validateToken(tokenCookie);
      req.user = userpayload;
    } catch (error) {}

    return next();
  };
}

module.exports = { checkForAuthenticationWithCookies };
