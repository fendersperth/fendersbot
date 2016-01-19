import getLatestMeetup from '../../meetup/latest-meetup';

export default {
  patterns: [
    '!meetup',
  ],
  types: [
    'ambient',
    'mention'
  ],
  callback: (bot, message) => {
    getLatestMeetup((err, res) => {
      bot.reply(message, res);
    });
  }
};
