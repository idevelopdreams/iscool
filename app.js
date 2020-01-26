import "dotenv/config";
import express from "express";
import routes from "./routes";

// starting up app
const app = express();

// setting template engine
app.set("view engine", "ejs");

//middleware
app.use(express.static("./public"));

// routing manager
app.use(routes);

module.exports = app;
