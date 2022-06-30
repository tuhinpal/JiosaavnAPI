const setHeader = require("../helper/setHeader");
const { albumsearchFromSTRING } = require("../helper/base");
const fetch = require("../helper/fetch");
const unescape = require("../helper/unescape");
const handleError = require("../helper/handleError");
const helperFunc = require("../helper/helperFunc");
const { APP_URL } = require("../config");
const decode = require("unescape");

module.exports = async (req, res) => {
  setHeader(res);

  try {
    var response = await fetch({
      url: albumsearchFromSTRING(req.query.query),
      method: "get",
    });
    var data = unescape(response.data).playlists.data;

    res.status(200).json({
      status: true,
      serverTime: new Date().getTime(),
      searchQuery: req.query.query,
      results: data.map((result) => {
        let images = helperFunc.makeDifferentQualityImages(result.image);
        let id = result.url.split("/").pop();
        return {
          id,
          title: decode(result.title),
          image: images["150x150"],
          images,
          url: result.url,
          api_url: {
            playlist: `${APP_URL}/playlist?id=${id}`,
          },
        };
      }),
    });
  } catch (error) {
    handleError(error, res);
  }
};
