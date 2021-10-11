const decode = require("unescape");

module.exports = function (data) {
  return JSON.parse(decode(JSON.stringify(data)));
};
