const { lyricsFromID } = require("./base");
const fetch = require("./fetch");
const unescape = require("../helper/unescape");
const helperFunc = require("./helperFunc");

module.exports = async function (id) {
  var response = await fetch({
    url: lyricsFromID(id),
    method: "get",
  });
  if (response.data.status === "failure") {
    return null;
  } else {
    return unescape(
      response.data.lyrics
        .replace(/"/gi, "'") // replace all " with '
        .replace(/  /gi, " ") // replace all double spaces with single space
        .split("<br>") // split by <br>
        .map((line) => helperFunc.ucfirst(line)) // make first letter uppercase
        .join("<br>") // again join with <br>
    );
  }
};
