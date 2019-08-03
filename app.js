const express = require('express');
const routes  = require('./routes');

const port = process.env.PORT || 3000 ;

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

app.listen(port, (err) => {
    if (err)
            console.log(err)
        console.log('Server is live on port: ' + port)
})