import 'dotenv/config';
import http from 'http';

const Port = process.env.PORT || 3000
const server = http.createServer();

server.listen(Port, (err) => {
    if (err) throw (err) 
    console.log("Server is live on Port: " + Port + "...");
});