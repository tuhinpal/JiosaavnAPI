const setHeader = require("../helper/setHeader");
const getSongLyrics = require("../helper/getSongLyrics");
const handleError = require("../helper/handleError");

module.exports = async (req, res) => {
  setHeader(res);

  try {
    var lyrics = await getSongLyrics(req.query.id);
    if (!lyrics) throw new Error("404 - No lyrics found");

    res.status(200).json({
      status: true,
      serverTime: new Date().getTime(),
      lyrics,
    });
  } catch (error) {
    handleError(error, res);
  }
};
