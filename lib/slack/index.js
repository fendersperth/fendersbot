const controller = require('./controller');
const responses = require('./responses');

controller.on('tick', () => {});
controller.on('create_team', console.log.bind(console, 'create_team'));
controller.on('update_team', console.log.bind(console, 'update_team'));
controller.on('create_user', console.log.bind(console, 'create_user'));
controller.on('update_user', console.log.bind(console, 'update_user'));
controller.on('create_bot', bot => bot.startRTM());

Object.keys(responses).forEach(responseKey => {
  const response = responses[responseKey];
  controller.hears(
    response.patterns,
    response.types.join(','),
    response.callback
  );
});

