import Botkit from 'botkit';
import config from './config';

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
    for (let { bot } of Object.values(teams)) {
      controller.spawn(bot).startRTM(err => {
        if (err) throw new Error('Could not connect');
      });
    }
  }
});

export default controller;
