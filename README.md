# github-track-followers

[![npm version](https://badge.fury.io/js/github-track-followers.svg)](https://badge.fury.io/js/github-track-followers)
[![downloads count](https://img.shields.io/npm/dt/github-track-followers.svg)](https://www.npmjs.com/~piecioshka)
[![travis](https://img.shields.io/travis/piecioshka/github-track-followers.svg)](https://travis-ci.org/piecioshka/github-track-followers)
[![coveralls](https://coveralls.io/repos/github/piecioshka/github-track-followers/badge.svg?branch=master)](https://coveralls.io/github/piecioshka/github-track-followers?branch=master)
[![snyk](https://snyk.io/test/github/piecioshka/github-track-followers/badge.svg?targetFile=package.json)](https://snyk.io/test/github/piecioshka/github-track-followers?targetFile=package.json)

:hammer: CLI to display followers of GitHub user

## Installation

```bash
npm install -g github-track-followers
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

```bash
npm test
```

## Code coverage

```bash
npm run coverage
```

## Troubleshooting

### ERROR: Try to display followers of user who is not exists

```bash
github-track-followers not-found-username-iu1h23j

Not found
```

_Solution_: maybe you have typo?

### ERROR: Too many request in one day per one IP address

```bash
github-track-followers piecioshka

API rate limit exceeded for 999.999.999.999. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)
```

_Solution_: you should rest though next 24 hours?

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2016-2019
