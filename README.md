# github-track-followers

[![npm version](https://badge.fury.io/js/github-track-followers.svg)](https://badge.fury.io/js/github-track-followers)
[![downloads count](https://img.shields.io/npm/dt/github-track-followers.svg)](https://www.npmjs.com/~piecioshka)
[![travis](https://img.shields.io/travis/piecioshka/github-track-followers.svg)](https://travis-ci.org/piecioshka/github-track-followers)
[![coveralls](https://coveralls.io/repos/github/piecioshka/github-track-followers/badge.svg?branch=master)](https://coveralls.io/github/piecioshka/github-track-followers?branch=master)

:hammer: CLI to display followers of GitHub user

## Installation

```bash
npm install -g github-track-followers
```

## Usage

```bash
> github-track-followers -h

Usage: github-track-followers -u <username>

CLI to display followers of GitHub user

Options:
  -V, --version          output the version number
  -u, --user <username>  fetch and display followers from GitHub
  -h, --help             display help for command
```

## Use Cases

### `Display whole list of followers`

```bash
> github-track-followers -u piecioshka

GitHub user "piecioshka" has followers (268):

* a-dabrowski
* aarek
* adam-sokolowski
...
```

### `Save report to file`

```bash
github-track-followers -u piecioshka > "/tmp/piecioshka-$(date +"%Y-%m-%d-%H-%M-%S").md"
```

```bash
cat /tmp/piecioshka-2016-11-18-22-47-52.md

GitHub user "piecioshka" has followers (268):

* a-dabrowski
* aarek
* adam-sokolowski
...
```

### `Enter to debug mode` (eg. display requests)

```bash
DEBUG=* github-track-followers -u piecioshka
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

<details>
<summary>ERROR: Try to display followers of user who is not exists</summary>

```bash
github-track-followers -u not-found-username-iu1h23j

Not found
```

_Solution_: maybe you have typo?

</details>

<details>
<summary>ERROR: Too many request in one day per one IP address</summary>

```bash
github-track-followers -u piecioshka

API rate limit exceeded for 999.999.999.999. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)
```

_Solution_: you should rest though next 24 hours?

</details>

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2016-2020
