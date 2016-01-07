const LastFMAPI = require('lastfmapi');

module.exports = {
  patterns: ['!np'],
  types: ['ambient'],
  callback: (bot, message) => {
    bot.api.users.info({ user: message.user }, (err, result) => {
      if (err) return;

      if(process.env.LAST_FM_KEY) {
        const lastFM = new LastFMAPI({
          api_key: process.env.LAST_FM_KEY
        });

        console.log('Getting recent tracks for ' + result.user.name)
        lastFM.user.getRecentTracks({ user: result.user.name }, (err, recentTracks) => {
          if (err) return console.log(err);

          if (recentTracks.track[0] && recentTracks.track[0]['@attr']) {
            const track = recentTracks.track[0]
            const nowPlaying = track['@attr']['nowplaying']
            if (nowPlaying) return bot.reply(message, ':musical_note: *' + result.user.name + '* is listening to' + track.artist['#text'] + ' - ' + track.name)
          }
        });
      } else {
        console.log('no env variables');
      };
    });
  }
};

