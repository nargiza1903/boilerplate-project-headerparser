// index.js
// where your node app starts

// init project
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// New endpoint for /api/whoami
app.get('/api/whoami', function (req, res) {
  const ipaddress = req.ip;
  const language = req.header('accept-language');
  const software = req.header('user-agent');

  res.json({ ipaddress, language, software });
});

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

