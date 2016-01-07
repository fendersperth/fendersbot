const Botkit = require('botkit');
const responses = require('./responses');

const controller = Botkit.slackbot({
  //jscs:disable requireCamelCaseOrUpperCaseIdentifiers

  debug: process.env.NODE_ENV !== 'production',
  json_file_store: __dirname + '/../../.store' // TODO(karlbright): Move to a redis store and switch based on environment
});

// TODO(karlbright): Better handled elsewhere. Here to stop spamming console.
controller.on('tick', () => {});

controller.configureSlackApp({
  clientId: process.env.SLACK_APP_CLIENT_ID,
  clientSecret: process.env.SLACK_APP_CLIENT_SECRET,
  scopes: ['bot', 'commands', 'users:read'] // TODO(karlbright): Review oauth scopes for slash commands and webhooks
});

// TODO(karlbright): Use environment variable PORT and default to something sensible
controller.setupWebserver(1989, (err, server) => {
  controller.createHomepageEndpoint(server);
  controller.createOauthEndpoints(server);
});

// TODO(karlbright): We might want to do something with these?
controller.on('create_team', console.log.bind(console, 'create_team'));
controller.on('update_team', console.log.bind(console, 'update_team'));
controller.on('create_user', console.log.bind(console, 'create_user'));
controller.on('update_user', console.log.bind(console, 'update_user'));

controller.on('create_bot', bot => {
  bot.startRTM(err => {
    if (err) throw new Error('Could not connect');
  });
});

controller.storage.teams.all((err, teams) => {
  if (err) throw new Error(err);

  Object.keys(teams).forEach(teamId => {
    const team = teams[teamId];
    controller.spawn(team.bot).startRTM(err => {
      if (err) throw new Error('Could not connect');
    });
  });
});

Object.keys(responses).forEach(responseKey => {
  const response = responses[responseKey];
  controller.hears(
    response.patterns,
    response.types.join(','),
    response.callback
  );
});

