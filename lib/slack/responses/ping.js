module.exports = {
  patterns: ['!ping'],
  types: ['ambient', 'mention'],
  callback: (bot, message) => {
    bot.reply(message, 'pong!');
  }
};

