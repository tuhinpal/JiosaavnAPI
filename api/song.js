const setHeader = require("../helper/setHeader");
const { songFromID } = require("../helper/base");
const fetch = require("../helper/fetch");
const unescape = require("../helper/unescape");
const handleError = require("../helper/handleError");
const makeSongResponse = require("../helper/makeSongResponse");

module.exports = async (req, res) => {
  setHeader(res);

  try {
    var response = await fetch({
      url: songFromID(req.query.id),
      method: "get",
    });
    if (response.data.length === 0) throw new Error("404 - Song not found");
    var data = unescape(response.data)[req.query.id];

    res.status(200).json({
      status: true,
      serverTime: new Date().getTime(),
      ...(await makeSongResponse(data, {
        addLyrics: req.query.lyrics === "true" ? true : false,
      })),
    });
  } catch (error) {
    handleError(error, res);
  }
};
