const { APP_URL } = require("../config");
const formatDuration = require("format-duration");
const helperFunc = require("./helperFunc");
const getSongLyrics = require("./getSongLyrics");
const decode = require("unescape");

module.exports = async function (song, options) {
  let media_urls = helperFunc.makeDifferentQualityMediaUrls(
    song.media_preview_url
  );
  let images = helperFunc.makeDifferentQualityImages(song.image);

  return {
    id: song.id,
    song: decode(song.song),
    album: decode(song.album),
    year: Number(song.year),
    primary_artists: song.primary_artists,
    singers: song.singers,
    image: images["500x500"],
    images,
    duration: formatDuration(Number(song.duration) * 1000),
    label: song.label,
    albumid: song.albumid,
    language: helperFunc.ucfirst(song.language),
    copyright_text: song.copyright_text,
    has_lyrics: Boolean(song.has_lyrics),
    lyrics:
      options?.addLyrics && song.has_lyrics === "true"
        ? await getSongLyrics(song.id)
        : null,
    media_url: media_urls["160_KBPS"],
    media_urls,
    perma_url: song.perma_url,
    album_url: song.album_url,
    release_date: song.release_date,
    api_url: {
      song: `${APP_URL}/song?id=${song.id}`,
      album: `${APP_URL}/album?id=${song.albumid}`,
    },
  };
};
