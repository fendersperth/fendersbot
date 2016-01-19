import moment from 'moment-timezone';

const localTimezone = process.env.MOMENT_TIMEZONE;

export default function momentLocal(momentArg) {
  if (momentArg === undefined) {
    return moment().tz(localTimezone);
  } else {
    return moment(momentArg).tz(localTimezone);
  }
};
