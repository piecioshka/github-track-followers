# github-track-followers ([npm](https://www.npmjs.com/package/github-track-followers))

[![npm version](https://badge.fury.io/js/github-track-followers.svg)](https://badge.fury.io/js/github-track-followers)
![](https://img.shields.io/npm/dt/github-track-followers.svg)
[![Travis](https://img.shields.io/travis/piecioshka/github-track-followers.svg?maxAge=2592000)](https://travis-ci.org/piecioshka/github-track-followers)
[![Coverage Status](https://coveralls.io/repos/github/piecioshka/github-track-followers/badge.svg?branch=master)](https://coveralls.io/github/piecioshka/github-track-followers?branch=master)

> :hammer: Tool generate report of GitHub followers

## Installation

```
$ npm install --global github-track-followers
```

## Usage

```
$ github-track-followers -h

  Usage: github-track-followers [options] <username>

  Options:

    -h, --help                output usage information
    -d, --display <username>  Display GitHub user followers
    -s, --save <username>     Save file in reports/ directory report of GitHub user followers
```

## Example

```
$ github-track-followers -d piecioshka

# Followers of: piecioshka (114)

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

## Debug mode

```
DEBUG=* github-track-followers -d piecioshka
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2016
