const setHeader = require("../helper/setHeader");
const { songFromID } = require("../helper/base");
const fetch = require("../helper/fetch");
const unescape = require("../helper/unescape");
const handleError = require("../helper/handleError");
const makeSongResponse = require("../helper/makeSongResponse");

module.exports = async (req, res) => {
  setHeader(res);

  var songId = await getId(req.query.link);

  try {
    var response = await fetch({
      url: songFromID(songId),
      method: "get",
    });
    var data = unescape(response.data)[songId];

    res.status(200).json({
      status: true,
      serverTime: new Date().getTime(),
      queryLink: req.query.link,
      ...(await makeSongResponse(data, {
        addLyrics: req.query.lyrics === "true" ? true : false,
      })),
    });
  } catch (error) {
    handleError(error, res);
  }
};

async function getId(reqLink) {
  return (
    await fetch({
      url: reqLink,
      method: "get",
    })
  ).data
    .split('"song":{"type":"')[1]
    .split('","image":')[0]
    .split('"')[8];
}
