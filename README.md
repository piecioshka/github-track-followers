# github-track-followers ([npm](https://www.npmjs.com/package/github-track-followers))

[![npm version](https://badge.fury.io/js/github-track-followers.svg)](https://badge.fury.io/js/github-track-followers)
![](https://img.shields.io/npm/dt/github-track-followers.svg)
[![Travis](https://img.shields.io/travis/piecioshka/github-track-followers.svg?maxAge=2592000)](https://travis-ci.org/piecioshka/github-track-followers)
[![Coverage Status](https://coveralls.io/repos/github/piecioshka/github-track-followers/badge.svg?branch=master)](https://coveralls.io/github/piecioshka/github-track-followers?branch=master)

> :hammer: CLI to display followers of GitHub user

## Installation

```
$ npm install github-track-followers --global
```

## Usage

```
$ github-track-followers -h

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

```
$ github-track-followers piecioshka

GitHub user "piecioshka" has followers (114):

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

```
$ github-track-followers piecioshka > "/tmp/piecioshka-$(date +"%Y-%m-%d-%H-%M-%S").md"
```

Command save report to file `/tmp/piecioshka-2016-11-18-22-47-52.md`.

### Example 3. `Enter to debug mode`

```
$ DEBUG=* github-track-followers piecioshka
```

## Unit tests

```
$ npm test
```

Use [Jasmine](https://jasmine.github.io/).

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2016
