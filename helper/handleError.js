module.exports = function (error, res) {
  if (error.message.startsWith("404")) {
    res.status(404);
  } else {
    res.status(500);
  }
  res.json({
    statis: false,
    message: error.message,
  });
};
