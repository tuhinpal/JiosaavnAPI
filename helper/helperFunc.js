const { APP_URL } = require("../config");

module.exports = {
  ucfirst: (str) => {
    var firstLetter = str.slice(0, 1);
    return firstLetter.toUpperCase() + str.substring(1);
  },
  makeDifferentQualityMediaUrls: (url) => {
    let replaced = url.replace("preview.saavncdn.com", "aac.saavncdn.com");
    return {
      "96_KBPS": replaced.replace("_96_p", "_96"),
      "160_KBPS": replaced.replace("_96_p", "_160"),
      "320_KBPS": replaced.replace("_96_p", "_320"),
    };
  },
  makeDifferentQualityImages: (image) => {
    let image_clone = image.split("-");
    image_clone.pop();
    image_clone = image_clone.join("-");

    return {
      "50x50": `${image_clone}-50x50.jpg`,
      "150x150": `${image_clone}-150x150.jpg`,
      "500x500": `${image_clone}-500x500.jpg`,
    };
  },
  generateAPIUrlsFromPids: (pids) => {
    let pids_clone = pids.replace(/ /g, "").split(",");
    return pids_clone.map((pid) => {
      return `${APP_URL}/song?id=${pid}`;
    });
  },
};
