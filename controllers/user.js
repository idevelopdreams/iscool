import passport from "../config/passport";

// GET /user/login
exports.userLogin = (req, res) => {
  res.render("login");
};

// POST user/login
exports.userSignin = passport.authenticate("local-login", {
  successRedirect: "/",
  failureRedirect: "/login"
});

// GET user/signup
exports.register = (req, res) => {
  res.render("register");
};

// POST /user/signup
exports.signup = passport.authenticate("local-signup", {
  successRedirect: "/",
  failureRedirect: "/signup"
});

// GET for /logout
exports.logout = (req, res) => {
  res.redirect("/");
};
