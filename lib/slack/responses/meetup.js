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
      if (err) {
        bot.reply(message, 'An error occured while fetching Meetup API data!');
      }

      if (res) {
        bot.reply(message, res);
      }
    });
  }
};
