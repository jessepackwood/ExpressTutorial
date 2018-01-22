const express = require('express');
const app = express();
const path =require('path');


const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  // We don't need to explicitly use this handler or send a response
  // because Express is using the default path of the static assets
  // to serve this content
});

app.get('/json', (request, response) => {
  response.status(200).json({"name": "Robbie"});
});

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});
