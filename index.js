'use strict';

let express = require('express');
let path = require('path');

// Slack
let slack = require('./lib/slack');
slack.login();

// Express
let app = express();
app.set('port', process.env.PORT || 5000);
app.get('/', function(req, res) { res.send('hello world'); })
app.listen(app.get('port'), function () {
  console.log('App listening on port', app.get('port'))
})
