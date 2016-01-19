// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
import Meetup from 'meetup-api';
import momentLocal from '../utility/moment-local';

const meetup = Meetup({ key: process.env.MEETUP_API_TOKEN });

export default function getLatestMeetup(cb) {
  const meetupReqParams = {
    group_urlname: process.env.MEETUP_GROUP_URLNAME,
    page: 1,
    text_format: 'plain'
  };
  meetup.getEvents(meetupReqParams, (err, res) => {
    if (err) return cb(err, null);

    if (!res.results) return cb(null, 'No meetups found!');

    let nextEvent = res.results[0];
    let nextEventDate = momentLocal(nextEvent.time).format('h:mmA dddd Do MMM');
    cb(null, `Next meetup: ${nextEvent.name} - ${nextEventDate} @ ${nextEvent.venue.name} (${nextEvent.venue.address_1})`);
  });
};
