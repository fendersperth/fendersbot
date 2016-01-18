// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
const moment = require('moment');
const Meetup = require('meetup-api');
const meetup = Meetup({ key: process.env.MEETUP_API_TOKEN });

const getLatestMeetup = (cb) => {
  let meetupReqParams = {
    group_urlname: process.env.MEETUP_GROUP_URLNAME,
    page: 1,
    text_format: 'plain'
  };
  meetup.getEvents(meetupReqParams, (err, res) => {
    if (err) {
      cb(err, null);
    }

    if (res && res.results.length) {
      let nextEvent = res.results[0];
      let nextEventDate = moment(nextEvent.time).format('h:mmA dddd Do MMM');
      cb(null, `Next meetup: ${nextEvent.name} - ${nextEventDate} @ ${nextEvent.venue.name} (${nextEvent.venue.address_1})`);
    }
  });
};

export default {
  patterns: [
    '!meetup',
  ],
  types: [
    'ambient',
    'mention'
  ],
  callback: (bot, message) => {
    console.log('Received !meetup');
    getLatestMeetup((err, res) => {
      bot.reply(message, res);
    });
  }
};
