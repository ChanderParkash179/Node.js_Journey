const url = require("../model/url");
const shortid = require("shortid");

// post a new url
async function createShortID(req, res) {
  const shortID = shortid();
  const redirectedURL = req.body.url;

  if (!redirectedURL)
    return res.status(400).json({
      responseMessage: "url should not be empty!",
      responseData: null,
    });

  await url.create({
    shortId: shortID,
    redirectURL: redirectedURL,
    visitHistory: [],
    createdBy: req.user._id,
  });

  const entries = await url.find({});
  return res.status(200).render("home", { urls: entries });
  // return res.status(200).redirect("/url");
}

// update and redirect available url
async function redirection(req, res) {
  const shortId = req.params.shortId;

  const entry = await url.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  if (!entry.redirectURL)
    return res.status(400).json({ response: "no redirection url available" });

  res.redirect(entry.redirectURL);
}

// get view of data
async function homeView(req, res) {
  const entries = await url.find({});
  return res.status(200).render("home", { urls: entries });
}

// exports
module.exports = {
  createShortID,
  redirection,
  homeView,
};
