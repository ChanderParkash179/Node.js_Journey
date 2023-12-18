async function fileUploadView(req, res) {
  return res.status(200).render("home");
}

async function fileUpload(req, res) {
  
  return res.status(200).render("home");
}

module.exports = {
  fileUploadView,
  fileUpload,
};
