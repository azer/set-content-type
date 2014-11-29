var set = require("./");
var test = require("prova");

test('setting request content type', function (t) {
  t.plan(8);

  assert(t, 'text/html', 'http://foo.com/bar.html');
  assert(t, 'image/jpeg', 'http://foo.com/bar.jpg');
  assert(t, 'application/json', 'http://foo.com/bar.json');
  assert(t, 'text/css', 'http://foo.com/bar.css?foo=123456&bar=123');
});

function assert (t, expected, url) {
  var req = {
    url: url
  };

  var res = {
    setHeader: setHeader
  };

  set(req, res);

  function setHeader (type, value) {
    t.equal(type, 'Content-Type');
    t.equal(value, expected);
  };
}
