'use strict';

let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

// Slack
let slack = require('./lib/slack');

slack.on('open', () => {
  console.log(`Connected to ${slack.team.name} Slack as ${slack.self.name}!`);
});

slack.on('message', (msg) => {
  let channel = slack.getChannelGroupOrDMByID(msg.channel);
  let user = slack.getUserByID(msg.user);
  let username = user && user.name ? user.name : null;

  if (!(channel && username)) return;

  let response;
  // !ping
  let regexPing = /^\!ping/i;
  let matchPing = msg.text.match(regexPing);
  if (matchPing) {
    response = ['Hello ', username, '!'].join('');
  }
  // !echo <message>
  let regexEcho = /^\!echo (.*)/i;
  let matchEcho = msg.text.match(regexEcho);
  if (matchEcho) {
    response = matchEcho[1];
  }

  // Uncomment below to log all messages
  //console.log('Message:', JSON.stringify(msg));

  if (response) channel.send(response);
});

slack.on('error', (err) => {
  console.error(`Slack Error: ${err}`)
});

slack.login();

// Express
let routes = require('./routes/index');
let users = require('./routes/users');
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;