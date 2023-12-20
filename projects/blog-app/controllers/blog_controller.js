const Blog = require("../models/blog_model");

async function blogsView(req, res) {
  if (!req.cookies["token"]) return res.render("signin");

  return res.render("blog", { user: req.user });
}

async function blogView(req, res) {
  if (!req.cookies["token"]) return res.render("signin");

  const blog = await Blog.findById(req.params.id);

  return res.render("blog-view", { user: req.user, blog: blog });
}

async function blog(req, res) {
  if (!req.cookies["token"]) return res.render("signin");

  const { title, body } = req.body;

  const blog = await Blog.create({
    title: title,
    body: body,
    createdBy: req.user._id,
    coverImg: `/imgs/cover/${req.file.filename}`,
  });

  return res.redirect(`/blog/${blog._id}`);
}

module.exports = {
  blogView,
  blogsView,
  blog,
};
