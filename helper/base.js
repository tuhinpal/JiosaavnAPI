module.exports = {
  albumFromID: (id) =>
    `https://www.jiosaavn.com/api.php?__call=content.getAlbumDetails&_format=json&cc=in&_marker=0%3F_marker=0&albumid=${id}`,
  albumsearchFromSTRING: (query) =>
    `https://www.jiosaavn.com/api.php?__call=autocomplete.get&_format=json&_marker=0&cc=in&includeMetaTags=1&query=${query
      .split(" ")
      .join("+")}`,
  playlistsearchFromSTRING: (query) =>
    `https://www.jiosaavn.com/api.php?__call=autocomplete.get&_format=json&_marker=0&cc=in&includeMetaTags=1&query=${query
      .split(" ")
      .join("+")}`,
  playlistFromID: (id) =>
    `https://www.jiosaavn.com/api.php?__call=webapi.get&type=playlist&p=1&n=50&includeMetaTags=0&ctx=web6dot0&api_version=4&_format=json&_marker=0&token=${id}`,
  songFromID: (id) =>
    `https://www.jiosaavn.com/api.php?__call=song.getDetails&cc=in&_marker=0%3F_marker%3D0&_format=json&pids=${id}`,
  songsearchFromSTRING: (query) =>
    `https://www.jiosaavn.com/api.php?p=1&_format=json&_marker=0&api_version=4&ctx=wap6dot0&n=10&__call=search.getResults&q=${query
      .split(" ")
      .join("+")}`,
  lyricsFromID: (id) =>
    `https://www.jiosaavn.com/api.php?__call=lyrics.getLyrics&ctx=web6dot0&api_version=4&_format=json&_marker=0%3F_marker=0&lyrics_id=${id}`,
};
