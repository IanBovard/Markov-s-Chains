/*jshint esversion:6*/
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
/*const apiRoutes = require('../../api');*/
const WebSocket = require('ws');
const http = require('http');

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

wss.on('connection', (ws, req) => {
  ws.on('message', (message) => {
    console.log(message);
  });

  setInterval( () => {
    ws.send(JSON.stringify({OP:'ping', TIME:new Date()}));
  }, 1000);
});
/*let db = require('../../models');*/
/*app.use('/api', apiRoutes);*/
/*app.use('*', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname });
});
*/
server.listen(PORT, ()=> {
  /*db.sequelize.sync();*/
  console.log(`listening on ${PORT}`);
});