'use strict';

let Meetup = require('meetup-api');

// Initialise the Meetup API Library with your API Token.
let meetup = Meetup({ key: process.env.MEETUP_API_TOKEN });

module.exports = meetup;
