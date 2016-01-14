export default {
  patterns: ['!ping'],
  types: ['ambient', 'mention'],
  callback: (bot, message) => {
    bot.reply(message, 'pong!');
  }
};
