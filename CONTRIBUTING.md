# Contributing to fendersbot

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to fendersbot, which is hosted at [fendersperth/fendersbot](https://github.com/fendersperth/fendersbot) on GitHub.
These are just guidelines, not rules, use your best judgment and feel free to propose changes to this document in a pull request.

#### Table of Contents

[How Can I Contribute?](#how-can-i-contribute)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Your First Code Contribution](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)

[Styleguides](#styleguides)
  * [Javascript Styleguide](#javascript-styleguide)
  * [Test Styleguide](#test-styleguide)

## How Can I Contribute?

### Suggesting Enhancements

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion).

#### Before Submitting An Enhancement Suggestion

* **Perform a [cursory search](https://github.com/fendersperth/fendersbot/search?type=Issues)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). When you create an issue try and provide the following information where appropriate:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Explain why this enhancement would be useful** to most fenders users.
* **List some other bots or slack channels where this enhancement exists.**

### Your First Code Contribution

Unsure where to begin contributing to fendersbot? You can start by looking through these `beginner` and `help-wanted` issues:

* [Beginner issues][beginner] - issues which should only require a few lines of code, and a test or two.
* [Help wanted issues][help-wanted] - issues which should be a bit more involved than `beginner` issues.

### Pull Requests

Pull requests should come from topic branches on forks of the fendersbot repo and target the master branch.

Once the pull request receives a +1 from a core contributor it is ready to be merged to master.

If the pull request has come from a core contributor it is their responsibility to merge.

Try and use the following guidelines when creating pull requests.

* Follow the [Javascript styleguide](#javascript-styleguide) with the exception of no trailing commas.
* End files with a newline.
* Include thoughtfully-worded, well-structured [Mocha bdd style](https://mochajs.org/#bdd) tests in the `./test` folder. Run them using `npm test`.
* Avoid platform-dependent code.

## Styleguides

### Javascript Styleguide

We have jscs rules in the package.json based on the [airbnb style guide](https://github.com/airbnb/javascript).

The only exception from the airbnb guide is that we have turned off requireTrailingComma.

There are [friendly jscs packages](http://jscs.info/overview#friendly-packages) available for many editing tools.

### Test Styleguide

- Include thoughtfully-worded, well-structured [Mocha bdd style](https://mochajs.org/#bdd) tests in the `./test` folder.
- Run them using `npm test`.

[beginner]:https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3Abeginner+repo%3Afendersperth%2Ffendersbot+sort%3Acomments-desc
[help-wanted]:https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3A"help+wanted"+repo%3Afendersperth%2Ffendersbot+sort%3Acomments-desc
