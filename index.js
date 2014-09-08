var mime = require("mime");
var ext = require("path").extname;

module.exports = setContentType;

function setContentType (req, res) {
  if (!ext(req.url)) return;
  res.setHeader('Content-Type', mime.lookup(req.url));
}
