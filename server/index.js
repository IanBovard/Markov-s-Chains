/*jshint esversion:6*/
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
/*const apiRoutes = require('./api');*/

const WebSocket = require('ws');
const http = require('http');

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const users = [];

let messageChain = { trigger: [], response: []};
let messageCache = [];
let modifiedMessage = '';
let tuples = [];

wss.on('connection', function connection(ws, req) {
  console.log("connected");
  let userId = ws._ultron.id;
  users.push(ws);
  for (let i = 0; i< users.length; i++){
    console.log("id",users[i]._ultron.id);
  }
  ws.on('message', function incoming(message) {

    let payload = JSON.parse(message);
    let payloadMessage = payload.message.message;
    let payloadUsername = payload.message.username;

    switch(true){
      case (messageChain.trigger.length === 0):
      messageChain.trigger.push(payload.message);
      break;
      case (messageChain.trigger.length > 0 && messageChain.trigger[0].username != payloadUsername):
      messageChain.response.push(payload.message);
      modifiedMessage = payload.message.message
      .replace(/[.,\/#!$%\^*\*;:{}=\-_`~()]/g,"")
      .replace(/\s{2,}/g,"").toLowerCase();
      messageCache.push(modifiedMessage);
      break;
      case (messageChain.trigger[0].username === payloadUsername && messageChain.response.length  === 0):
      messageChain.trigger.push(payload.message);
      break;
      case (messageChain.trigger[0].username === payloadUsername):
      //break up message chain then query DB
      let cache = messageCache.join(' # ').split(' ');
      cache.reduce((trigger, response) => {
        let trigRes = [trigger, response];
        tuples.push(trigRes);
        console.log(tuples);
        return response;
      });
      messageChain.trigger = messageChain.response;
      messageChain.response = [payload.message];
      modifiedMessage = payload.message.message
      .replace(/[.,\/#!$%\^*\*;:{}=\-_`~()]/g,"")
      .replace(/\s{2,}/g,"").toLowerCase();
      messageCache = [modifiedMessage];
      couplet = [];
      break;
    }

    switch (payload.OP) {
      case 'CHAT':
      users.forEach(user => {
        user.send(
          JSON.stringify({
            OP: 'CHAT',
            message: payloadMessage,
            username: payloadUsername
          })
          );
      });
      break;
      case 'CONNECTED':
      console.log('a user has connected');
      break;
    }
  });

  ws.send(
    JSON.stringify({
      OP: 'SUCCESSFUL_CONNECTION',
      userId
    })
    );
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*let db = require('../models');

app.use('/api', apiRoutes);*/

server.listen(PORT,'0.0.0.0', ()=> {
  /*  db.sequelize.sync({force:true});*/
  console.log(`listening on ${PORT}`);
});