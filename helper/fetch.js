const axios = require("axios");

module.exports = async function ({ url, method }) {
  return await axios[method](url);
};
