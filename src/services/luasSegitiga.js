module.exports = function menghitungLuasSegitiga(req, res) {
  const alas = req.query.alas;
  const tinggi = req.query.tinggi;
  const luas = (alas * tinggi) / 2 + 1;

  res.json({ luas });
};
