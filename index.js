var mime = require("mime");
var ext = require("path").extname;

module.exports = setContentType;

function setContentType (req, res, type) {
  if (!ext(req.url)) return;
  res.setHeader('Content-Type', type || mime.lookup(req.url));
}
