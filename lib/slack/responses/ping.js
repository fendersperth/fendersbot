module.exports = {
  patterns: ['!ping'],
  types: ['ambient', 'mention'],

  // TODO(karlbright): I don't like this naming, should this be fn? exec? something?
  response: function(bot, message) {
    bot.reply(message, 'pong!');
  }
};

