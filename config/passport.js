import "dotenv/config";
import passport from "passport";
import LocalStrategy from "passport-local";
import database from "../models";

passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "email"
    },
    function getUser(email, password, done) {
      // When a user tries to sign in this code runs
      database.User.findOne({ where: { email: email } }).then(function(dbUser) {
        // If there's no user with the given email
        if (!dbUser) {
          return done(null, false, { message: "Incorrect email." });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, { message: "Incorrect password." });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });
    }
  )
);

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
      database.User.findOne({ where: { email: email } }).then(function(dbuser) {
        if (dbuser) {
          return done(null, false, { message: "That email is already taken" });
        } else {
          database.User.create({
            fullname: req.body.fullname,
            DOB: req.body.dob,
            email: email,
            password: password,
            organization: req.body.code
          }).then(function(newUser) {
            if (!newUser) {
              return done(null, false);
            }

            if (newUser) {
              return done(null, newUser);
            }
          });
        }
      });
    }
  )
);

// In order to help keep authentication state across HTTP requests,
passport.serializeUser(function(user, done) {
  done(null, user);
});
//
passport.deserializeUser(function(user, done) {
  done(null, user);
});
module.exports = passport;
