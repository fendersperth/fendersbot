// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
import moment from 'moment';
import Meetup from 'meetup-api';

const meetup = Meetup({ key: process.env.MEETUP_API_TOKEN });

export default function getLatestMeetup(cb) {
  const meetupReqParams = {
    group_urlname: process.env.MEETUP_GROUP_URLNAME,
    page: 1,
    text_format: 'plain'
  };
  meetup.getEvents(meetupReqParams, (err, res) => {
    if (err) {
      cb(err, null);
    }

    if (res) {
      if (res.results.length) {
        let nextEvent = res.results[0];
        let nextEventDate = moment(nextEvent.time).format('h:mmA dddd Do MMM');
        cb(null, `Next meetup: ${nextEvent.name} - ${nextEventDate} @ ${nextEvent.venue.name} (${nextEvent.venue.address_1})`);
      } else {
        cb(null, 'No meetups found!');
      }
    }
  });
};
