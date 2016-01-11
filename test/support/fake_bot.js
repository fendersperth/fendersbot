const noop = () => {};

export default {
  say: noop,
  findConversation: noop,

  reply: noop,
  replyWithQuestion: noop,

  replyPublic: noop,
  replyPrivate: noop,
  replyPublicDelayed: noop,
  replyPrivateDelayed: noop,

  api: {
    auth: {
      test: noop
    },
    oauth: {
      access: noop
    },
    channels: {
      archive: noop,
      create: noop,
      history: noop,
      info: noop,
      invite: noop,
      join: noop,
      kick: noop,
      leave: noop,
      list: noop,
      mark: noop,
      rename: noop,
      setPurpose: noop,
      setTopic: noop,
      unarchive: noop
    },
    chat: {
      delete: noop,
      postMessage: noop,
      update: noop,
    },
    emoji: {
      list: noop
    },
    files: {
      delete: noop,
      info: noop,
      list: noop,
      upload: noop
    },
    groups: {
      archive: noop,
      close: noop,
      create: noop,
      createChild: noop,
      history: noop,
      info: noop,
      invite: noop,
      kick: noop,
      leave: noop,
      list: noop,
      mark: noop,
      open: noop,
      rename: noop,
      setPurpose: noop,
      setTopic: noop,
      unarchive: noop
    },
    im: {
      close: noop,
      history: noop,
      list: noop,
      mark: noop,
      open: noop
    },
    reactions: {
      add: noop,
      get: noop,
      list: noop,
      remove: noop
    },
    rtm: {
      start: noop
    },
    search: {
      all: noop,
      files: noop,
      messages: noop
    },
    stars: {
      list: noop
    },
    team: {
      accessLogs: noop,
      info: noop
    },
    users: {
      getPresence: noop,
      info: noop,
      list: noop,
      setActive: noop,
      setPresence: noop
    }
  }
};
