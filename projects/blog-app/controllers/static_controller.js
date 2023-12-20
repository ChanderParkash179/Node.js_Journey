const Blog = require("../models/blog_model");

async function homeView(req, res) {
  if (!req.cookies["token"]) return res.render("signin");

  const blogs = await Blog.find({});
  return res.render("home", { user: req.user, blogs: blogs });
}

module.exports = { homeView };
