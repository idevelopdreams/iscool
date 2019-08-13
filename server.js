import 'dotenv/config';
import https from 'https';
import app from'./app';



const Port = process.env.PORT || 3000;

// passing express app to handle all request
const server = https.createServer(app);

server.listen(Port, (err) => {
    if (err) throw (err) 
    console.log("Server is live on Port: " + Port + "...");
});