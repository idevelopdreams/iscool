import passport from "../config/passport";

// GET /login
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

// DELETE a course // require params: userId
exports.deleteAccount = (req, res) => {
  // deleting users registration
  req.context.db.CourseRegistration.destroy({
    where: {
      UserId: req.params.userId // deletes all course registrations whose user id match user getting deleted
    }
  }).then(() => {
    req.context.db.User.destroy({
      where: {
        id: req.params.userId
      }
    }).then(user => {
      res.json({ message: "User Successfully deleted" });
    });
  });
};
