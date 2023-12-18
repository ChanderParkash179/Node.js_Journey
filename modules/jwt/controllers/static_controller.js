// home view
async function homeView(req, res) {
  return res.status(200).render("home");
}

async function adminView(req, res) {
  return res.status(200).render("admin_home");
}

module.exports = {
  homeView,
  adminView,
};
