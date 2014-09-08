var mime = require("mime");

module.exports = setContentType;

function setContentType (req, res) {
  res.setHeader('Content-Type', mime.lookup(req.url));
}
