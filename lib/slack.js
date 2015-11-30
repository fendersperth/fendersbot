'use strict';

let Slack = require('slack-client');
let config = require('../config.json');

// You need to supply an API Token either as an environment variable
// or in a config.json in the app's root directory.
let apiToken = process.env.SLACK_BOT_USER_API_TOKEN || config.slackBotUserApiToken;
let autoReconnect = true;
let autoMark = true;

let slack = new Slack(apiToken, autoReconnect, autoMark);

module.exports = slack;