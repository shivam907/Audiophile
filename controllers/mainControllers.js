const home = (req, res, next) => {
  res.render("index");
};
const headphones = (req, res, next) => {
  res.render("headphones");
};
const earphones = (req, res, next) => {
  res.render("earphone");
};
const speakers = (req, res, next) => {
  res.render("speaker");
};
const xx1 = (req, res, next) => {
  res.render("xx99-mark-two-headphones");
};
const xx2 = (req, res, next) => {
  res.render("xx99-mark-one-headphones");
};
const xx59 = (req, res, next) => {
  res.render("xx59-headphones");
};
const zx9 = (req, res, next) => {
  res.render("zx9");
};
const zx7 = (req, res, next) => {
  res.render("zx7");
};
const yx1 = (req, res, next) => {
  res.render("yx1");
};
module.exports = {
  home,
  headphones,
  speakers,
  earphones,
  xx1,
  xx2,
  xx59,
  yx1,
  zx7,
  zx9,
};
