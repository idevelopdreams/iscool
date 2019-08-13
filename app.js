import 'dotenv/config';

const express = require('express');
const routes  = require('./routes');



// starting up app
const app = express();

// adding context to our request
// app.use( (req, res, next ) => {
//     req.context = { db: database }
//     next();
// } )

// setting template engine
app.set("view engine","ejs");

//middleware
app.use(express.static('./public'));


// routing manager
app.use(routes);

module.exports = app;