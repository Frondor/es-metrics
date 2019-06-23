const extractTrack = (req) => {
  return req.body;
};

module.exports = (req, res) => {
  const track = extractTrack(req);
  res.json(track);
};
