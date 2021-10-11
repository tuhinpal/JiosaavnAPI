const package = require("../package.json");

module.exports = async (req, res) => {
  res.json({
    status: "Running",
    made_by: "https://github.com/cachecleanerjeet",
    version: package.version,
  });
};
