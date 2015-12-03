'use strict';

let Slack = require('slack-client');

let meetupHelpers = require('./meetup-helpers');

// You need to supply an API Token either as an environment variable
// or in a config.json in the app's root directory.
let apiToken = process.env.SLACK_BOT_USER_API_TOKEN;
let autoReconnect = true;
let autoMark = true;

let slack = new Slack(apiToken, autoReconnect, autoMark);

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

  // !meetup
  let regexMeetup = /^\!meetup/i;
  let matchMeetup = msg.text.match(regexMeetup);
  if (matchMeetup) {
    meetupHelpers.getLatestMeetup((err, res) => {
      channel.send(res);
    });
  }

  // Uncomment below to log all messages
  //console.log('Message:', JSON.stringify(msg));

  if (response) channel.send(response);
});

slack.on('error', (err) => {
  console.error(`Slack Error: ${err}`);
});

module.exports = slack;
