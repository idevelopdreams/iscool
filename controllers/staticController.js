const pry = require("pryjs");

// GET /user/login
exports.userLogin = (req, res) => {
  res.render("login");
};

// GET user/signup
exports.register = (req, res) => {
  res.render("register");
};

// GET a single course
exports.singleCourse = (req, res) => {
  res.render("course", { user: req.session.passport.user });
};
