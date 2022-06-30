const package = require("../package.json");

module.exports = async (req, res) => {
  res.json({
    alive: true,
    made_by: "https://github.com/tuhinpal",
    version: package.version,
    docs: `${process.env.APP_URL || "http://localhost:3000"}/docs`,
  });
};
