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

See .env.sample for required environment variables. 

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

## Deploying

```
git checkout master
git pull origin master
git push heroku master
```
