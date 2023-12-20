async function homeView(req, res) {
  if (!req.cookies["token"]) return res.render("signin");
  return res.render("home", { user: req.user });
}

module.exports = { homeView };