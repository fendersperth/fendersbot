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
      if (err) return bot.reply(message, 'An error occured while fetching Meetup API data!');

      bot.reply(message, res);
    });
  }
};
