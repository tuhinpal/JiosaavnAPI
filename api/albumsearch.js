const setHeader = require("../helper/setHeader");
const { albumsearchFromSTRING } = require("../helper/base");
const fetch = require("../helper/fetch");
const unescape = require("../helper/unescape");
const handleError = require("../helper/handleError");
const helperFunc = require("../helper/helperFunc");
const { APP_URL } = require("../config");

module.exports = async (req, res) => {
  setHeader(res);

  try {
    var response = await fetch({
      url: albumsearchFromSTRING(req.query.query),
      method: "get",
    });
    var data = unescape(response.data).albums.data;

    res.status(200).json({
      status: true,
      serverTime: new Date().getTime(),
      searchQuery: req.query.query,
      results: data.map((result) => {
        let images = helperFunc.makeDifferentQualityImages(result.image);
        return {
          id: result.id,
          title: result.title,
          image: images["150x150"],
          images,
          music: result.music,
          description: result.description,
          more_info: {
            year: Number(result.more_info.year),
            language: helperFunc.ucfirst(result.more_info.language),
          },
          url: result.url,
          api_url: {
            songs: helperFunc.generateAPIUrlsFromPids(
              result.more_info.song_pids
            ),
            album: `${APP_URL}/album?id=${result.id}`,
          },
        };
      }),
    });
  } catch (error) {
    handleError(error, res);
  }
};
