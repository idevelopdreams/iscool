import "dotenv/config";
import express from "express";
import routes from "./routes";
import passport from "passport";
import bodyParser from "body-parser";
import session from "express-session";

// starting up app
const app = express();

// setting template engine
app.set("view engine", "ejs");

//middleware
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);

// routing manager
app.use(routes);

module.exports = app;
