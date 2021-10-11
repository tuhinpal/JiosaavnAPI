module.exports = function (res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
  res.setHeader(
    "Open-Source",
    "https://github.com/cachecleanerjeet/JiosaavnAPI"
  );
  res.setHeader(
    "Made-By",
    "Tuhin Kanti Pal, https://github.com/cachecleanerjeet"
  );
  return;
};
