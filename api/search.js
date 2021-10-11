const setHeader = require("../helper/setHeader");
const { songsearchFromSTRING } = require("../helper/base");
const fetch = require("../helper/fetch");
const unescape = require("../helper/unescape");
const handleError = require("../helper/handleError");
const helperFunc = require("../helper/helperFunc");
const { APP_URL } = require("../config");

module.exports = async (req, res) => {
  setHeader(res);

  try {
    var response = await fetch({
      url: songsearchFromSTRING(req.query.query),
      method: "get",
    });
    var data = unescape(response.data).results;

    res.status(200).json({
      status: true,
      serverTime: new Date().getTime(),
      searchQuery: req.query.query,
      results: data.map((result) => {
        let images = helperFunc.makeDifferentQualityImages(result.image);
        let singers = result.more_info.artistMap.primary_artists
          .map((artist) => artist.name)
          .slice(0, 3)
          .join(", ");

        return {
          id: result.id,
          title: result.title,
          image: images["150x150"],
          images,
          album: result.more_info.album,
          description: `${result.more_info.album} · ${singers}`,
          more_info: {
            vlink: result.more_info.vlink,
            singers,
            language: helperFunc.ucfirst(result.language),
            album_id: result.more_info.album_id,
          },
          perma_url: result.perma_url,
          api_url: {
            song: `${APP_URL}/song?id=${result.id}`,
            album: `${APP_URL}/album?id=${result.more_info.album_id}`,
          },
        };
      }),
    });
  } catch (error) {
    handleError(error, res);
  }
};
