const assert = require('assert');
const sinon = require('sinon');
const fakeBot = require('../support/fake_bot');
const stubMessage = require('../support/stub_message');
const taylorSwift = require('../../lib/slack/responses/taylor_swift');

describe('taylorSwift', function() {
  it('adds a reaction', function() {
    const spy = sinon.spy(fakeBot.api.reactions, 'add');
    const message = stubMessage('Who likes Taylor Swift?');
    taylorSwift.callback(fakeBot, message);
    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, {
      name: 'taylorswift',
      channel: message.channel,
      timestamp: message.ts
    });
  });
});

