const setHeader = require("../helper/setHeader");
const { albumFromID } = require("../helper/base");
const fetch = require("../helper/fetch");
const unescape = require("../helper/unescape");
const handleError = require("../helper/handleError");
const makeSongResponse = require("../helper/makeSongResponse");
const decode = require("unescape");

module.exports = async (req, res) => {
  setHeader(res);

  try {
    var response = await fetch({
      url: albumFromID(req.query.id),
      method: "get",
    });
    if (!response.data.title) throw new Error("404 - Album not found");
    var data = unescape(response.data);

    var songs = [];

    for (song in data.songs) {
      songs.push(
        await makeSongResponse(data.songs[song], { addLyrics: false })
      );
    }

    res.status(200).json({
      status: true,
      serverTime: new Date().getTime(),
      albumid: data.albumid,
      title: decode(data.title),
      name: data.name,
      year: data.year,
      primary_artists: data.primary_artists,
      image: data.image,
      songs,
      perma_url: data.perma_url,
      release_date: data.release_date,
    });
  } catch (error) {
    handleError(error, res);
  }
};
