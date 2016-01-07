module.exports = {
  patterns: [
    'taytay',
    'swift',
    'taylor',
    'taylorswift',
    'taylor swift',
    't\-?swizzle'
  ],
  types: [
    'ambient',
    'mention'
  ],
  callback: (bot, message) => {
    bot.api.reactions.add({
      name: 'taylorswift',
      channel: message.channel,
      timestamp: message.ts
    })
  }
};

