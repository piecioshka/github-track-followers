# github-track-followers

[![cli-available](https://badgen.net/static/cli/available/?icon=terminal)](https://runkit.com/npm/github-track-followers)
[![node version](https://img.shields.io/node/v/github-track-followers.svg)](https://www.npmjs.com/package/github-track-followers)
[![npm version](https://badge.fury.io/js/github-track-followers.svg)](https://badge.fury.io/js/github-track-followers)
[![downloads count](https://img.shields.io/npm/dt/github-track-followers.svg)](https://www.npmjs.com/package/github-track-followers)
[![size](https://packagephobia.com/badge?p=github-track-followers)](https://packagephobia.com/result?p=github-track-followers)
[![license](https://img.shields.io/npm/l/github-track-followers.svg)](https://piecioshka.mit-license.org)
[![github-ci](https://github.com/piecioshka/github-track-followers/actions/workflows/testing.yml/badge.svg)](https://github.com/piecioshka/github-track-followers/actions/workflows/testing.yml)

🔨 CLI to display GitHub profile followers

## CLI

Installation:

```bash
npm install -g github-track-followers
```

```bash
github-track-followers -h
```

```plaintext
Usage: github-track-followers -u <string> [-f <string>] [-a]

🔨 CLI to display GitHub profile followers

Options:
  -V, --version            output the version number
  -u, --username <string>  fetch GitHub followers of this user
  -f, --format <string>    output format: json, plain (default: "plain")
  -h, --help               display help for command
```

## Examples

### ➡️ Use case: Display whole list of followers

```bash
github-track-followers -u piecioshka
```

```plaintext
piecioshka's GitHub profile followers (268):

- a-dabrowski
- aarek
- adam-sokolowski
- ...
```

### ➡️ Use case: Use JSON format

```bash
github-track-followers -u piecioshka -f json
```

```json
[
    { "login": "a-dabrowski" },
    { "login": "aarek" },
    { "login": "adam-sokolowski" },
    // ...
]
```

### ➡️ Use case: Enter to debug mode (eg. display requests)

```bash
DEBUG="*" github-track-followers -u piecioshka
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

[The MIT License](https://piecioshka.mit-license.org) @ 2016
