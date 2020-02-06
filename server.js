import "dotenv/config";
import http from "http";
import app from "./app";
import db from "./models";

const Port = process.env.PORT || 3000;

// passing express app to handle all request
const server = http.createServer(app);
db.sequelize.sync().then(function() {
  server.listen(Port, err => {
    if (err) throw err;
    console.log("Server is live on Port: " + Port + "...");
  });
});
