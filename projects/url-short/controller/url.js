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

  const result = await url.create({
    shortId: shortID,
    redirectURL: redirectedURL,
    visitHistory: [],
  });

  res.status(201).json({
    responseMessage: "short url created successfully!",
    responseData: result,
  });
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

// find all available urls
async function getURLs(req, res) {
  const urls = await url.find({});
  res.status(200).json({ response: urls });
}

// get analytics
async function getAnalytics(req, res) {
  const shortid = req.params.shortId;

  const result = await url.findOne({ shortid });

  return res
    .status(200)
    .json({ clicks: result.visitHistory.length, history: result.visitHistory });
}

// exports
module.exports = {
  createShortID,
  redirection,
  getURLs,
  getAnalytics,
};
