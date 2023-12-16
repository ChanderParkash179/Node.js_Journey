// home view
async function homeView(req, res) {
  return res.status(200).render("home");
}

module.exports = {
  homeView,
};
