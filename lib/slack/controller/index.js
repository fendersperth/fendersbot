const Botkit = require('botkit');
const config = require('./config');

const controller = Botkit.slackbot(config);

controller.configureSlackApp({
  clientId: process.env.SLACK_APP_CLIENT_ID,
  clientSecret: process.env.SLACK_APP_CLIENT_SECRET,
  scopes: [
    'bot',
    'commands',
    'users:read'
  ]
});

controller.setupWebserver(process.env.PORT || 1989, (err, server) => {
  controller.createHomepageEndpoint(server);
  controller.createOauthEndpoints(server);
});

controller.storage.teams.all((err, teams) => {
  if (err) throw new Error(err);

  if (teams) {
    Object.keys(teams).forEach(teamId => {
      const team = teams[teamId];
      controller.spawn(team.bot).startRTM(err => {
        if (err) throw new Error('Could not connect');
      });
    });
  }
});

module.exports = controller;
