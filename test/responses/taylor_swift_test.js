import assert from 'assert';
import sinon from 'sinon';
import fakeBot from '../support/fake_bot';
import stubMessage from '../support/stub_message';
import taylorSwift from '../../lib/slack/responses/taylor_swift';

describe('taylorSwift', () => {
  it('adds a reaction', () => {
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
