# Fender Bot

> A group project for learning and teaching via a real code base.

## Overview

Fenders Bot aims to provide a place for people to get real world experience working with other members of Fenders Perth, by creating a bot to interact with the Fenders slack network.

The project is made to allow anyone to propose or implement a new feature and should allow people to learn new technologies or experiment with all areas of an application, such as:

- Frontend
- Backend
- Testing
- Visualizations

As well as providing a place for people to hone their code skills, it also provides people the ability to work with a team using modern tools such as GitHub issues and Pull Requests.

## Getting started

### Environment variables

Fendersbot makes use of environment variables.  Either set these manually or place them in a .env file in the projects root directory.

See `.env.sample` for required environment variables. 

### Tests

Test are written using [Mocha](https://mochajs.org/) in [bdd style](https://mochajs.org/#bdd).

Tests can be run with `npm test`.

## Contributing

### Ideas

- Open an issue using the proposal/idea label

### Code

- Create a branch from master
- Code
- Open PR with description and example of feature
- Do not merge to master directly.

#### Style

We have jscs rules in the package.json based on the [airbnb style guide](https://github.com/airbnb/javascript).

The only exception from the airbnb guide is that we have turned off requireTrailingComma.

There are [friendly jscs packages](http://jscs.info/overview#friendly-packages) available for many editing tools.


## Structure

The following will provide a very high level idea of how the bot currently sits together and works. We are using the [Botkit](https://github.com/howdyai/botkit) module for our core functionality. This project is set up as a [Slack app](https://api.slack.com/slack-apps), which means that we require the ability to handle installation in multiple teams and require a web server for auth endpoints.

### Controller

The controller is in charge of creating bots, and a web server. The web server provides endpoints for Oauth and webhooks from Slack and this functionality is handled by Botkit for us.

### Bot

The bot (created by the controller) is in charge with communicating with and posting to Slack. This includes any API calls, direct messages back to users, public responses etc. It will also connect to Slack's [Real Time Messaging API](https://api.slack.com/rtm) to get events from slack channels in, you guessed it, real-time. This is the entry point for `responses` and events are fired on the bot for messages, replies etc.

### Response

A response, in our context, is a simple schema to listen for a message using a regular expression pattern and perform a bot action when a message matches that pattern. A response `callback` will receive the bot that is responsible for handling that response, and a message object from Slack. The message object looks like this:

```
{
    "type": "message",
    "channel": "C2147483705",
    "user": "U2147483697",
    "text": "Hello world",
    "ts": "1355517523.000005"
}
```


## Deploying

You must have the correct permissions to deploy. We only deploy master when it is green. Master should always be green!

```
git checkout master
git pull origin master
git push heroku master
```
