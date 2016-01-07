const LastFMAPI = require('lastfmapi');

module.exports = {
  patterns: ['^!np', '^!nowplaying'],
  types: ['ambient'],
  callback: (bot, message) => {
    bot.api.users.info({ user: message.user }, (err, result) => {
      if (err) return bot.reply(message, ':musical_note: Sorry, something went wrong');

      if (process.env.LAST_FM_KEY) {
        const lastFM = new LastFMAPI({
          //jscs:disable requireCamelCaseOrUpperCaseIdentifiers
          api_key: process.env.LAST_FM_KEY
        });

        console.log('Getting recent tracks for ' + result.user.name);
        lastFM.user.getRecentTracks({ user: result.user.name }, (err, recentTracks) => {
          if (err) return bot.reply(message, ':musical_note: Sorry, something went wrong *' + result.user.name + '*');

          if (recentTracks.track[0]) {
            const track = recentTracks.track[0];
            if (track['@attr'] && track['@attr'].nowplaying) {
              return bot.reply(message, ':musical_note: *' + result.user.name + '* is listening to' + track.artist['#text'] + ' - ' + track.name);
            } else {
              return bot.reply(message, ':musical_note: *' + result.user.name + '* isn\'t listening to anything right now. They last listened to ' + track.artist['#text'] + ' - ' + track.name);
            }
          }
        });
      } else {
        console.log('no env variables');
      };
    });
  }
};

