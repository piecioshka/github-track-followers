# github-track-followers ([npm](https://www.npmjs.com/package/github-track-followers))

[![npm version](https://badge.fury.io/js/github-track-followers.svg)](https://badge.fury.io/js/github-track-followers)
![](https://img.shields.io/npm/dt/github-track-followers.svg)
[![Travis](https://img.shields.io/travis/piecioshka/github-track-followers.svg?maxAge=2592000)](https://travis-ci.org/piecioshka/github-track-followers)
[![Coverage Status](https://coveralls.io/repos/github/piecioshka/github-track-followers/badge.svg?branch=master)](https://coveralls.io/github/piecioshka/github-track-followers?branch=master)

:hammer: CLI to display followers of GitHub user

## Installation

```bash
npm install github-track-followers --global
```

## Usage

```bash
github-track-followers -h

  Usage: github-track-followers [options] <username>


  Commands:

    <username>   display GitHub user followers
    help [cmd]   display help for [cmd]

  CLI to display followers of GitHub user

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

## Examples

### Example 0. `Error handling`

#### ERROR: Try to display followers of user who is not exists

```bash
github-track-followers not-found-username-iu1h23j

Not found
```

_Solution_: maybe you have typo?

#### ERROR: Too many request in one day per one IP address

```bash
github-track-followers piecioshka

API rate limit exceeded for 999.999.999.999. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)
```

_Solution_: you should rest though next 24 hours?

### Example 1. `Display user followers`

```bash
github-track-followers piecioshka

GitHub user "piecioshka" has followers (268):

* a-dabrowski
* aarek
* adam-sokolowski
* AdamKochanski
* adamminiuk
* agrezak
* ahaczewski
* AKalbarczyk
...
```

Display whole list of followers.

### Example 2. `Save report to file`

```bash
github-track-followers piecioshka > "/tmp/piecioshka-$(date +"%Y-%m-%d-%H-%M-%S").md"
```

Command save report to file `/tmp/piecioshka-2016-11-18-22-47-52.md`.

### Example 3. `Enter to debug mode`

```bash
DEBUG=* github-track-followers piecioshka
```

## Unit tests

Use [Jasmine](https://jasmine.github.io/).

```bash
npm test
```

## Code coverage

Use [Istanbul](https://github.com/gotwarlost/istanbul).

```bash
npm run coverage
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2016
