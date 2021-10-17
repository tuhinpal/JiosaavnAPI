const decode = require("unescape");

module.exports = function (data) {
  try {
    return JSON.parse(decode(JSON.stringify(data)));
  } catch (error) {
    return data;
  }
};
