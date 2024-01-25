const http = require('http');
const WebSocket = require('ws');
const url = require('url');
const uuidv4 = require('uuid').v4;

const server = http.createServer();
const wsServer = new WebSocket.Server({ server });

const port=8000;
wsServer.on('connection', (connection, request) => {
    const {username}=url.parse(request.url,true).query;
    const userId=uuidv4();
    console.log(username,userId);
});
server.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
});