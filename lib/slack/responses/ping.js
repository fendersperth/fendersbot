module.exports = {
  patterns: ['!ping'],
  types: ['ambient', 'mention'],
  callback: function(bot, message) {
    bot.reply(message, 'pong!');
  }
};

